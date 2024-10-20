import React, { useState } from "react";

export default function Login()
{
    const[useremail,setuseremail]=useState("");
    const[userpass,setpass]=useState("");

    return(

        <>
          <div className="container">
            <div className="row m-5 p-5">

            <div className="col-8 text-center">
                    <img src="media/images/landing.png" alt="" style={{width:"70%"}} />
                </div>
                <div className="col-4">
                    <h2 className="text-muted ">Login Now</h2>
                     <form action="">
                     <div >
                      <input type="email" className="border rounded-2 mt-3" placeholder="Enter Email"  style={{width:'300px' ,height:'40px'}}/>

                    </div>
                    <div>
                    <input type="text" name="" id=""  className="border rounded-2 mt-3 mb-3"  placeholder="Enter password"  style={{width:'300px',height:'40px'}}/>
                      </div>
                        <button className="btn btn-primary mt-3">Login</button>
                     </form>
                </div>
            </div>
          </div>
        </>
    )

}