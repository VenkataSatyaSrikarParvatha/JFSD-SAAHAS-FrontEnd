// src/components/counselor/Dashboard.js
import React from 'react';
import CounselorNavigation from './Navigation'; // Adjust the import path if necessary
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <CounselorNavigation />
            <h1>Counselor Dashboard</h1>
            <p>Welcome to your dashboard! Here you can manage your activities and access resources.</p>
            <ul className="dashboard-links">
                <li><a href="/counselor/publish">Publish Articles</a></li>
                <li><a href="/counselor/sell">Sell Services</a></li>
                <li><a href="/counselor/withdraw">Withdraw Earnings</a></li>
                <li><a href="/counselor/store">Store</a></li>
                <li><a href="/counselor/read">Read Published Articles</a></li>
                <li><a href="/counselor/manage-clients">Manage Clients</a></li>
                <li><a href="/counselor/schedule-appointments">Schedule Appointments</a></li>
                <li><a href="/counselor/resources">Access Resources</a></li>
            </ul>
        </div>
    );
};

export default Dashboard;
