
const userschema=require("../schema/userschem");
const {model} =require("mongoose");

const usermodel=new model("user",userschema);

module.exports=usermodel;