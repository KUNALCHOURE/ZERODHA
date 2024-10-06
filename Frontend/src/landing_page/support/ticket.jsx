import React from "react";

export default function Ticket() {
  return (
    <div className="support text-white" style={{ backgroundColor: "#387ed1" }}>
      <div className="container p-5">
        <div className="row p-5">
          {/* Main Div for Support Panel and Track Ticket */}
          <div className="row d-flex justify-content-between align-items-center mb-5">
            <div className=" col-2 fs-5">Support Panel</div>
            <div className=" col-4 fs-5 ticket text-end">
              <a href="">Track ticket</a>
            </div>
          </div>

          <div className="col-7">
            <p className="fs-4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </p>

            <input
              type="text"
              className="w-100 h-25"
              placeholder=" Eg: how do I activate F&O, why is my order getting rejected ..."
            />

            <div className="links d-flex flex-wrap mt-3">
              <a href="" className=" mr-3 fs-5">Track account opening</a>
              <a href="" className="+mr-3 fs-5">Track segment activation</a>
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
