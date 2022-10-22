const mongoose = require('mongoose');
const { TaskSchema } = require('../schemas/task_schemas');

const mongoModel = mongoose.model('Tasks', TaskSchema);
module.exports = mongoModel;