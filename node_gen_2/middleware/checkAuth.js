module.exports = async (req, res, next) => {
    // Check Basic Auth Header:

    if (!req.headers.authorization && req.headers.authorization.indexOf('Basic') === -1) {
        return res.status(401).json({
            message: 'Invalid authorization header!'
        });
    }

    // Verify Basic Auth - "Authorization: Basic X"         [X]
    const base64creds = req.headers.authorization.split(' ')[1];


};