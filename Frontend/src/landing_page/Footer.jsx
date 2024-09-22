import { light } from '@mui/material/styles/createPalette'
import React from 'react'

export default function Footer()

{
    return (
        <footer style={{backgroundColor:"#fbfbfb"}}>
        <div className="container border-top mt-5 ">
            <div className="row mt-5">
                <div className="col-3">
                    <img src="media/images/logo.svg" alt="" style={{width:"55%"}} />
                    <p><i class="fa-regular fa-copyright"> </i>2010 - 2014, Zerodha</p>
                    <p>Broking Ltd.</p>
                    <p>All rights reserved.</p>

                </div>

                <div className="col-3 columns ">
            <p className='fs-5 footerheading'>Company</p>
            <a href="" className='footerlink'>About</a>
<a href="" className='footerlink '>Products</a>
<a href="" className='footerlink'>Pricing</a>
<a href="" className='footerlink'>Referral programme</a>
<a href="" className='footerlink'>Careers</a>
<a href="" className='footerlink'>Zerodha.tech</a>
<a href="" className='footerlink'>Press & media</a>
<a href="" className='footerlink'>Zerodha Cares (CSR)</a>


              </div>
          <div className="col-3 footerheading columns ">
          <p className='footerheading' >Support</p>
<a href="" className='footerlink'>Contact us</a>
<a href="" className='footerlink '>Support portal</a>
<a href="" className='footerlink'>Z-Connect blog</a>
<a href="" className='footerlink'>List of charges</a>
<a href="" className='footerlink'>Downloads & resources</a>
<a href="" className='footerlink'>Videos</a>
<a href="" className='footerlink'>Market overview</a>
<a href="" className='footerlink'>How to file a complaint?</a>
<a href="" className='footerlink'>Status of your complaints</a>

           </div>
   <div className="col-3 columns">
   <p className='fs-5 footerheading'>Account</p>
<a href="" className='footerlink'>Open an account</a>
<a href="" className='footerlink '>Fund transfer</a>


          </div>
            </div>

<div className='mt-5 text-muted' style={{fontSize:"14px"}}>
           <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
             – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
             India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p> 

             <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

             <p><a href="">Smart Online Dispute Resolution </a>|<a href=""> Grievances Redressal Mechanism</a></p>

          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email 
                IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors.
                 KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone
                 to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

<div className="footer-graveyard-links  mb-5 text-center text-muted d-flex justify-content-between" >
                 <a href="#" className="footerglink">NSE</a> &nbsp;&nbsp;
  <a href="#" className="footerglink " >BSE</a>&nbsp;&nbsp;
  <a href="#" className="footerglink">MCX</a>&nbsp;&nbsp;
  <a href="#" className="footerglink">Terms & conditions</a>&nbsp;&nbsp;
  <a href="#" className="footerglink">Policies & procedures</a>&nbsp;&nbsp;
  <a href="#" className="footerglink">Privacy policy</a>&nbsp;&nbsp;
  <a href="#" className="footerglink">Disclosure</a>&nbsp;&nbsp;
  <a href="#" className="footerglink">For investor's attention</a>&nbsp;&nbsp;
  <a href="#" className="footerglink">Investor charter</a>&nbsp;&nbsp;
  </div>
  </div>

        </div>
        </footer>
    )
}