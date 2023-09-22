var express = require('express');
var app = express();
app.set('view engine', 'jade');

const dbcfg = require('./config/db');
//const url = dbcfg.uri;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dbName = 'test';


app.route('/').get(function (req, res) {
    res.send('Hello');
});

app.route('/test').get(function (req, res) {

    console.log('aaa');

    const client = new MongoClient(url);

    client.connect(function (err) {

        console.log('Connected successfully to server');

        const db = client.db(dbName);

        client.close();
    });

});

// Server started.
var server = app.listen(3000, function () { });