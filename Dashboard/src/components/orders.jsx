
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Orders() {
    const[orders,setorders]=useState({name:"",qty:0,price:0,mode:""});


  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

