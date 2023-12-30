import { Schema, model } from 'mongoose';

const userSchema = Schema({
    userName: {
        type: String,
        require: [true, 'UserName is required!'],
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: 'user' // 'admin'
    }
});

export const User = model('User', userSchema);

export default User;