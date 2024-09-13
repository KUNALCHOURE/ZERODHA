
import React from 'react'


export default function Stats () {
    return ( 
   <div className="container">
    <div className="row p-3">
      <div className="col-6 mt-5 p-5">
         <h1 className='fs-2'>Trust with confidence</h1>
          <div className="info mt-5">
            <h2 className='fs-4'>Customer-first always</h2>
               <p className='text-muted'>That is why 1.3+ crore customers Trust
                Zerodha with 3.5+lakh crores worth of equity investments
               </p>
          </div>
          <div className="info ">
            <h2 className='fs-4'>No spam or gimmicks</h2>
               <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
               </p>
          </div>
          <div className="info ">
            <h2 className='fs-4'> The Zerodha universe</h2>
               <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
               </p>
          </div>
          <div className="info ">
            <h2 className='fs-4'>Do better with money</h2>
               <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
               </p>
          </div>
      </div>
      <div className="col-6 mt-5 p-5">
 <img src="media/images/ecosystem.png" alt="" srcset="" style={{width:"110%"}}/>
 <a href="" className='m-5' style={{textDecoration:"none"}}>Explore Our Products<i class="fa-solid fa-arrow-right-long"></i></a>
 <a href="" style={{textDecoration:"none"}}>Try Kite Demo <i class="fa-solid fa-arrow-right-long"></i> </a>
      
       
      </div>
    </div>
   </div>
     );
}
