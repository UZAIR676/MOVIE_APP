import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import  { connectDB } from './confiq/db.js'
import userRouter from "./Routes/UserRoutes.js";
import { errorHandler } from './middlewares/errorMiddleware.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.get("/",(req,res)=>{
    console.log("API is rinning ")
    res.send("API is running ")
})
 app.use("/api/users",userRouter,()=>{
    res.send("API is hunging ")
 });
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on http:localhost:${PORT}`)
})
