import AsyncHandler from "express-async-handler";
import Goal from '../models/goalModel.js'
import User from "../models/userModel.js";

// @desc    Get all goals
// @route   GET /api/goals/
// @access  Private
export const getGoals = AsyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id });

    res.status(200).json(goals);
})

// @desc    Set a goal
// @route   POST /api/goals/
// @access  Private
export const setGoal = AsyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field!')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    });

    res.status(200).json(goal);
})

// @desc    Update a goal
// @route   PUT /api/goals/:id/
// @access  Private
export const updateGoal = AsyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check user is goal author
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not author of goal')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    res.status(200).json(updatedGoal);
})

// @desc    Delete a goal
// @route   DELETE /api/goals/:id/
// @access  Private
export const deleteGoal = AsyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check user is goal author
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not author of goal')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id });
})