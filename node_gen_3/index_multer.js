const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const userMongo = require('./models/userModel');
require('./db');
const app = express();

app.use(bodyParser.json());

// Middleware to process STATIC files by route '/uploads' for path 'uploads':
app.use('/uploads', express.static('uploads'));

const formdataParam = "files";
const maxFiles = 4;
const limitBytes = 3_000_000; // 3MB

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, fileData) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileData);
        return res.end();
    })
});

// --------- Multer Single : -----------------------------

const uploadSingle = multer({ dest: 'uploads/' }).single(formdataParam);

app.post('/img', (req, res) => {
    uploadSingle(req, res, (err) => {
        if (err)
            return res.status(400).send('Bad request.');

        res.send(req.file);
        //                   Send a File-Metadata:
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

// --------- Multer DiskStorage (single) : -----------------------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadDisc = multer({ storage, limits: { fileSize: limitBytes } }).single(formdataParam);

app.post('/files', (req, res) => {
    uploadDisc(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).send('Bad request.');
        }
        res.send(req.file);
    });
});

// --------- Multer DiskStorage (Multi) : -----------------------------

const uploadDiscMulti = multer({ storage, limits: { fileSize: limitBytes } });

app.post('/filesMulti', uploadDiscMulti.array(formdataParam, maxFiles), (req, res) => {
    try {
        return res.send(req.files);
    } catch (error) {
        console.log(err);
        return res.status(400).send('Bad request.');
    }
});

app.post('/user', async (req, res) => {
    try {
        const doc = await userMongo.create(req.body);
        return res.status(200).json(doc);

    } catch (error) {
        console.log(err);
        return res.status(400).send('Bad request.');
    }
});

// --------- Multer picture upload : -----------------------------

const uploadPic = multer({ storage, limits: { fileSize: limitBytes } });

app.put('/user/:id', uploadPic.single(formdataParam), async (req, res) => {
    try {
        const doc =
            await userMongo.findByIdAndUpdate(req.params.id,
                { photo: req.file.filename });

        return res.status(200).json(doc);

    } catch (error) {
        console.log(err);
        return res.status(400).send('Bad request.');
    }
});

// -------------------------------------------------------------------------

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});
