const bcrypt = require('bcrypt');
const {Schema}=require("mongoose");

const userschema=new Schema({
    email:{
        type:String,
        required:[true,"Your email address is required"],
        unique: true,
    },
    username:{
        type:String,
        required:[true,"Your username is required"],
    },
    password:{
        type: String,
        required:[true,"Your password is required"],

    },

    createdAt:{
        type: Date,
        default:new Date(),
    },
});


// this is used to encrypt the password before saving it to the databases
userschema.pre("save",async function (){
    this.password=await bcrypt.hash(this.password,12);
})

module.exports=userschema;