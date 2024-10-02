// src/components/visitor/Help.js
import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component
//import './Help.css'; // Create this CSS file for styling

const Help = () => {
    return (
        <div className="help-container">
            <Navigation />
            <h1>Help / FAQ</h1>
            <p>Get assistance and learn how to use the application...</p>
            <h2>Sign In or Sign Up</h2>
            <p>For more personalized help, please <a href="/login">Login</a> or <a href="/signup">Sign Up</a>.</p>
        </div>
    );
};

export default Help;
