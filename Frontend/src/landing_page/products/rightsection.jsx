import React from "react";

export default function Rightsection({imgurl,producname,proddesc,link,linkfront}){
    return(
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-4 p-5">
                    <h2 classname="textmuted">{producname}
                    </h2>
                    <p>{proddesc}</p>
                  
                    <div className="mb-4 ">
                     <a href={link} style={{textDecoration:"none"}}>{linkfront} <i class="fa-solid fa-arrow-right"></i></a>
                     </div>
                

                </div>


                <div className="col-7  text-center p-5">
                     <img src={imgurl} alt="" />
                </div>

            </div>
        </div>
    )
}