import React from "react";
import { useNavigate } from "react-router-dom";
export default function Universe() {
    const navigate=useNavigate();
  const handleclick=()=>{
      navigate("/signup")
  }
    return (
        <div className="container p-5">
            <div className="row p-5 universe">
                <p className="mb-5 text-center">
                    Want to know more about our technology stack? Check out the <a href="/Zerodha" style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.
                </p>

                <h1 className="text-center">The Zerodha Universe</h1>
                <p className="text-center">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-5">
                    <a href=""><img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{ width: "50%" }} /></a>
                    <p className="text-decoration-none text-black">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                <div className="col-4 p-5">
                    <a href=""><img src="media/images/sensibullLogo.svg" alt="Streak" style={{ width: "50%" }} /></a>
                    <p className="text-decoration-none text-black">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                <div className="col-4 p-5">
                    <a href=""><img src="media/images/smallcaseLogo.png" alt="Sensibull" style={{ width: "50%" }} /></a>
                    <p className="text-decoration-none text-black">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>

                <div className="col-4 p-5">
                    <a href=""><img src="media/images/streakLogo.png" alt="Smallcase" style={{ width: "50%" }} /></a>
                    <p className="text-decoration-none text-black">Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.</p>
                </div>

                <div className="col-4 p-5">
                    <a href=""><img src="media/images/tijori.svg" alt="Tijori" style={{ width: "50%" }} /></a>
                    <p className="text-decoration-none text-black">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                <div className="col-4 p-5">
                    <a href=""><img src="media/images/dittoLogo.png" alt="Ditto" style={{ width: "50%" }} /></a>
                    <p className="text-decoration-none text-black">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>
            
            <div className="text-center p-5">
                <button className="btn btn-primary fs-5" style={{width:"200px",height:"50px",backgroundColor:"#387ed1"}} onClick={handleclick}>Sign up for free</button>
            </div>
        </div>
    );
}
