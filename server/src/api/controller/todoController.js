const todoModel = require('../../model/todo');

class TodoController {
    static Instance = null;
    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    async insertTodo(req, res) {}
    async updateTodo(req, res) {}
    async completeTodo(req, res) {}
    async deleteTodo(req, res) {}
    async getMyTodo(req, res) {}
}

module.exports = TodoController.getInstance();
