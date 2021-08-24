import React from 'react'
import Logo1  from "../components/images/logo1.png"
export default function footer() {
    return (
        <div>
            
            <div className="row san">
                <br/>
                <br/>
                <div className="col-3 ">
                <br/>
                <img  className="photo" src={Logo1} alt=""/>
                <h6><strong>BEHANCE</strong></h6>
               
                </div>
                <div className="col-3">
                <br/>
                 <h6>COMPANY</h6>
                <p>HOME<br/>SERVICES<br/>RESOURCES<br/>HELP</p>
                </div>
                <div className="col-3">
                <br/>
                <h6>CONTACT US</h6>
                <i class="fas fa-phone-alt fa-1x"></i> +9833546510 <br/>
                <i class="fas fa-envelope-square fa-1x"></i> behance123@gmail.com
                </div>
                <div className="col-3">
                <br/>
                <h6>FOLLOW US</h6>
                <i class="fab fa-facebook-square fa-1x"></i>
                &nbsp;
                <i class="fab fa-linkedin fa-1x"></i>
                &nbsp;
                <i class="fab fa-pinterest-square fa-1x"></i>
                &nbsp;
                <i class="fab fa-instagram-square fa-1x"></i>
                </div>
                <br/>
            </div>
            <div className="text-center">
            <p>© Sanika 2021 Copyright</p>
                </div>
            
        </div>
    )
}
