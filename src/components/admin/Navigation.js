// src/components/admin/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css'; // Create this CSS file for styling
import './Navigation.css';

const AdminNavigation = () => {
    return (
        <nav className="admin-navigation">
            <ul>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/users">User Management</Link></li>
                <li><Link to="/admin/victim-reports">Victim Reports</Link></li>
                <li><Link to="/admin/manage-roles">Manage Roles</Link></li>
                <li><Link to="/admin/training">Training</Link></li>
                <li><Link to="/admin/issues">Manage Issues</Link></li>
                <li><Link to="/">Logout</Link></li> {/* Add logout functionality as needed */}
            </ul>
        </nav>
    );
};

export default AdminNavigation;
