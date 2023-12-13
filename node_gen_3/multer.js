const express = require('express');
const multer = require('multer');
const xpsApp = express();

xpsApp.get('/', (req, res) => {
    return res.send('Server is running.');
});

const formdataName = "demo_image";
const maxFiles = 4;
const limitBytes = 1_000_000; // 1MB

const upload = multer({ dest: 'uploads/' }).single(formdataName);

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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadDics = multer({ storage, limits: { fileSize: limitBytes } }).single(formdataName);

xpsApp.post('/img22', (req, res) => {
    uploadDics(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).send('Bad request.');
        }
        res.send(req.file);
    });
});

const uploadDiscMulti = multer({ storage, limits: { fileSize: 3_000_000 } });

xpsApp.post('/img44', uploadDiscMulti.array(formdataName, maxFiles), (req, res) => {
    try {
        res.send(req.files);
    } catch (error) {
        console.log(err);
        return res.status(400).send('Bad request.');
    }
});

xpsApp.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});
