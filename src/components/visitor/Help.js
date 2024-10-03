import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component
import './Help.css'; // Import the CSS file for styling

const Help = () => {
    return (
        <div className="help-container">
            <Navigation />
            <h1>Help / FAQ</h1>
            <p>If you need assistance, here are some frequently asked questions that might help you:</p>
            
            <div className="faq-section">
                <h2>Frequently Asked Questions (FAQ)</h2>
                
                <h3>1. How do I sign up for Saahas?</h3>
                <p>To sign up, click on the "Sign Up" link at the top-right corner of the page, and fill in the required information.</p>
                
                <h3>2. How can I reset my password?</h3>
                <p>If you forgot your password, you can reset it by clicking on the "Forgot Password" link on the login page.</p>
                
                <h3>3. Who can I contact for help?</h3>
                <p>If you're facing any issues or need help, feel free to reach out to our support team at <a href="mailto:support@saahas.com">support@saahas.com</a>.</p>
                
                <h3>4. What should I do if I'm in immediate danger?</h3>
                <p>If you're in immediate danger, we urge you to contact local emergency services or dial the appropriate helpline for your area.</p>

                <h3>5. How do I schedule a counseling session?</h3>
                <p>Once you log in as a victim/survivor, you can explore nearby counselors and schedule an in-person session from the 'Explore' section.</p>
            </div>

            <h2>Sign In or Sign Up</h2>
            <p>For more personalized help, please <a href="/login">Login</a> or <a href="/signup">Sign Up</a>.</p>
        </div>
    );
};

export default Help;
