// src/components/visitor/Articles.js
import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component
//import './Articles.css'; // Create this CSS file for styling

const Articles = () => {
    return (
        <div className="articles-container">
            <Navigation />
            <h1>Articles on Domestic Violence</h1>
            <p>Read various articles and laws about domestic violence and its effects...</p>
        </div>
    );
};

export default Articles;
