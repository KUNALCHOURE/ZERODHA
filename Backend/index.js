const express= require("express");
const mongoose= require("mongoose");
const app=express();
const port=process.env.PORT||3030;
require('dotenv').config();

// TO GET MONGO URL FROM .ENV

const url=process.env.MONGO_URL;




app.listen(port,()=>{
    console.log("listning");  
    mongoose.connect(url);
    console.log("db connected");
})

