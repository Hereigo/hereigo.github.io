module.exports = function (app, db) {

    app.get('/notes', (req, res) => {
        res.send('Site is under construction.')
    });

    // Receiving -
    // Content-type : application/x-www-form-urlencoded
    // app.post('/notes', (req, res) => {
    //     console.log(req.body)
    //     res.send('Hello')
    // });

    //const collection =
    app.post('/notes', (req, res) => {
        const note = {
            text: req.body.text,
            title: req.body.title
        };
        db.collection('notes').insertOne(note, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

};