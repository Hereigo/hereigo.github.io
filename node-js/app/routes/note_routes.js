module.exports = function (app, db) {

    app.get('/', (req, res) => {
        res.send('Site is under construction.')
    });

    // Receiving -
    // Content-type : application/x-www-form-urlencoded
    app.post('/notes', (req, res) => {
        console.log(req.body)
        res.send('Hello')
    });

};