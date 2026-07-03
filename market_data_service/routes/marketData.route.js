import express from "express";
import loadMarketData from "../controllers/loadMarketData.js";



const router = express.Router();
router.post('/get',loadMarketData);

export default router;
