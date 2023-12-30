import express from 'express';
import bodyParser from 'body-parser';
import './utils/db.js';
import authRouter from './controllers/authController.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});