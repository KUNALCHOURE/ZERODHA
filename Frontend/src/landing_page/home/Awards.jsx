import React from 'react'

export default function Award(){
    return (
       <div className="container mt-5">

        <div className="row mb-5">

            <div className="col-6 p-5">
               <img src="media/images/largestBroker.svg" alt="" />
            </div>

            
            <div className="col-6 p-5 mt-5">
                <h1>Larget stock broker in India</h1>
                <p className='mb-5'>2+ million Zerodha client contribute to over 15% of all 
                    retai order volumes in India daily by trading and investing in :
                    </p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                               <li>
                                <p>Futures and Options</p></li> 
                               <li><p>Commodity derivatives</p></li>
                               <li><p>Currency derivatives</p></li>

                          </ul>    
                        </div>
                         
                        <div className="col-6">
                            <ul>
                               <li><p>Stokes & IPOSs</p></li> 
                               <li><p>Direct mutual funds</p></li>
                               <li><p>Bonds and  Govt. Securities</p></li>

                          </ul>    
                        </div>
                  
                    </div>
                <img src="media/images/pressLogos.png" style={{width:"90%"}}  alt="" />
            </div>

        </div>
       </div>
    )
}