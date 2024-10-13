import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { KeyboardArrowDown, KeyboardArrowUp, Spa } from "@mui/icons-material";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <Watchlistitem stock={stock} key={index} />
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const Watchlistitem = ({ stock }) => {
  const [showwatchinaction, setshowwatchinaction] = useState(false);

  const handleMouseenter = () => {
    setshowwatchinaction(true);
  };
  const handleMouseexit = () => {
    setshowwatchinaction(false);
  };

  return (
    <li onMouseEnter={handleMouseenter} onMouseLeave={handleMouseexit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="intemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showwatchinaction && <Watchlistactions uid={stock.name}/>}
    </li>
  );
};


const Watchlistactions=({uid})=>{
  return (
    <span>
    <span>
    
      <Tooltip  title="BUY (B)"
      placement="top"
      arrow 
      TransitionComponent={Grow}
      className="buy">
          <button className="buy">Buy</button>
      </Tooltip>
    </span>

    <span>
     
    <Tooltip  title="Sell (s_"
    placement="top"
    arrow 
    TransitionComponent={Grow}
    className="sell"> 
    <button className="sell">Sell</button>

    </Tooltip>
  </span>

  <span>
    <Tooltip  title="Analytics (A)"
    placement="top"
    arrow 
    TransitionComponent={Grow}
    className="chart">
    <button className="chart">Analytics</button>

    </Tooltip>
  </span>


  <span>
    <Tooltip  title="MORE (B)"
    placement="top"
    arrow 
    TransitionComponent={Grow}
    className="">
    <button className="more">More</button>

    </Tooltip>
  </span>
  

  </span>

  )

}