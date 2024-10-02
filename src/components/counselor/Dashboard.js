// src/components/counselor/Dashboard.js
import React from 'react';
import CounselorNavigation from './Navigation'; // Adjust the import path if necessary
//import './Dashboard.css'; // Create this CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <CounselorNavigation />
            <h1>Counselor Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <ul>
                <li><a href="/counselor/publish">Publish Articles</a></li>
                <li><a href="/counselor/sell">Sell Services</a></li>
                <li><a href="/counselor/withdraw">Withdraw Earnings</a></li>
                <li><a href="/counselor/store">Store</a></li>
                <li><a href="/counselor/read">Read Published Articles</a></li>
            </ul>
        </div>
    );
};

export default Dashboard;
