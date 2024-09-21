import React from 'react'

export default function Footer()

{
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src="media/images/logo.svg" alt="" style={{width:"100%"}} />
                    <p><i class="fa-regular fa-copyright"> </i>2010 - 2014, Zerodha</p>
                    <p>Broking Ltd.</p>
                    <p>All rights reserved.</p>

                </div>

                <div className="col-4">
            <h2 className='fs-2 '>Company</h2>
            <a href="" className='footerlink'>About</a>
            <br />

<a href="" className='footerlink'>Products</a><br />
<a href="" className='footerlink'>Pricing</a><br />
<a href="" className='footerlink'>Referral programme</a><br />
<a href="" className='footerlink'>Careers</a><br />
<a href="" className='footerlink'>Zerodha.tech</a><br />
<a href="" className='footerlink'>Press & media</a><br />
<a href="" className='footerlink'>Zerodha Cares (CSR)</a>


              </div>
          <div className="col-4">

           </div>
   <div className="col-4">

          </div>
            </div>
        </div>
    )
}