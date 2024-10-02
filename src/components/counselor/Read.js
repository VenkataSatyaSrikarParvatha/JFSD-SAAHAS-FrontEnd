// src/components/counselor/Read.js
import React from 'react';
import CounselorNavigation from './Navigation';
//import './Read.css'; // Create this CSS file for styling

const Read = () => {
    return (
        <div className="read-container">
            <CounselorNavigation />
            <h1>Read Published Articles</h1>
            <p>List of published articles related to domestic violence.</p>
            {/* Logic to display articles */}
        </div>
    );
};

export default Read;
