
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";




const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;



app.use(express.json());  // to parse the incomming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", messageRoutes);

// app.get("/",(req,res)=>{
//     // root route http://localhost:5000/
//     res.send("Hello World");
// })



app.listen(PORT, ()=>{

    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})