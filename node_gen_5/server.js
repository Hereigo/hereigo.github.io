import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import './utils/db.js';
import cors from 'cors';

// Routes:
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.use(bodyParser.json());

// TODO:
// Move this into Routes:
app.get('/', (req, res) => {
    fs.readFile('index.html', (err, fileData) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileData);
        return res.end();
    })
});

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
