// src/components/legalAdvisor/ViewCases.js
import React from 'react';
import Navigation from './Navigation'; // Adjust the path based on your file structure

const ViewCases = () => {
    return (
        <div>
            <Navigation />
            <div className="view-cases-container">
                <h1>View Cases</h1>
                <p>Here you can view all the cases assigned to you.</p>
                {/* Add table or case details here */}
            </div>
        </div>
    );
};

export default ViewCases;
