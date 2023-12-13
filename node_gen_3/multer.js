const express = require('express');
const multer = require('multer');
const xpsApp = express();
//                                              request form-data KEY
const upload = multer({ dest: 'uploads/' }).single("demo_image");

xpsApp.get('/', (req, res) => {
    return res.send('Server is running.');
});

xpsApp.post('/img', (req, res) => {
    upload(req, res, (err) => {
        if (err)
            return res.status(400).send('Bad request.');

        res.send(req.file);
        // Response File Metadata:
        // {
        //     "fieldname": "demo_image",
        //     "originalname": "Bla-bla-bla.png",
        //     "encoding": "7bit",
        //     "mimetype": "image/png",
        //     "destination": "uploads/",
        //     "filename": "606a35b560fc125207313e71c5f794e2",
        //     "path": "uploads\\606a35b560fc125207313e71c5f794e2",
        //     "size": 641909
        // }
    });
});

xpsApp.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});
