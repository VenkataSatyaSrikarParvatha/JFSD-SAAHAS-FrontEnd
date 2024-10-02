// src/components/admin/Training.js
import React from 'react';
import AdminNavigation from './Navigation'; // Import Admin Navigation
//import './Training.css'; // Create this CSS file for styling

const Training = () => {
    const handleModuleClick = (module) => {
        // You can add logic here to handle navigation or actions
        console.log(`Navigating to ${module}`);
    };

    return (
        <div className="admin-training">
            <AdminNavigation />
            <h1>Training Resources</h1>
            <p>Here you can find training resources for counselors and staff.</p>
            {/* Sample Training List with buttons */}
            <ul>
                <li><button onClick={() => handleModuleClick('Training Module 1')}>Training Module 1</button></li>
                <li><button onClick={() => handleModuleClick('Training Module 2')}>Training Module 2</button></li>
                {/* Add more training resources as needed */}
            </ul>
        </div>
    );
};

export default Training;
