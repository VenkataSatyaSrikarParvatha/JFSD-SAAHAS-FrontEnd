// src/components/doctor/ViewPatients.js
import React from 'react';
import DoctorNavigation from './Navigation';
//import './ViewPatients.css'; // Create this CSS file for styling

const ViewPatients = () => {
    return (
        <div className="view-patients-container">
            <DoctorNavigation />
            <h1>View Patients</h1>
            <p>List of patients assigned to you.</p>
            {/* Logic to display a list of patients */}
        </div>
    );
};

export default ViewPatients;
