// Load modules by Node-Require():

const log = require('./log_module');

const express = require("express");
// import express from "express"; ... ???

const dbcfg = require('./config/db');

const app = express();

const port = 3000;

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(port, function () {

    log.it(`Example app listening on port ${port}!`);

    log.it(`${dbcfg.url.substring(0, 15)}...`);
});
