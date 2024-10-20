import React, { useEffect, useState } from "react";

import axios from "axios";
import VerticalBarChart from "./verticalbargraph";

export default function Holdings() {
  const[holdings,setholdings]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3030/allholdings").then((res)=>{
      setholdings(res.data);
    });
   

  },[])
  const labels=holdings.map((subarray)=>{
     return subarray["name"]
  })
  ;

  const data = {
   labels,
  datasets: [
      {
        label: 'Stock Price',
        data: holdings.map((stock)=>stock.price),
        backgroundColor: 'rgb(247, 69, 69)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          {/* Thead for table headers */}
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          {/* Tbody for table rows */}
          <tbody>
            {holdings.map((stock, index) => {
              const currval = stock.price * stock.qty;
              const isProfit = currval - stock.avg * stock.qty >= 0.0;
              const profitclass = isProfit ? "profit" : "loss";
              const dayclass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index} >
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currval.toFixed(2)}</td>
                  <td className={profitclass}>
                    {(currval - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitclass}>{stock.net}</td>
                  <td className={dayclass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalBarChart data={data}/>
    </>
  );
}
