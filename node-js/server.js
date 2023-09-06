const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = 8000;

// BodyParser:
app.use(bodyParser.urlencoded({ extended: true }));

// Simple app start:
// require('./app/routes')(app, {});
// app.listen(port, () => {
//     console.log('We are live on ' + port);
// });

MongoClient.connect(db.url, (err, database) => {

    if (err) { return console.log(err); }

    // Make sure you add the database name and not the collection name
    // (for MongoDB 3.0+ only)
    // const database = database.db("note-api");
    require('./app/routes')(app, database);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });

})