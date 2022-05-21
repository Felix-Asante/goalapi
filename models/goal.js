import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
	{
		goal: {
			type: String,
			required: [true, "please add a goal"],
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "user",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("goal", goalSchema);
