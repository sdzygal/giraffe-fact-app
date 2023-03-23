import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <li>About</li>
                <Link to="/facts">
                    <li>Facts</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;