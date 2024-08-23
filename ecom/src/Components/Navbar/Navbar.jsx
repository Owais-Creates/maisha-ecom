import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <>

            <nav className='navbar' >
                <div className="logo">
                    <img src="/public/images/logo.png" alt="" />
                </div>

                <div className="company-name">
                    Maisha Ecommerce
                </div>

                <div className="links">
                    <ul className='nav-links' >
                        <li>About</li>
                        <li>FAQ's</li>
                        <Link to="/userDetails" ><li ><img className='user' src="public/images/user.png" alt="" /></li></Link>
                    </ul>
                </div>

            </nav>

        </>

    )
}

export default Navbar