import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Orders() {
    const[orders,setorders]=useState([]);

    useEffect(()=>{
    axios.get("http://localhost:3030/allorders").then((res)=>{
       console.log(res.data);
        setorders(res.data);
      }
      
    )},[])
  return (
    <div className="orders">
      <div className="no-orders">
      {orders.length === 0 ? (
          <p>You haven't placed any orders today</p>
        ) : (
          <div className='order-table'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}
