import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouts from "./routes/auth.routs.js"
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT =process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use("/api/auth",authRouts);


app.get("/",(req,res)=>{
    res.send("server is redy");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})