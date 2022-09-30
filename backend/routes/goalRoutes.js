import express from 'express';
import { goalController } from '../controllers/index.js'
import { authMiddleware } from '../middleware/index.js'

export const router = express.Router();

router.route('/')
    .get(authMiddleware.protect, goalController.getGoals)
    .post(authMiddleware.protect, goalController.setGoal);

router.route('/:id/')
    .put(authMiddleware.protect, goalController.updateGoal)
    .delete(authMiddleware.protect, goalController.deleteGoal)
