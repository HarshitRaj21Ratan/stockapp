import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRouter from "./routes/users.route.js"


dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT;
app.use(express.json());
app.use('/users',usersRouter)

app.get('/',async (req,res)=>{
    res.json({ message: 'HHLD Stock Broker User Manager Service'})
});

app.listen(port ,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})