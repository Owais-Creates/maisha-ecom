import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <div className="footer-main">

            <div className='footer-heading' >
                <img src="public/images/logo.png" alt="" />
                <h2>Maisha Ecommerce</h2>
            </div>

            <div className='footer-essentials' >
                <div className="footer-categories">
                    <h2>Get to know us</h2>
                    <p>Privacy Policy</p>
                    <p>Office Address</p>
                    <p>About us</p>
                    <p>Careers</p>
                </div>

                <div className="contact-us">
                    <h2>Contact us</h2>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                </div>
            </div>

        </div>

    )
}

export default Footer