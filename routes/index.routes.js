import {
	createNewGoal,
	getGoals,
	updateGoal,
} from "../controllers/goals.controller.js";
import { router } from "../utils/expressInstance.utils.js";

router.route("/").get(getGoals).post(createNewGoal);
router.put("/:id", updateGoal);
export default router;
