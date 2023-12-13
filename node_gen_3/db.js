const mongoose = require('mongoose');

const dbCfg = require('./config/db');

mongoose.connect(dbCfg.URI).then(() => {
    console.log('Successfully connected to DB.');
}).catch((err) => {
    console.err(err);
});