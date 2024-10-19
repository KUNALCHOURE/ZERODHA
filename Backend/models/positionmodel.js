const {model}=require("mongoose");
const positionschema =require("../schema/positionschema")


const positionsmodel=new model("position",positionschema);

module.exports=positionsmodel;