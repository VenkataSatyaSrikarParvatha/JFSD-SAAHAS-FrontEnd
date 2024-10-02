// src/components/visitor/About.js
import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component
//import './About.css'; // Create this CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <Navigation />
            <h1>About Saahas</h1>
            <p>Saahas is a comprehensive platform designed to support individuals affected by domestic violence...</p>
        </div>
    );
};

export default About;
