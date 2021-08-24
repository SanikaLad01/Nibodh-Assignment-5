import React from 'react'
import Logo1  from "../components/images/logo1.png"

export default function Navbar() {
    return (
        <div className="row nav-custom">
            <div className="col-2">
            <img src={Logo1} alt="" className=" custom-logo img-thumbnail"  />
            </div>
            <div className="col-7 ">
        <div className="custom-align">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly custom-link-nav ">
        <li className="nav-item">
          <a className="nav-link" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
             <a className="nav-link" href="#">SERVICES</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link" href="#">HELP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">DEALS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MORE</a>
        </li>
        
        
        </ul>
            </div>
            </div>
            <div className="col-2 ">

         <button className="btn btn-success button" size="lg">GET FREE QUOTE</button>

            </div>
        </div>
    )
}