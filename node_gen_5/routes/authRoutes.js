import express from "express";
import * as authController from '../controllers/authController';

export const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

export default router;