const todoModel = require('../../model/todo');

class TodoValidation {
    static Instance = null;
    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    insertTodo = async (req, res, next) => {
        try {
            let todo = await todoModel.create(req.body);
            req.sendData = {
                status: 200,
                message: 'ok',
                data: todo,
            };
        } catch (err) {
            req.sendData = {
                status: 404,
                message: 'invalid access',
                err,
            };
        } finally {
            next();
        }
    };
    updateTodo = async (req, res, next) => {
        let { _id } = req.params;
        let find = await this.validById(_id, res);
        if (!find) {
            req.sendData = {
                status: 400,
                message: 'invalid id',
            };
        } else {
            try {
                let data = await todoModel.updateAndFindOne(_id, req.body);
                req.sendData = {
                    status: 200,
                    data,
                    message: 'ok',
                };
            } catch (err) {
                console.log(err);
                res.status(404).send({
                    message: 'invalid values',
                    err,
                });
                return;
            }
        }
        next();
    };
    completeTodo = async (req, res, next) => {
        let { _id } = req.params;
        let find = await this.validById(_id, res);
        if (!find) {
            req.sendData = {
                status: 400,
                message: 'invalid id',
            };
        } else {
            req.sendData = {
                status: 200,
                data: find,
                message: 'ok',
            };
        }
        await todoModel.updateOne({ _id }, { isFinish: true });
        next();
    };
    deleteTodo = async (req, res, next) => {};
    getTodo = async (req, res, next) => {
        let { _id } = req.params;
        let find = await this.validById(_id, res);

        if (!find) {
            req.sendData = {
                status: 400,
                message: 'invalid id',
            };
        } else {
            req.sendData = {
                status: 200,
                data: find,
                message: 'ok',
            };
        }
        next();
    };
    getTodoList = async (req, res, next) => {};
    validById = async (_id, res) => {
        try {
            let findtodo = await todoModel.findById(_id);
            return findtodo ? findtodo : false;
        } catch (err) {
            res.status(404).send({
                message: 'invalid access',
                err,
            });
            return;
        }
    };
}

module.exports = TodoValidation.getInstance();
