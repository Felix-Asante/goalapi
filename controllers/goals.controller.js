import asyncHandler from "express-async-handler";
import Goal from "../models/goal.js";
// @desc GET all goals
//@route GET /api/goals
//@access privates
export const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	res.status(200).json({ goals });
});

// @desc create new goal
//@route POST /api/goals
//@access privates
export const createNewGoal = asyncHandler(async (req, res) => {
	if (Object.keys(req.body).length === 0) {
		res.status(400);
		throw new Error("Please make sure you're sending the correct data");
	}

	const goal = await Goal.create({
		goal: req.body.goal,
		isCompleted: false,
	});
	res.status(200).json({ data: goal });
});

// @desc Update  goal
//@route PUT /api/goals/id
//@access privates
export const updateGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(201).json({ data: updatedGoal });
});

// @desc delete  goal
//@route DELETE /api/goals/id
//@access privates
export const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	await goal.remove();
	res.status(200).json({ data: req.params.id });
});
