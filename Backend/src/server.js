import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import noteRoutes from './routes/noteRoutes.js';
import cors from "cors";
import path from 'path';
const __dirname = path.resolve();
dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;

if(process.env.NODE_ENV !== "production"){
app.use(cors({
    origin: "http://localhost:5173"
}))
}

app.use(express.json());

// app.use((req,res,next)=>{
//    console.log(`${req.method} ${req.url}`);
//     next();
// })

app.use("/api/notes",noteRoutes);

if( process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"../frontend/dist")));

app.get("/*splat",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
});
}

connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
});