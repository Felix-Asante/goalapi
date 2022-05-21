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
export const createNewGoal = async (req, res) => {
	if (Object.keys(req.body).length === 0) {
		res.status(400);
		throw new Error("Please make sure you're sending the correct data");
	}

	const goal = await Goal.create({
		goal: req.body.goal,
		isCompleted: false,
	});
	res.status(200).json({ data: goal });
};

// @desc Update  goal
//@route PUT /api/goals/id
//@access privates
export const updateGoal = (req, res) => {
	res.status(201).json({ message: "goal updated" });
};
