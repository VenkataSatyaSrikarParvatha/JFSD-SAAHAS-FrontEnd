// src/components/admin/Dashboard.js
import React from 'react';
import AdminNavigation from './Navigation'; // Import the new Admin Navigation
//import './Dashboard.css'; // Create this CSS file for styling

const Dashboard = () => {
    return (
        <div className="admin-dashboard">
            <AdminNavigation />
            <h1>Admin Dashboard</h1>
            <p>Welcome to the Admin Dashboard. Here you can manage users and oversee the platform.</p>
            
            <h2>User Management</h2>
            <ul>
                <li><a href="/admin/users">View Users</a></li>
                <li><a href="/admin/add-user">Add User</a></li>
            </ul>

            <h2>Victim Reports</h2>
            <ul>
                <li><a href="/admin/victim-reports">View Victim Reports</a></li>
            </ul>

            <h2>Role Management</h2>
            <ul>
                <li><a href="/admin/manage-roles">Manage Roles</a></li>
            </ul>

            <h2>Training</h2>
            <ul>
                <li><a href="/admin/training">Training Resources</a></li>
            </ul>

            <h2>Issues Management</h2>
            <ul>
                <li><a href="/admin/issues">Manage Issues</a></li>
            </ul>
        </div>
    );
};

export default Dashboard;
