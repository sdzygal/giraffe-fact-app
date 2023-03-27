import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-menu">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/facts">
                    <li>Facts Pool</li>
                </Link>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;