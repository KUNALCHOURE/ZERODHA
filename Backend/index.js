const express= require("express");
const mongoose= require("mongoose");
const holdingmodel=require("./models/holdingmodel")
const Ordersmodel =require("./models/ordersmodel")
//const { holdingmodel } = require("./models/holdingmodel");
const app=express();
const port=process.env.PORT||3030;
require('dotenv').config();
const positionmodel=require("./models/positionmodel");
// TO GET MONGO URL FROM .ENV
const url=process.env.MONGO_URL;
const bodyparser=require("body-parser");
const cors=require("cors");


app.use(cors());
app.use(bodyparser.json());


/*
app.get("/addholding",(req,res)=>{
    let tempholding=[
    
            {
              name: "BHARTIARTL",
              qty: 2,
              avg: 538.05,
              price: 541.15,
              net: "+0.58%",
              day: "+2.99%",
            },
            {
              name: "HDFCBANK",
              qty: 2,
              avg: 1383.4,
              price: 1522.35,
              net: "+10.04%",
              day: "+0.11%",
            },
            {
              name: "HINDUNILVR",
              qty: 1,
              avg: 2335.85,
              price: 2417.4,
              net: "+3.49%",
              day: "+0.21%",
            },
            {
              name: "INFY",
              qty: 1,
              avg: 1350.5,
              price: 1555.45,
              net: "+15.18%",
              day: "-1.60%",
              
            },
            {
              name: "ITC",
              qty: 5,
              avg: 202.0,
              price: 207.9,
              net: "+2.92%",
              day: "+0.80%",
            },
            {
              name: "KPITTECH",
              qty: 5,
              avg: 250.3,
              price: 266.45,
              net: "+6.45%",
              day: "+3.54%",
            },
            {
              name: "M&M",
              qty: 2,
              avg: 809.9,
              price: 779.8,
              net: "-3.72%",
              day: "-0.01%",
             
            },
            {
              name: "RELIANCE",
              qty: 1,
              avg: 2193.7,
              price: 2112.4,
              net: "-3.71%",
              day: "+1.44%",
            },
            {
              name: "SBIN",
              qty: 4,
              avg: 324.35,
              price: 430.2,
              net: "+32.63%",
              day: "-0.34%",
              
            },
            {
              name: "SGBMAY29",
              qty: 2,
              avg: 4727.0,
              price: 4719.0,
              net: "-0.17%",
              day: "+0.15%",
            },
            {
              name: "TATAPOWER",
              qty: 5,
              avg: 104.2,
              price: 124.15,
              net: "+19.15%",
              day: "-0.24%",
            
            },
            {
              name: "TCS",
              qty: 1,
              avg: 3041.7,
              price: 3194.8,
              net: "+5.03%",
              day: "-0.25%",
              
            },
            {
              name: "WIPRO",
              qty: 4,
              avg: 489.3,
              price: 577.75,
              net: "+18.08%",
              day: "+0.32%",
            },
        
           
          ];
    
tempholding.forEach((item)=>{
    let newholding=new holdingmodel({
        name: item.name,
        qty: item.qty,
        avg:item.avg,
        price: item.price,
        net: item.net,
        day: item.day, 
    })

   newholding.save();
})s

res.send("data saved");

});*/

/*
app.get("/addPositions",async(req,res)=>{
  let temppositon= [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  temppositon.forEach((item)=>{
    let newpositon=new positionmodel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day:item.day,
      isLoss:item.isLoss,
      
    })

    newpositon.save();
  })

  res.send("positons saved ");
  
})

*/
app.get("/",(req,res)=>{
  res.send("hello");
})

app.get("/allholdings",async(req,res)=>{
  let allholdings=await holdingmodel.find();
  res.json(allholdings);
 
})

app.get("/allpositions",async(req,res)=>{
  let allpositions=await positionmodel.find();
  res.json(allpositions);
 
})

app.post("/neworder",async(req,res)=>{
    let {name,qty,price,mode}= req.body;
    console.log(name)
    let neworder=new Ordersmodel({
      name:name,
      qty:qty,
      price:price,
      mode:mode,
    })

    await neworder.save();
    res.send("Order saved");
})

app.listen(port,()=>{
    console.log("listning");  
    mongoose.connect(url);
    console.log("db connected");
})

