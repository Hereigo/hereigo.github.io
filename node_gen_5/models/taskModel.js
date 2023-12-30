import mongoose, { Schema, model } from 'mongoose';

const taskSchema = Schema({
    description: {
        type: String,
        require: true,
    },
    comleted: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

export const Task = model('Task', taskSchema);

export default Task;