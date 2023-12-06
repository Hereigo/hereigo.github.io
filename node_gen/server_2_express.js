const bodyParser = require('body-parser');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('sqlite_tasks.db');
const port = 3000;

app.use(bodyParser.json());

const serverErrorHandle = (err, res) => {
    if (err) {
        res.status(500).json({ error: err.message });
    }
};

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
    db.run('UPDATE tasks SET text = ? WHERE id = ?', [text, taskId], (err) => {
        serverErrorHandle(err, res);
        res.status(200).json({ id: taskId, textAbc: text });
    });
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    db.run('DELETE FROM tasks WHERE id = ?', taskId, (err, rows) => {
        serverErrorHandle(err, res);
        res.status(204).send();
    });
});

app.listen(port, function () {
    console.log(`Server is listening on http://localhost:${port}`);
});