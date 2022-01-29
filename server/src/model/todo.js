const { Schema, Model, model } = require('mongoose');
const CustomDate = require('../api/method/date');
const TodoSchema = new Schema(
    {
        title: { type: String },
        content: { type: String },
        user_email: { type: String },
        time: { type: String },
        date: { type: String },
        important: { type: String },
        isFinish: { type: Boolean, default: false },
    },
    { timestamps: true },
);

TodoSchema.statics.create = function (data) {
    const todo = new this(data);
    return todo.save();
};
TodoSchema.statics.updateAndFindOne = async function (_id, data) {
    await this.updateOne({ _id }, data);
    return this.findById(_id);
};
TodoSchema.statics.getGroupByDateForMonth = async function ({
    email,
    isTotal = true,
    isFinish,
    month,
}) {
    //월에 맞는 date 가져오기
    let thisDate = CustomDate.allDateForMonth(month);
    // total , not total 분기
    let matchOpt = isTotal
        ? {
              user_email: email,
              date: { $gte: month + '-01', $lte: month + '-' + thisDate },
          }
        : {
              user_email: email,
              isFinish,
              date: { $gte: month + '-01', $lte: month + '-' + thisDate },
          };
    let aggregation = await this.aggregate()
        .match(matchOpt)
        .group({
            // group by
            _id: { date: '$date' },
            total: { $sum: 1 },
        });
    let existDates = aggregation.map((item) =>
        Number(item._id.date.split('-')[2]),
    );
    // 데이터가 존
    for (let i = 1; i <= thisDate; i++) {
        if (!existDates.includes(i)) {
            let createDate = i < 10 ? month + '-' + '0' + i : month + '-' + i;
            aggregation.push({
                _id: { date: createDate },
                total: 0,
            });
        }
    }
    aggregation.sort((a, b) => {
        let compare1 = Number(a._id.date.split('-')[2]);
        let compare2 = Number(b._id.date.split('-')[2]);
        return compare1 - compare2;
    });
    return aggregation;
};

module.exports = model('Todo', TodoSchema);
