import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component
import './About.css'; // Import the CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <Navigation />
            <h1>About Saahas</h1>
            <p>
                Saahas is a comprehensive platform designed to support individuals affected by domestic violence. 
                It provides a range of resources, including counseling, legal aid, and medical support. 
                Our goal is to empower victims and survivors by offering a safe and accessible space 
                for recovery and growth.
            </p>
            <h2>Team</h2>
            <ul>
                <li>VENKATA SATYA SRIKAR PARVATHA - 2200032432</li>
                <li>ANNAPUREDDY KOMALI - 2200030184</li>
            </ul>
            <h2>Our Advisor / Mentor</h2>
            <p>Jonnalagadda Surya Kiran, Assistant Professor, CSE at K L University</p>
        </div>
    );
};

export default About;
