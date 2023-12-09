const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;
const User = require('./models/userModel');
const checkAuth = require('./middleware/checkAuth');
const checkAdmin = require('./middleware/checkAdmin');

const db = require('./config/db');
const mongoose = require('mongoose');
mongoose.connect(db.URI).then(() => {
    console.log('Successfully connected to DB.');
}).catch((err) => {
    console.err(err);
});

app.use(bodyParser.json());
// app.use(checkAuth); - here is for ALL methods.

app.post('/register', async (req, res) => {
    try {
        // Request body destructuring:
        const { firstName, lastName, email, password: psw, role } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(psw, salt);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hash,
            role
        });
        const { password, ...userData } = user._doc; // userData exclude password
        return res.status(201).json(userData);

    } catch (error) {
        console.log('Operation error: ', error);
        return res.status(500).json({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password: PSW } = req.body; // Request body destructuring:
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid password or email.' });
        }
        const isValid = await bcrypt.compare(PSW, user.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid password or email.' });
        }
        const { password, ...userData } = user._doc; // userData exclude password
        return res.status(200).json(userData);

    } catch (error) {
        console.log('Operation error: ', error);
        return res.status(500).json({ error: error.message });
    }
});

// Using CHECK AUTH:
app.get('/test', checkAuth, checkAdmin, async (req, res) => {
    return res.send('You authorized to this area.');
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
