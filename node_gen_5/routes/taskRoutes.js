import express from "express";
import * as taskController from '../controllers/taskController.js';
import checkAuth from '../middlewares/checkAuth.js';

export const router = express.Router();

router.use(checkAuth);

router.post('/task', taskController.createTask);

router.get('/task', taskController.getTasksByUserId);

router.get('/task/:id', taskController.getTask);

router.put('/task/:id', taskController.updateTask);

router.delete('/task/:id', taskController.deleteTask);

export default router;