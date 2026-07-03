import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ordersRouter from "./routes/order.route.js"


dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT || 8087;
app.use(express.json());
app.use('/orders',ordersRouter)

app.get('/',async (req,res)=>{
    res.json({ message: 'HHLD Stock Broker Orders Manager Service'})
});

app.listen(port ,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})