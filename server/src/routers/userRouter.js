const express = require('express');
const userRouter = express.Router();
const userValidation = require('../api/validation/userValidation');
const userController = require('../api/controller/userController');

userRouter.post(
    '/create/:email',
    userValidation.insertUser,
    userController.insertUser,
);
userRouter.post('/get/:email', userValidation.getUser, userController.getUser);
userRouter.get('/get', userValidation.getUser, userController.getUser);
userRouter.get('/logout', userValidation.logout);
userRouter.post(
    '/update/:email',
    userValidation.updateUser,
    userController.getUser,
);
module.exports = userRouter;
