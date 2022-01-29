const todoModel = require('../../model/todo');
class StatsValidation {
    static Instance = null;
    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    getTodoByDate = async (req, res, next) => {
        let { email } = req.params;
        let findTotal = await todoModel.getGroupByDateForMonth({
            email,
            isTotal: true,
            month: req.body.month,
        });
        let findIsFinish = await todoModel.getGroupByDateForMonth({
            email,
            isTotal: false,
            isFinish: true,
            month: req.body.month,
        });
        let findIsNotFinish = await todoModel.getGroupByDateForMonth({
            email,
            isTotal: false,
            isFinish: false,
            month: req.body.month,
        });
        req.sendData = {
            data: {
                total: findTotal,
                isFinish: findIsFinish,
                isNotFinish: findIsNotFinish,
            },
            status: 200,
            message: 'ok',
        };
        next();
    };
}

module.exports = StatsValidation.getInstance();
