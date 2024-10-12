import React from "react";
import { positions } from "../data/data";
const Positions = () => {
  return (
    <>
      <h3 className="title">Positions {positions.length}</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          <tbody>
            {positions.map((stock,index)=>{
        const currval = stock.price * stock.qty;
        const isProfit = currval - stock.avg * stock.qty >= 0.0;
        const profitclass = isProfit ? "profit" : "loss";
        const dayclass = stock.isLoss ? "loss" : "profit";
              return(
               <tr>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitclass}>
                    {(currval - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayclass}>{stock.day}</td>
               </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;