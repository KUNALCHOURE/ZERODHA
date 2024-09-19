import React from 'react'


export default function Pricing () {
    return ( 
     <div className="container mt-5">
      <div className="row">
        <div className="col-4 mr-5">
          <h1 className='fs-2'> Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price 
          transparency in India.Flat fees and no hidden charges.
          </p>
          <a href="" style={{textDecoration:"none"}}>See Pricing<i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
<div className="col-2"></div>
        <div className="col-6 ">
           <div className="row text-center">
              <div className="col border  p-5">
                 <h1 className='mb-4'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                 <p>Free equity delivery and direct mutual funds</p>
              </div>
              <div className="col border  p-5">
                <h1 className='mb-4'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                 <p>Free equity delivery and direct mutual funds</p>
              </div>
              </div>
          
           </div>

        </div>
      </div>

     );
}
