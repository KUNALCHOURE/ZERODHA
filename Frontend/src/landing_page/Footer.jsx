import React from 'react'

export default function Footer()

{
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <img src="media/images/logo.svg" alt="" style={{width:"70%"}} />
                    <p><i class="fa-regular fa-copyright"> </i>2010 - 2014, Zerodha</p>
                    <p>Broking Ltd.</p>
                    <p>All rights reserved.</p>

                </div>

                <div className="col-3">
            <h2 className='fs-2 '>Company</h2>
            <a href="" className='footerlink'>About</a>
            <br />

<a href="" className='footerlink mt-5'>Products</a><br />
<a href="" className='footerlink'>Pricing</a><br />
<a href="" className='footerlink'>Referral programme</a><br />
<a href="" className='footerlink'>Careers</a><br />
<a href="" className='footerlink'>Zerodha.tech</a><br />
<a href="" className='footerlink'>Press & media</a><br />
<a href="" className='footerlink'>Zerodha Cares (CSR)</a>


              </div>
          <div className="col-3">
          <h2 className='fs-2'>Support</h2>
<a href="" className='footerlink'>Contact us</a><br />
<a href="" className='footerlink mt-5'>Support portal</a><br />
<a href="" className='footerlink'>Z-Connect blog</a><br />
<a href="" className='footerlink'>List of charges</a><br />
<a href="" className='footerlink'>Downloads & resources</a><br />
<a href="" className='footerlink'>Videos</a><br />
<a href="" className='footerlink'>Market overview</a><br />
<a href="" className='footerlink'>How to file a complaint?</a><br />
<a href="" className='footerlink'>Status of your complaints</a>

           </div>
   <div className="col-3">
   <h2 className='fs-2'>Account</h2>
<a href="" className='footerlink'>Open an account</a><br />
<a href="" className='footerlink mt-5'>Fund transfer</a>


          </div>
            </div>
        </div>
    )
}