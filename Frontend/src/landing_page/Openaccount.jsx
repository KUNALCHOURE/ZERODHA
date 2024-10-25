import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Openaccount(){
  const navigate=useNavigate();
  const handleclick=()=>{
      navigate("/signup")
  }
    return (
        <div className='container p-5 '>
        <div className="row text-center">
         
          <h1 className='mt-5 '>Open a Zerodha account</h1>
          <p className='mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.

</p>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-3'  style={{width:"20%",margin:"0 auto" }} onClick={handleclick}>Sign up for free </button>
        </div>
    
    
    
      </div>
    );
}