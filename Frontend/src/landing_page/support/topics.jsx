import React from "react";

export default function Topics(){
    return (
        <div className="container tickets mt-5 ">
            <div className="row ">
                <p className="text-muted fs-3 ">To create a ticket, select a relevant topic</p>
                <div className="col-4 account p-5">
                     <p className="fs-2">Account Opening</p>
                  
                        <a href="" >Getting started</a><br />
                        <a href="">Online</a><br />
                        <a href="">Offline</a><br />
                        <a href="">Charges</a><br />
                        <a href="">Company,Partneship and HUF</a><br />
                        <a href="">Non Resident Indian (NRI)</a>

                </div>
                <div className="col-4 p-5">
                <p className="fs-2"> Your Zerodha Account</p>
                  
                  <a href="" >Login credentials</a><br />
                  <a href="">Your Profile</a><br />
                  <a href="">Account modification and segment addition</a><br />
                  <a href="">CMR & DP ID</a><br />
                  <a href="">Nomination</a><br />
                  <a href="">Transfer and conversion of shares</a>

                </div>
                    <div className="col-4 p-5">
                    <p className="fs-2"> Trading and Markets</p>
                  
                  <a href="" >Trading FAQs</a><br />
                  <a href="">Kite</a><br />
                  <a href="">Margins</a><br />
                  <a href="">Product and order types</a><br />
                  <a href="">Corporate actions</a><br />
                  <a href="">Kite features</a>

                    </div>
            

           
            <div className="col-4 p-5">
                    <p className="fs-2">Funds</p>
                  
                  <a href="" >Fund withdrawal</a><br />
                  <a href="">Adding funds</a><br />
                  <a href="">Adding bank accounts</a><br />
                  <a href="">eMandates</a>
                 
                    </div>

                    <div className="col-4 p-5">
    
                    <p className="fs-2"> Console</p>
                  <a href="">IPO</a><br />
                  <a href="">Portfolio</a><br />
                  <a href="">Funds statement</a><br />
                  <a href="">Reports</a><br />
                  <a href="">Referral program</a>

                    </div>

                    <div className="col-4 p-5">
                    <p className="fs-2"> Coin</p>
                  
                  <a href="" >Understanding mutual funds and Coin</a><br />
                  <a href="">Coin app</a><br />
                  <a href="">Coin web</a><br />
                  <a href="">Transactions and reports</a><br />
                  <a href="">National Pension Scheme (NPS)</a>


                    </div>
            </div>
            </div>
    )
}