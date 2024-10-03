import React from 'react';
import { Link } from 'react-router-dom';
//import './VictimNavigation.css'; // You can style this as needed
import './VictimNavigation.css'; // Import CSS file for styling

const VictimNavigation = () => {
    return (
        <nav className="victim-navbar">
            <ul>
                <li><Link to="/victim/dashboard">Dashboard</Link></li>
                <li><Link to="/victim/tasks">Tasks</Link></li>
                <li><Link to="/victim/explore">Explore</Link></li>
                <li><Link to="/victim/store">Store</Link></li>
                <li><Link to="/victim/help">Help</Link></li>
                <li><Link to="/logout" className="logout-link">Logout</Link></li> {/* Logout link */}
            </ul>
        </nav>
    );
};

export default VictimNavigation;
