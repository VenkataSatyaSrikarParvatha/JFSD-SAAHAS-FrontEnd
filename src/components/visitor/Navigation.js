import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/requirements">Requirements</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/help">Help / FAQ</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
