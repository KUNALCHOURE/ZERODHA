import React from "react";

export default function Leftsection({imgurl,producname,proddesc,trydemo,learnmore,googleplay,appstore}){
    return (
          <div className="container ">
            <div className="row">
                <div className="col-6 p-5">
                <img src={imgurl} alt="" />
                </div>

                <div className="col-6 p-5">
                    <h1>{producname}</h1>
                    <p>{proddesc}</p>
                    <div className="mb-4 ">
                    <a href={trydemo} style={{marginRight:"50px", textDecoration:"none"}} >Try demo <i class="fa-solid fa-arrow-right "></i></a>
                     <a href={learnmore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                     </div>

                     <div>
                    <a href={googleplay} style={{marginRight:"50px",textDecoration:"none"}}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                    <a href={appstore} img src="media/images/appstoreBadge.svg" alt=""></a> 
                    </div>
                    
                </div>
            </div>

            
          </div>
    )
}