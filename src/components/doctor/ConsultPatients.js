// src/components/doctor/ConsultPatients.js
import React from 'react';
import DoctorNavigation from './Navigation';
//import './ConsultPatients.css'; // Create this CSS file for styling

const ConsultPatients = () => {
    return (
        <div className="consult-patients-container">
            <DoctorNavigation />
            <h1>Consult Patients</h1>
            <p>Consultation form for patients.</p>
            {/* Logic for the consultation process */}
        </div>
    );
};

export default ConsultPatients;
