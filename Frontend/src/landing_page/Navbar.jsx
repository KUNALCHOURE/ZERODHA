import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return ( 
      <nav className="navbar navbar-expand-lg " style={{backgroundClip:"#ffff"}}>
      <div className="container p-2">
        <Link className="navbar-brand ml-5" to="/">
          <img src="media/images/logo.svg" alt=""  style={{width:"25%"}}/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/signup'}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/Aboutus"}>
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-link active"
              to={"/product"}
                
              >
                Products
              </Link>
              </li>
                <li>
                 <Link className="nav-link active" to={""}>
                   Pricing
                 </Link>
                </li>
        
           
            <li className="nav-item">
              <Link className="nav-link active " >
                Support 
              </Link>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  
     );
}
