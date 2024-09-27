import React from "react";

export default function Charges(){
    return(
        <div className="container">
            <div className="row">
            <h2>Charges explained</h2>
             <div className="col-6">
                  <h6 className="m-3 text-muted">Securities/Commodities transaction tax</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                  <p className="m-3 " style={{fontSize:"smaller"}}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
             

                  <h6 className="m-3 text-muted">Transaction/Turnover Charges</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                  <p className="m-3 " style={{fontSize:"smaller"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                  <p className="m-3" style={{fontSize:"smaller"}}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                  <p className="m-3" style={{fontSize:"smaller"}}>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                  <p className="m-3" style={{fontSize:"smaller"}}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>


                  
                <h6 className="m-3 text-muted">Call & trade</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders</p>

                  
                  <h6 className="m-3 text-muted">Stamp charges</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                  <h6 className="m-3 text-muted">NRI brokerage charges</h6>
                     <ul>
                        <li className="" style={{fontSize:"smaller"}}>₹100 per order for futures and options.</li>
                        
                        <li className="" style={{fontSize:"smaller"}}>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        
                        <li className="" style={{fontSize:"smaller"}}>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        
                        <li className="" style={{fontSize:"smaller"}}>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                     </ul> 

                     <h6 className="m-3 text-muted">Account with debit balance</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>


                  <h6 className="m-3 text-muted">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
                  <ul>
                        <li className="" style={{fontSize:"smaller"}}>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        
                        <li className="" style={{fontSize:"smaller"}}>Options - ₹50 per crore + GST traded value (premium value).</li>
                        
                        <li className="" style={{fontSize:"smaller"}}>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        

                     </ul> 

 
             </div>

             <div className="col-6">
             <h6 className="m-3 text-muted">GST</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                  <h6 className="m-3 text-muted">DP (Depository participant) charges</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>₹13 + GST per scrip (irrespective of quantity), on the day, is debited from the trading account when stocks are sold. This is charged by the depository (CDSL) and depository participant (Zerodha).</p>
                  <p className="m-3" style={{fontSize:"smaller"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction.</p>
                  <p className="m-3 " style={{fontSize:"smaller"}}>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25.</p>

                  <h6 className="m-3 text-muted">Pledging charges</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>₹30 + GST per pledge request per ISIN.</p>

                  <h6 className="m-3 text-muted">AMC (Account maintenance charges)</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="" className="text-decoration-none">Click here</a></p>
                  <p className="m-3 " style={{fontSize:"smaller"}}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC,<a href=""> Click here</a></p>
             

                  <h6 className="m-3 text-muted">AMC (Account maintenance charges)</h6>
                  <p className="m-3" style={{fontSize:"smaller"}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="" className="text-decoration-none">Click here</a></p>
                  <p className="m-3 " style={{fontSize:"smaller"}}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC,<a href=""> Click here</a></p>
             


             
             </div>
            </div>
        </div>
    )
}