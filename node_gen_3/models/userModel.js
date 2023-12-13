const mongoose = require('mongoose');

const userPixSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: [true, 'Fullname is required!'] // require not work???
    },
    photo: {
        type: String,
        default: null
    }
});

const UserPix = mongoose.model('UserPix', userPixSchema);

module.exports = UserPix;