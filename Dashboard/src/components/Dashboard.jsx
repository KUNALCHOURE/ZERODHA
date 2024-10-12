import React from "react";
import { Route, Routes } from "react-router-dom";

// Import the context provider
import { GeneralContextProvider } from "./GeneralContext";

import Apps from "./appss";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

export default function Dashboard(){
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/Position" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};


