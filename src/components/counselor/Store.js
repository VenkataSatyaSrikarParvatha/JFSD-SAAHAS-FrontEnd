// src/components/counselor/Store.js
import React from 'react';
import CounselorNavigation from './Navigation';
//import './Store.css'; // Create this CSS file for styling

const Store = () => {
    return (
        <div className="store-container">
            <CounselorNavigation />
            <h1>Counselor's Store</h1>
            <p>Here you can sell items related to support for victims of domestic violence.</p>
            {/* Logic to display items available for sale */}
        </div>
    );
};

export default Store;
