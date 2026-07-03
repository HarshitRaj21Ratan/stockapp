import expresss from "express"
import getFunds, {} from "../controllers/user.controller.js"

const router = expresss.Router();

router.get('/getFunds',getFunds);

export default router; 