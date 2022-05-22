import asyncHandler from "express-async-handler";

// @desc register user
//@route POST /api/users
//@access public
export const registerUser = asyncHandler(async (req, res) => {
	res.status(201).json({ message: "Register user" });
});

// @desc login user
//@route POST /api/users/login
//@access public
export const loginUser = asyncHandler(async (req, res) => {
	res.status(201).json({ message: "login user" });
});

// @desc get user data
//@route POST /api/users/me
//@access private
export const getMe = asyncHandler(async (req, res) => {
	res.status(201).json({ message: " user data" });
});
