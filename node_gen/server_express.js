const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sqlite_tasks.db');

let tasks = [
    { id: 1, text: 'To do a 0.1' },
    { id: 2, text: 'To do a 0.2' },
    { id: 3, text: 'To do a 0.3' },
    { id: 4, text: 'To do a 0.4' },
    { id: 5, text: 'To do a 0.5' }
];

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

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    db.run('INSERT INTO tasks (text) VALIES (?)', [newTask.text], (err) => {
        serverErrorHandle(err, res);
    });
    res.status(201).json({ id: this.lastID });
});

app.put('/tasks/:id', (req, res) => {
    const { textAbc } = req.body;
    const taskId = parseInt(req.params.id);
    // const foundTask = tasks.find(t => t.id === taskId);
    // if (!foundTask) {
    //     res.status(404).json({ message: 'Task not found.' });
    // }
    // foundTask.text = taskToUpdate;
    db.run('INSERT INTO tasks SET text = ? WHERE id = ?', [taskToUpdate.text, taskId], (err) => {
        serverErrorHandle(err, res);
        res.status(201).json({ id: taskId, textAbc });
    });
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    res.status(204).json(tasks);
});



app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});