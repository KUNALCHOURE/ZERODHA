import React from "react";

export default function Ticket() {
  return (
    <div className="support text-white" style={{ backgroundColor: "#387ed1" }}>
      <div className="container p-5">
        <div className="row p-5">
        
          <div className="row d-flex justify-content-between  mb-5">
            <div className=" col-4 fs-5"><h3>Support Portal</h3></div>
            <div className=" col-4 fs-5 ticket text-end">
              <a href="">Track ticket</a>
            </div>
          </div>

          <div className="col-7">
            <p className="fs-4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </p>
 <div className="w-100 bg-white  d-flex">
            <input
              type="text"
              className="w-100 border-0 p-2 form-control" 
             
              placeholder=" Eg: how do I activate F&O, why is my order getting rejected ..."
            />
  <span className="input-group-text bg-white border-0">
                <button className="border-0 bg-white"><i className="fa-solid fa-magnifying-glass "></i></button>
              </span>
            </div>

            <div className="links d-flex flex-wrap mt-3">
              <a href="" className=" fs-5">Track account opening</a>
              <a href="" className=" fs-5">Track segment activation</a>
              <a href="" className=" fs-5">Intraday margins</a>
              <a href="" className="fs-5">Kite user manual</a>
            </div>
          </div>

          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
}
