// src/components/counselor/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css'; // Create this CSS file for styling
import './Navigation.css';

const CounselorNavigation = () => {
    return (
        <nav className="counselor-nav">
            <ul>
                <li><Link to="/counselor/dashboard">Dashboard</Link></li>
                <li><Link to="/counselor/publish">Publish Articles</Link></li>
                <li><Link to="/counselor/sell">Sell Services</Link></li>
                <li><Link to="/counselor/withdraw">Withdraw Earnings</Link></li>
                <li><Link to="/counselor/store">Store</Link></li>
                <li><Link to="/counselor/read">Read Published Articles</Link></li>
                <li><Link to="/">Logout</Link></li> {/* Adjust the logout route as needed */}
            </ul>
        </nav>
    );
};

export default CounselorNavigation;
