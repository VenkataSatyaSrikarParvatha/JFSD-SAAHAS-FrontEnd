// src/components/doctor/DoctorDashboard.js
import React from 'react';
import DoctorNavigation from './Navigation'; // Adjust path if necessary
import './DoctorDashboard.css'; // Optional: Create this CSS file for styling

const DoctorDashboard = () => {
    return (
        <div className="doctor-dashboard-container">
            <DoctorNavigation />
            <h1>Doctor Dashboard</h1>
            <p>Welcome to your dashboard. Please select an option from the navigation menu.</p>
        </div>
    );
};

export default DoctorDashboard;
