const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;
const User = require('./models/userModel');

const db = require('./config/db');
const mongoose = require('mongoose');
mongoose.connect(db.URI).then(() => {
    console.log('Successfully connected to DB.');
}).catch((err) => {
    console.err(err);
});

app.use(bodyParser.json());

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

        res.status(201).json(userData);

    } catch (error) {
        console.log('Operation error: ', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
