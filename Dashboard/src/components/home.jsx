import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import TopBar from "./topBar";

const Home = () => {
  return (
    <>
       <BrowserRouter>
             <TopBar />
      <Dashboard />
      </BrowserRouter>

    </>
  );
};

export default Home;