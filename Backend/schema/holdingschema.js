const { Schema } = require("mongoose");


const holdingschema=new Schema({
    name: String,
    qty: Number,
    avg:Number,
    price: Number,
    net: String,
    day: String,  
})

module.exports={holdingschema}; 