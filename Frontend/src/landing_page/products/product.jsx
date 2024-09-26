import React from "react";
import Hero from "./hero";
import Leftsection from "./leftsection";
import Rightsection from "./rightsection";

export default function Product(){
    return(
        <>
        <Hero/>
         <Leftsection imgurl="media/images/kite.png" producname="Kite" proddesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." trydemo="/dasgboard" learnmore="/learnmore"googleplay="media/images/googleplayBadge.svg"appstore="appstoreBadge.svg"/>
         <Rightsection imgurl="media/images/console.png" producname="Console" proddesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link="/link" linkfront="Learn More" googleplay="media/images/googleplayBadge.svg"appstore="appstoreBadge.svg" />

         <Leftsection imgurl="media/images/coin.png" producname="Coin" proddesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."  trydemo="/dasgboard" learnmore="/learnmore"googleplay="media/images/googleplayBadge.svg"appstore="appstoreBadge.svg"/>
         <Rightsection imgurl="media/images/kiteconnect.png" producname="Kite Connect Api" proddesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link="/kiteconnect" linkfront="Kite Connect" />
         <Leftsection imgurl="media/images/varsity.png" producname="Varsity mobile" proddesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  trydemo="/dasgboard" learnmore="/learnmore"googleplay="media/images/googleplayBadge.svg"appstore="appstoreBadge.svg"/>

         
         </>
    )
}