const { model } = require("mongoose");
const Orderschema=require("../schema/orderschema");


const Ordersmodel=new model("orders",Orderschema);

module.exports={Ordersmodel};