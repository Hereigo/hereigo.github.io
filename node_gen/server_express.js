const bodyParser = require('body-parser');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('sqlite_tasks.db');
const port = 3000;

const serverErrorHandle = (err, res) => {
    if (err) {
        res.status(500).json({ error: err.message });
    }
};

app.use(bodyParser.json());

app.get('/', (req, res) => {
    db.all('SELECT * FROM tasks', (err, rows) => {
        serverErrorHandle(err, res);
        res.status(200).json(rows);
    });
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    db.all('SELECT * FROM tasks WHERE id = ? LIMIT 1', taskId, (err, rows) => {
        serverErrorHandle(err, res);
        res.status(200).json(rows);
    });
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    db.run('INSERT INTO tasks (text) VALUES (?)', [newTask.text], (err) => {
        serverErrorHandle(err, res);
    });
    res.status(201).json({ id: this.lastID });
});

app.put('/tasks/:id', (req, res) => {
    const { text } = req.body;
    const taskId = parseInt(req.params.id);
    // const foundTask = tasks.find(t => t.id === taskId);
    // if (!foundTask) {
    //     res.status(404).json({ message: 'Task not found.' });
    // }
    // foundTask.text = taskToUpdate;
    db.run('UPDATE tasks SET text = ? WHERE id = ?', [text, taskId], (err) => {
        serverErrorHandle(err, res);
        res.status(201).json({ id: taskId, textAbc: text });
    });
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    res.status(204).json(tasks);
});

app.listen(port, function () {
    console.log(`Server is listening on http://localhost:${port}`);
});