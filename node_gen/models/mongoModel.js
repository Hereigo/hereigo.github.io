const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: {
        type: 'string',
        require: [true, 'Task description is required!']
    },
    isCompleted: {
        type: 'boolean',
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = {
    Task
}