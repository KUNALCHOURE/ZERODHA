const { Schema, model } = require("mongoose");

const Orderschema=new Schema({
    name:String,
    qty:Number,
    price:Number,
    model:String,
});

module.exports={Orderschema};