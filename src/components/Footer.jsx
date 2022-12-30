import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h5 className="f-tit">Most Popular Categories</h5>
                    <ul>
                        <li className="f-item">Staples</li>
                        <li className="f-item">Beverages</li>
                        <li className="f-item">Personal Care</li>
                        <li className="f-item">Home Care</li>
                        <li className="f-item">Snacks & Branded Foods</li>
                        <li className="f-item">Dairy & Bakery</li>
                    </ul>
                </div>
                <div className="col">
                    <h5 className="f-tit">Our Pages</h5>
                    <ul>
                        <li className="f-item">Home</li>
                        <li className="f-item">Products</li>
                        <li className="f-item">Product Details</li>
                        <li className="f-item">Categories</li>
                        <li className="f-item">Cart</li>
                        <li className="f-item">Login</li>
                        <li className="f-item">SignUp</li>
                        <li className="f-item">Profile</li>
                    </ul>
                </div>
                <div className="col">
                    <h5 className="f-tit" style={{marginLeft: 30}}>Contect Us</h5>
                    <ul type="none">
                        <li className="f-item">WhatsApp Us: 99999 99999</li>
                        <li className="f-item">Call Us: 99999 99999<br/>9:00 AM TO 9:00 PM, 365 Days</li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="cr">
            <span>Made With ❤ by Bhavanshu Dalwadi & Team.</span>
            <span>© 2022 All rights reserved. MERCEARIA Wholesale Market Ltd.</span>
        </div>
    </footer>
  )
}

export default Footer
