const { Schema, model } = require("mongoose");

const Orderschema=new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
});

module.exports=Orderschema;