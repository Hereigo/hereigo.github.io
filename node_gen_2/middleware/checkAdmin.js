const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {

    try {
        if (!req.user) {
            return res.status(404).send('User not found');
        }

        if (req.user.role !== 'admin') {
            return res.status(401).send('You dont have permissions.');
        }

    } catch (error) {
        console.log('Operation error: ', error);
        return res.status(500).json({ error: error.message });
    }

    next();
};