
const express = require('express');
const router = express.Router();
const taskController = require('../controller/task_controller');

router.route('/').get(taskController.getTasks).post(taskController.createTask);
router.route('/?id').get(taskController.getTask).patch(taskController.updateTask).delete(taskController.deleteTask);

module.exports = router;

