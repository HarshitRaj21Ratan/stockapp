import expresss from "express"
import  { cancelOrderToUpstox, getOrdersFromUpstox, placeOrderToUpstox } from "../controllers/order.controller.js"

const router = expresss.Router();

router.get('/getOrders',getOrdersFromUpstox);
router.post('/addOrders',placeOrderToUpstox);
router.delete('/cancelOrders',cancelOrderToUpstox);

export default router; 