import React from 'react';
import VictimNavigation from './VictimNavigation'; // Adjust the path if needed
import './Dashboard.css'; // Import CSS file for styling

const VictimDashboard = () => {
    return (
        <div className="victim-dashboard">
            <VictimNavigation />
            <h1>Victim Dashboard</h1>
            <p>Welcome to your dashboard. Here you can manage your tasks, explore counselors, visit the store, and get help.</p>
            
            <div className="dashboard-cards">
                <div className="card">
                    <h2>Your Tasks</h2>
                    <p>View and manage your recovery tasks assigned by your counselor.</p>
                    <a href="/victim/tasks" className="button">Go to Tasks</a>
                </div>
                <div className="card">
                    <h2>Explore Counselors</h2>
                    <p>Find nearby counselors who can assist you.</p>
                    <a href="/victim/explore" className="button">Explore</a>
                </div>
                <div className="card">
                    <h2>Visit Store</h2>
                    <p>Access resources and support items available for purchase.</p>
                    <a href="/victim/store" className="button">Visit Store</a>
                </div>
                <div className="card">
                    <h2>Get Help</h2>
                    <p>If you need immediate assistance, click here.</p>
                    <a href="/victim/help" className="button">Get Help</a>
                </div>
            </div>
        </div>
    );
};

export default VictimDashboard;
