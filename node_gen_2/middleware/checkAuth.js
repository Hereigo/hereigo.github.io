const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {

    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic') === -1) {
        return res.status(401).json({
            message: 'Invalid authorization header!'
        });
    }

    // Verify Basic Auth - "Authorization: Basic X "        [X]
    const base64creds = req.headers.authorization.split(' ')[1];

    const credentials = Buffer.from(base64creds, 'base64').toString('ascii');

    const [email, password] = credentials.split(':');

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({ message: 'Invalid password or email.' });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return res.status(401).json({ message: 'Invalid password or email.' });
    }

    // attach user to request object:
    req.user = user._doc;

    next();
};