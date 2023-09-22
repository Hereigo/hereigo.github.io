// Load modules:

const express = require("express");
// import express from "express"; ... ???
const dbcfg = require('./config/db');

const app = express();

const port = 3000;

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
    console.log(`A - ${dbcfg.url}!`);
});
