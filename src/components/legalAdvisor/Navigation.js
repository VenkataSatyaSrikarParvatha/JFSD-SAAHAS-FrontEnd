// src/components/legalAdvisor/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Ensure this CSS file is created for styling

const Navigation = () => {
    return (
        <nav className="legal-nav">
            <ul>
                <li><Link to="/legal-advisor/dashboard">Dashboard</Link></li>
                <li><Link to="/legal-advisor/view-cases">View Cases</Link></li>
                <li><Link to="/legal-advisor/legal-advice">Provide Legal Advice</Link></li>
                <li><Link to="/legal-advisor/update-resources">Update Legal Resources</Link></li>
                <li><Link to="/legal-advisor/schedule-consultations">Schedule Consultations</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
