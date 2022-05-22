import express from "express";
const router = express.Router();

import {
	getMe,
	loginUser,
	registerUser,
} from "../controllers/users.controller.js";

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

export default router;
