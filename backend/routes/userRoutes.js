import express from 'express';
import { userController } from '../controllers/index.js'
import { authMiddleware } from "../middleware/index.js";

export const router = express.Router()

router.post('/', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/me', authMiddleware.protect, userController.getMe);