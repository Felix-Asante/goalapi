import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: string,
			required: [true, "Please provide a username"],
		},
		email: {
			type: string,
			required: [true, "Please provide your email"],
			unique: true,
		},
		password: {
			type: string,
			required: [true, "Please give a password"],
		},
	},
	{ timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
