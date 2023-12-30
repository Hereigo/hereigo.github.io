import express from 'express';
import bodyParser from 'body-parser';
import './utils/db.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});