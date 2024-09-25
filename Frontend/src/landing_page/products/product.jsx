import React from "react";
import Hero from "./hero";
import Leftsection from "./leftsection";

export default function Product(){
    return(
        <>
        <Hero/>
         <Leftsection imgurl="media/images/kite.png" producname="Kite" proddesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." trydemo="/dasgboard" learnmore="/learnmore"googleplay="media/images/googleplayBadge.svg"appstore="appstoreBadge.svg"/>
         </>
    )
}