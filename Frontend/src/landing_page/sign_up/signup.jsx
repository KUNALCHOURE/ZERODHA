import React from "react";

export default function Signup(){
     return (
        <>
        <div className="container mt-5 p-5">
            <div className="row ">
                <div className="col-8 text-center">
                    <img src="media/images/landing.png" alt="" style={{width:"70%"}} />
                </div>
                <div className="col-4 mt-1">
                     <h3 className="text-muted mb-3">Signup now</h3>
                     <p className="text-muted mb-4">Or track your existing application</p>
                     <div >
                      <input type="text" />
                    </div>
                     

                     <p className="text-muted" style={{fontSize:"smaller"}}>You will recieve an OTP on your number </p>

                     <button className="btn btn-primary mb-2">Continue</button>
                     <br />

                     <a href="" className="text-decoration-none">Want to open an NRI account?</a>
                </div>

                <p className="text-muted text-center m-3" style={{fontSize:"smaller"}}>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit <a href="" className="text-decoration-none"> this article </a> to know more.
                </p>

                <p className="text-muted text-center" style={{fontSize:"smaller"}}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href="" className="text-decoration-none">offline forms </a>. For help, <a href="" className="text-decoration-none">click here.</a></p>
            </div>
        </div>
        </>
     )
}