// src/components/legalAdvisor/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'; // Adjust the path based on your file structure

const Dashboard = () => {
    return (
        <div>
            <Navigation />
            <div className="dashboard-container">
                <h1>Legal Advisor Dashboard</h1>
                <p>Welcome, Legal Advisor! Manage your tasks and provide advice here.</p>
                <ul>
                    <li><Link to="/view-cases">View Cases</Link></li>
                    <li><Link to="/provide-legal-advice">Provide Legal Advice</Link></li>
                    <li><Link to="/update-legal-resources">Update Legal Resources</Link></li>
                    <li><Link to="/schedule-consultations">Schedule Consultations</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
