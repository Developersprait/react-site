import React from 'react';
import logo from '../../src/static/img/logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__left">
                        <img src={logo} alt="logo"/>
                        </div>
                    <ul className="navbar__right">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Showcases</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contacts</a></li>
                        </ul>    
                </div>
            </div>
        </div>
    )
}

export default Navbar
