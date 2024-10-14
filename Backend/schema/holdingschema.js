const { Schema } = require("mongoose");


const holdinschema=new Schema({
    name: String,
    qty: Number,
    avg:Number,
    price: Number,
    net: String,
    day: String,  
})

module.exports={holdinschema}; 