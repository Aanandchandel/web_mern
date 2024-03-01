const cors =require("cors")
const jwt=require("jsonwebtoken");
require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("./models/user.js")
const Url=process.env.URL;
// const urlocal=process.env.urlocal
// const urlocal="mongodb://localhost:27017/admin"
const PORT=process.env.PORT;

app.use(express.json());
app.use(cors())

app.post("/reg", async(req,resp)=>{
    const data1 =req.body;
    const data= new User(data1);
    //  await data.save();
    resp.status(500).json({message:await User.find()})
})


mongoose.connect(Url).then(()=>{
    console.log("connected to db");
  
})

app.listen(PORT,()=>{
 
    console.log("port running on 3001")
});   
 

