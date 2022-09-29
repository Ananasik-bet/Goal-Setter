import AsyncHandler from "express-async-handler";

// @desc    Get all goals
// @route   GET /api/goals/
// @access  Private
export const getGoals = AsyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' });
})

// @desc    Set a goal
// @route   POST /api/goals/
// @access  Private
export const setGoal = AsyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field!')
    }

    res.status(200).json({ message: 'Set goal' });
})

// @desc    Update a goal
// @route   PUT /api/goals/:id/
// @access  Private
export const updateGoal = AsyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
})

// @desc    Delete a goal
// @route   DELETE /api/goals/:id/
// @access  Private
export const deleteGoal = AsyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
})