// src/components/doctor/ViewArticles.js
import React from 'react';
import DoctorNavigation from './Navigation';
//import './ViewArticles.css'; // Create this CSS file for styling

const ViewArticles = () => {
    return (
        <div className="view-articles-container">
            <DoctorNavigation />
            <h1>View Medical Articles</h1>
            <p>Explore medical articles related to domestic violence and mental health.</p>
            {/* Logic to display articles */}
        </div>
    );
};

export default ViewArticles;
