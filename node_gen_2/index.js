const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./config/db');
const mongoose = require('mongoose');
mongoose.connect(db.URI).then(() => {
    console.log('Successfully connected to DB.');
}).catch((err) => {
    console.err(err);
});

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
