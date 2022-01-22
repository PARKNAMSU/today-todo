const todoModel = require('../../model/todo');

class TodoController {
    static Instance = null;
    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    insertTodo = async (req, res) => {
        res.status(req.sendData.status).send(req.sendData);
    };
    updateTodo = async (req, res, next) => {
        res.status(req.sendData.status).send(req.sendData);
    };
    completeTodo = async (req, res, next) => {
        res.status(req.sendData.status).send(req.sendData);
    };
    deleteTodo = async (req, res, next) => {};
    getTodo = async (req, res, next) => {
        res.status(req.sendData.status).send(req.sendData);
    };
}

module.exports = TodoController.getInstance();
