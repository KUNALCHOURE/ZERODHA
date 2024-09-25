import React from "react";

export default function Rightsection({imgurl,producname,proddesc,learnmore,googleplay,appstore}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-4 p-5">
                    <h2>{producname}
                    </h2>
                    <p>{proddesc}</p>
                    <a href={learnmore}></a>
                    <div className="mb-4 ">
                     <a href={learnmore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                     </div>
                 
                     <div>
                    <a href={googleplay} style={{marginRight:"50px"}}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                    <a href={appstore}><img src="media/images/appstoreBadge.svg" alt="" /></a> 
                    </div>

                </div>


                <div className="col-8 p-5">
                     <img src={imgurl} alt="" />
                </div>

            </div>
        </div>
    )
}