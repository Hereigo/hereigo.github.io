import express from 'express';
import bodyParser from 'body-parser';
import './utils/db.js';

// Routes:
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
