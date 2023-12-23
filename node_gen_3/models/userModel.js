const mongoose = require('mongoose');

const userMongoSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: [true, 'Fullname is required!'] // require not work???
    },
    photo: {
        type: String,
        default: null
    }
});

const UserMongo = mongoose.model('UserMongo', userMongoSchema);

module.exports = UserMongo;