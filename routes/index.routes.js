import {
	createNewGoal,
	deleteGoal,
	getGoals,
	updateGoal,
} from "../controllers/goals.controller.js";
import { router } from "../utils/expressInstance.utils.js";

router.route("/").get(getGoals).post(createNewGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);
export default router;
