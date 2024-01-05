import express from "express";
import * as taskController from '../controllers/taskController.js';
import checkAuth from '../middlewares/checkAuth.js';
import checkAdmin from '../middlewares/checkAdmin.js';

const router = express.Router();

router.use(checkAuth);

// Order is IMPORTANT!

router.get('/task', taskController.getTasksByUserId);
router.get('/task/all', checkAdmin, taskController.getAllTasks);
router.get('/task/:id', taskController.getTask);

/**
 * @openapi
 * '/api/task':
 *   post:
 *     tags:
 *     - Task
 *     summary: Create a task
 *     security:
 *     - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 default: Buy a book
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 */
router.post('/task', taskController.createTask);

router.put('/task/:id', taskController.updateTask);

router.delete('/task/:id', taskController.deleteTask);

export default router;
