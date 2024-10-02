// src/components/doctor/Prescribe.js
import React, { useState } from 'react';
import DoctorNavigation from './Navigation';
//import './Prescribe.css'; // Create this CSS file for styling

const Prescribe = () => {
    const [patientId, setPatientId] = useState('');
    const [medication, setMedication] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to prescribe medication (e.g., API call)
        console.log("Medication prescribed:", { patientId, medication });
    };

    return (
        <div className="prescribe-container">
            <DoctorNavigation />
            <h1>Prescribe Medication</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Patient ID:</label>
                    <input
                        type="text"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Medication:</label>
                    <input
                        type="text"
                        value={medication}
                        onChange={(e) => setMedication(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Prescribe</button>
            </form>
        </div>
    );
};

export default Prescribe;
