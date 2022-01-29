const express = require('express');
const todoRouter = express.Router();
const todoValidation = require('../api/validation/todoValidation');
const todoController = require('../api/controller/todoController');

todoRouter.post(
    '/list/:email',
    todoValidation.getTodoList,
    todoController.getTodoList,
);

todoRouter.post(
    '/create',
    todoValidation.insertTodo,
    todoController.insertTodo,
);
todoRouter.get('/get/:_id', todoValidation.getTodo, todoController.getTodo);
todoRouter.post(
    '/complete/:_id',
    todoValidation.completeTodo,
    todoController.completeTodo,
);

todoRouter.post(
    '/update/:_id',
    todoValidation.updateTodo,
    todoController.updateTodo,
);
todoRouter.delete(
    '/delete/:_id',
    todoValidation.deleteTodo,
    todoController.deleteTodo,
);

module.exports = todoRouter;
