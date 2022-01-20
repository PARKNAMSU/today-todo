const todoModel = require('../../model/todo');

class TodoValidation {
    static Instance = null;
    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    async insertTodo(req, res, next) {}
    async updateTodo(req, res, next) {}
    async completeTodo(req, res, next) {}
    async deleteTodo(req, res, next) {}
    async getMyTodo(req, res, next) {}
}

module.exports = TodoValidation.getInstance();
