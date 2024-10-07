import React from 'react';
import VictimNavigation from './VictimNavigation'; // Import the navigation
import './Help.css'; // Make sure to create this CSS file for styling

const Help = () => {
    return (
        <div className="help-container">
            <VictimNavigation />
            <h1>Help & Support</h1>
            <p>If you need assistance, feel free to reach out to us through any of the following methods:</p>
            <h2>Contact Us</h2>
            <ul>
                <li><strong>Email:</strong> support@saahas.com</li>
                <li><strong>Phone:</strong> +91 6578765645</li>
                <li><strong>Live Chat:</strong> Available on our website during business hours.</li>
            </ul>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Check out our <a href="/faq">FAQs</a> page for common queries.</p>
        </div>
    );
};

export default Help;
