const { Schema, Model, model } = require('mongoose');
const CustomDate = require('../api/method/date');
const TodoSchema = new Schema({
    title: { type: String },
    content: { type: String },
    user_email: { type: String },
    time: { type: String },
    date: { type: Date },
    important: { type: String },
    isFinish: { type: Boolean, default: false },
    create_date: { type: Date, default: CustomDate.setSeoulTimeZone() },
});

TodoSchema.statics.create = function (data) {
    data.create_date = CustomDate.setSeoulTimeZone();
    const todo = new this(data);
    return todo.save();
};
TodoSchema.statics.updateAndFindOne = async function (_id, data) {
    await this.updateOne({ _id }, data);
    return this.findById(_id);
};

module.exports = model('Todo', TodoSchema);
