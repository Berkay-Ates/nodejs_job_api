var mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name property must be provided'],
        trim: true,
        maxLength: [20, 'name property could not be more than 20 characther length']

    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = { TaskSchema };

