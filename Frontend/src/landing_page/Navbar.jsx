import React from 'react'


export default function Navbar() {
    return ( 
      <nav className="navbar navbar-expand-lg " style={{backgroundClip:"#ffff"}}>
      <div className="container p-2">
        <a className="navbar-brand ml-5" href="#">
          <img src="media/images/logo.svg" alt=""  style={{width:"25%"}}/>
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link active"
                href="#"
                
              >
                Products
              </a>
              </li>
                <li>
                 <a className="nav-link active" href="">
                   Pricing
                 </a>
                </li>
        
           
            <li className="nav-item">
              <a className="nav-link active " >
                Support 
              </a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  
     );
}
