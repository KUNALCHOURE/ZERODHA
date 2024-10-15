const {model, Model}=require("mongoose");

const holdingschema=require("../schema/holdingschema")
//holdings will be  the collection name 
const holdingmodel =new model("holding",holdingschema);

module.exports=holdingmodel;


