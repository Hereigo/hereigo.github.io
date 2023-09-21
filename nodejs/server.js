var express = require('express');
var app = express();
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.send('Hello!');
});

app.post('/', function (req, res) {
    res.send('req.headers => ' + req.headers['content-type']);
});

app.route('/test').get(function (req, res) {

    res.render('index', { title: 'Page Title', message: 'Hello with Jade' });
})

var server = app.listen(3000, function () { });