const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const UserPix = require('./models/userModel');
require('./db');
const app = express();

app.use(bodyParser.json());

// Middleware to process STATIC files by route '/uploads' for path 'uploads':
app.use('/uploads', express.static('uploads'));

const formdataImgParam = "demo_image";
const maxFiles = 4;
const limitBytes = 1_000_000; // 1MB

const uploadSingle = multer({ dest: 'uploads/' }).single(formdataImgParam);

app.post('/img', (req, res) => {
    uploadSingle(req, res, (err) => {
        if (err)
            return res.status(400).send('Bad request.');

        res.send(req.file);
        //                  Response File Metadata:
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

// -------------------------------------------------------------------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadDisc = multer({ storage, limits: { fileSize: limitBytes } }).single(formdataImgParam);

app.post('/img22', (req, res) => {
    uploadDisc(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).send('Bad request.');
        }
        res.send(req.file);
    });
});

// -------------------------------------------------------------------------

const uploadDiscMulti = multer({ storage, limits: { fileSize: limitBytes } });

app.post('/img44', uploadDiscMulti.array(formdataImgParam, maxFiles), (req, res) => {
    try {
        res.send(req.files);
    } catch (error) {
        console.log(err);
        return res.status(400).send('Bad request.');
    }
});

app.post('/user', async (req, res) => {
    try {
        const doc = await UserPix.create(req.body);
        return res.status(200).json(doc);

    } catch (error) {
        console.log(err);
        return res.status(400).send('Bad request.');
    }
});

const uploadPic = multer({ storage, limits: { fileSize: limitBytes } });

app.put('/user/:id', uploadPic.single(formdataImgParam), async (req, res) => {
    try {
        const doc =
            await UserPix.findByIdAndUpdate(req.params.id,
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
