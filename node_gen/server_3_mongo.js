const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./config/db');
const mongoose = require('mongoose');
mongoose.connect(db.URI);

const { Task } = require('./models/mongoModel.js');

app.use(bodyParser.json());

const serverErrorHandle = (err, res) => {
    if (err) {
        console.log('Task creation error: ', err);
        res.status(500).json({ error: err.message });
    }
};

app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        serverErrorHandle(error, res);
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({
            isCompleted: false,
            text: { '$ne': 'hidden' } // Not Equal
        });
        res.status(200).json(tasks);
    } catch (error) {
        serverErrorHandle(error, res);
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const newTask = req.body;
        const task = await Task.create({
            text: newTask.text
        });
        return res.status(201).json(task);
    } catch (error) {
        serverErrorHandle(error, res);
    }
});

app.put('/tasks/:id', async (req, res) => {
    try {
        const { text, isCompleted } = req.body;
        const taskId = parseInt(req.params.id);
        const task = await Task.findByIdAndUpdate(taskId,
            { text, isCompleted },
            { new: true } // means the result TASK is applied AFTER update.
        );
        return res.status(200).json(task);
    } catch (error) {
        serverErrorHandle(error, res);
    }
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
});

app.listen(port, function () {
    console.log(`Server is listening on http://localhost:${port}`);
});