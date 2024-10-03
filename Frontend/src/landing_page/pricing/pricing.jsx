import React from "react";
import Hero from "./hero";
import Prices from "./prices";
import Charges from "./charges";
import Chargesacc from "./chargesforacc";
import Brokerage from "./brokerage";
import Openaccount from "../Openaccount";

export default function Pricing(){
    return (
        <>
        <Hero/>
        <Prices/>
        <Charges/>
        <Chargesacc/>
        <Brokerage/>
        <Openaccount/>
        </>
    )
}