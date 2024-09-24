import React from "react";

export default function Team(){
    return (
        <>
        <div className="container">
        <div className="row p-5 ">
        <h1 className="text-center  ">People</h1>
      

            <div className="col-5 p-3 text-center" >
                 <img src="media/images/nithinKamath.jpg" alt=""  style={{borderRadius:"100%",width:"60%" }} className=""/>
                 <h6 className="mt-5">Nithin Kamath</h6>
                 <h6>Founder, CEO</h6>
            </div>
            <div className="col-7 p-5">
                <p>
Nithin Kamath
Founder, CEO

Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
<p>Playing basketball is his zen.</p>
<p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>

            </div>
        </div>

        
        </div>
        </>
    )
}