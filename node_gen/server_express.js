const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const dbName = 'sqlite_tasks.db';

let tasks = [
    { id: 1, text: 'To do a 0.1' },
    { id: 2, text: 'To do a 0.2' },
    { id: 3, text: 'To do a 0.3' },
    { id: 4, text: 'To do a 0.4' },
    { id: 5, text: 'To do a 0.5' }
];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const taskToUpdate = req.body;
    const taskId = parseInt(req.params.id);
    const foundTask = tasks.find(t => t.id === taskId);
    if (!foundTask) {
        res.status(404).json({ message: 'Task not found.' });
    }
    foundTask.text = taskToUpdate;
    res.status(200).json(foundTask);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    res.status(204).json(tasks);
});

app.listen(() => {
    console.log(`Server listening on http://localhost:3000`);
});