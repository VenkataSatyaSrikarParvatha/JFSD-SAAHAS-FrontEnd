import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css'; // Make sure you create this CSS file for styling
import logo from './1.png'; // Import the logo

const Start = () => {
    return (
        <div className="start-container">
            <img src={logo} alt="Saahas Logo" className="logo" />
            <h1>Welcome to Saahas</h1>
            <p>Your journey to support and resources begins here.</p>
            <Link to="/home">
                <button className="start-button">Start</button>
            </Link>
        </div>
    );
};

export default Start;
