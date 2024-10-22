const express= require("express");
const mongoose= require("mongoose");
const holdingmodel=require("./models/holdingmodel")
const Ordersmodel =require("./models/ordersmodel")
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

//const { holdingmodel } = require("./models/holdingmodel");
const app=express();
const port=process.env.PORT||3030;
require('dotenv').config();
const positionmodel=require("./models/positionmodel");
// TO GET MONGO URL FROM .ENV
const url=process.env.MONGO_URL;
const bodyparser=require("body-parser");
const cors=require("cors");
const user=require("./models/usermodel")
const { createSecretToken } =require("./utils/secrettoken.js")


app.use(bodyparser.json());
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // For handling cookies


// Allowed origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin, like mobile apps or curl requests
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not allow access from the specified origin.";
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  },
  credentials: true
}));

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


app.get("/allorders",async(req,res)=>{
  let allorders=await Ordersmodel.find();
  res.json(allorders);
 
})

app.post("/neworder", async (req, res) => {
  try {
    let { name, qty, price, mode } = req.body;
    console.log(name);

    // Create and save a new order
    let neworder = new Ordersmodel({
      name: name,
      qty: qty,
      price: price,
      mode: mode,
    });

    await neworder.save();

    // Find the document in holdings by name using holdingmodel
    let hold = await holdingmodel.findOne({ name: name });

    if (hold) {
      // Update the qty and avg if the holding exists
      hold.qty += qty;  // Increment the quantity by the new qty
      hold.avg = hold.price / hold.qty;  // Recalculate average price

      // Save the updated hold back to the database
      const result = await holdingmodel.updateOne(
        { name: name }, // Filter by name
        {
          $set: {
            qty: hold.qty,
            avg: hold.avg,
          }
        }
      );

      console.log("Holdings updated:", result);
    } else {
      // If no holding found, handle it (optional)
      console.log('No holding found for this name.');
    }

    // Send success response
    res.send("Order saved and holdings updated");

  } catch (err) {
    console.error('Error processing new order:', err);
    res.status(500).send("Error saving order");
  }
});

app.post("/signupuser",async(req,res)=>{
  try{
    const{email,password,username}=req.body;

    const extiguishuser=await user.findOne({email});

    if(extiguishuser){
      return res.status(400).json({message:"User already exist"});

    }
    const newuser=new user({
     username,
     email,
     password,
    });

    await newuser.save();
   

    const token =createSecretToken(newuser._id);

    // Set the token in a cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
    });

    // Send response
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: newuser._id,
        username: newuser.username,
        email: newuser.email,
      },
    });
 
  }
  catch(e){
    console.error(e);
    res.status(500).json({message:"Signup failed",e});

  }

  console.log("User signed up ");
   

});
app.post("/loginuser", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' });
    }

    const usern = await user.findOne({ email });
    if (!usern) {
      return res.json({ message: 'Incorrect password or email' });
    }

    const auth = await bcrypt.compare(password, usern.password);
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' });
    }

    const username = usern.username;
    console.log("index" + username);

    const token = createSecretToken(usern._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // Send the response with username
    res.status(201).json({ message: "User logged in successfully", success: true, username: username });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Login failed", error: e.message });
  }
});


app.listen(port,()=>{
    console.log("listning");  
    mongoose.connect(url);
    console.log("db connected");
})

