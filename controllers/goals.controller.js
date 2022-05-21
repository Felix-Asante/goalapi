import asyncHandler from "express-async-handler";

// @desc GET all goals
//@route GET /api/goals
//@access privates
export const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "all goals" });
});

// @desc create new goal
//@route POST /api/goals
//@access privates
export const createNewGoal = async (req, res) => {
	if (Object.keys(req.body).length === 0) {
		res.status(400);
		throw new Error("Please make sure you're sending the correct data");
	}
	res.status(200).json({ goals: "All goals" });
};

// @desc Update  goal
//@route PUT /api/goals/id
//@access privates
export const updateGoal = (req, res) => {
	res.status(201).json({ message: "goal updated" });
};
