const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./config/db');
const mongoose = require('mongoose');
mongoose.connect(db.URI);

const { Task } = require('./models/mongoModel.js');

app.use(bodyParser.json());

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({
            isCompleted: false,
            text: { '$ne': 'hidden' } // Not Equal
        });
        if (!tasks) {
            res.status(404).json({ message: 'Task not found.' });
        }
        res.status(200).json(tasks);
    } catch (error) {
        console.log('Task creation error: ', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            res.status(404).json({ message: 'Task not found.' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.log('Task creation error: ', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const newTask = req.body;
        const task = await Task.create({
            text: newTask.text
        });
        if (!task) {
            res.status(404).json({ message: 'Task not found.' });
        }
        res.status(201).json(task);
    } catch (error) {
        console.log('Task creation error: ', error);
        res.status(500).json({ error: error.message });
    }
});

app.put('/tasks/:id', async (req, res) => {
    try {
        const { text, isCompleted } = req.body;
        const taskId = req.params.id;
        const task = await Task.findByIdAndUpdate(taskId,
            { text, isCompleted },
            { new: true } // means the result TASK is applied AFTER update.
        );
        if (!task) {
            res.status(404).json({ message: 'Task not found.' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.log('Task creation error: ', error);
        res.status(500).json({ error: error.message });
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            res.status(404).json({ message: 'Task not found.' });
        }
        res.status(204).json(task);
    } catch (error) {
        console.log('Task creation error: ', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, function () {
    console.log(`Server is listening on http://localhost:${port}`);
});