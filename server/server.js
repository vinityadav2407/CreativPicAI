import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRouters.js';
import imageRouter from './routes/imageRouters.js';

const app=express();
const PORT=process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
await connectDB();

app.use('/api/user',userRouter);
app.use('/api/image',imageRouter);
app.get('/',(req,res)=>{
    res.send("server is working");
})

app.listen(PORT ,()=>{
    console.log(`server is working on the port ${PORT}`);
})