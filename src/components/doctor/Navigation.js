// src/components/doctor/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Ensure this file exists and has correct styles

const DoctorNavigation = () => {
    return (
        <nav className="doctor-nav">
            <h2>Doctor Dashboard</h2>
            <ul>
                <li><Link to="/doctor/dashboard">Dashboard</Link></li>
                <li><Link to="/doctor/view-patients">View Patients</Link></li>
                <li><Link to="/doctor/consult">Consult Patients</Link></li>
                <li><Link to="/doctor/prescribe">Prescribe Medication</Link></li>
                <li><Link to="/doctor/view-articles">View Medical Articles</Link></li>
                <li><Link to="/doctor/view-appointments">View Appointments</Link></li>
            </ul>
        </nav>
    );
};

export default DoctorNavigation; // Ensure default export
