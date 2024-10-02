// src/components/doctor/ViewAppointments.js
import React from 'react';
import DoctorNavigation from './Navigation';
//import './ViewAppointments.css'; // Create this CSS file for styling

const ViewAppointments = () => {
    return (
        <div className="view-appointments-container">
            <DoctorNavigation />
            <h1>View Appointments</h1>
            <p>Upcoming and past appointments with patients.</p>
            {/* Logic to display appointment list */}
        </div>
    );
};

export default ViewAppointments;
