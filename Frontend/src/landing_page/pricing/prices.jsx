import React from "react";

export default function prices(){
    return(
        <div className="container mt-5 p-5">
            <div className="row text-center p-5">
                <div className="col-4 text-center">
                     <img src="media/images/pricingEquity.svg" alt="" width={"70%"} />
                     <h2 className="m-3 text-muted"> Free equity delivery</h2>
                     <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                <img src="media/images/other-trades.svg" alt="" width={"70%"}/>
                     <h2 className="m-3 text-muted">Intraday and F&O trades</h2>
                     <p className="text-muted">
                     Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                <img src="media/images/pricingMF.svg" alt="" width={"70%"}/>
                     <h2 className="m-3 text-muted">Free direct MF</h2>
                     <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>
            </div>
        </div>
    )
}