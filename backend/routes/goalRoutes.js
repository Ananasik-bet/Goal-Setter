import express from 'express';
import * as controller from '../controllers/index.js'

export const router = express.Router();

router.route('/')
    .get(controller.goalController.getGoals)
    .post(controller.goalController.setGoal);

router.route('/:id/')
    .put(controller.goalController.updateGoal)
    .delete(controller.goalController.deleteGoal)
