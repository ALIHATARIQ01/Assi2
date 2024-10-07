import React from 'react';
import './Navbar.css';
import logo from '../image/logo1.png'; // Update the path to your logo

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Renter Logo" className="logo-image" />
            </div>
            <ul className="navbar-links">
                <li>Home</li>
                <li>Experiences</li>
                <li>Online Experiences</li>
            </ul>
            <div className="navbar-user">
                <button>Login</button>
                <button>Signup</button>
            </div>
        </nav>
    );
};

export default Navbar;
