const express = require('express');
const statsRouter = express.Router();
const statsValidation = require('../api/validation/statsValidation');
const statsController = require('../api/controller/statsController');

statsRouter.post(
    '/get/date/:email',
    statsValidation.getTodoByDate,
    statsController.getTodoByDate,
);

module.exports = statsRouter;
