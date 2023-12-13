const express = require('express');
const multer = require('multer');

const xpsApp = express();

const upload = multer({ dest: 'uploads/' }).single('demo_image');

xpsApp.get('/', (req, res) => {
    return res.send('Server is running.');
});

xpsApp.post('/img', (req, res) => {
    upload(req, res, (err) => {
        if (err)
            return res.status(400).send('Bad request.');
        return res.send(req.file);
    });
});

xpsApp.listen(3000, () => {
    console.log('\r\nServer is listening on http://localhost:3000');
});
