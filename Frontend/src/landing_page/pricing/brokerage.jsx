import React from "react";

export default function Brokerage(){
    return(
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-8">
                    <a href="" className="text-decoration-none m-5 fs-2" style={{fontSize:"larger"}}>Brokerage Calculator</a>

                    <ul className="mt-5">
                        <li>Call & Trade and RMS auto-Squareoff :Additional charges of ₹50+GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail</li>

                        <li>Physical copies of contract notes ,if required ,shall be charges 20 per contract note.Courier charges apply</li>

                        <li>For NRI account(non-PIS),0.5% or ₹100 per executed order for equity(whichever is lower)</li>
                        <li>For NRI account(PIS),0.5% or ₹200 per executed order for equity(whichever is lower)</li>

                        <li>if the account is in debit balance ,any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>

                    </ul>
                </div>

                <div className="col-4">
                <a href="" className="text-decoration-none m-5 fs-2" style={{fontSize:"larger"}}>List of charges</a>
                    
                </div>
            </div>
        </div>
    )
}