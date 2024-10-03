import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component
//import './Requirements.css'; // Ensure you create this CSS file for styling

const Requirements = () => {
    return (
        <div className="requirements-container">
            <Navigation />
            <h1>Requirements for Counselors, Doctors, and Legal Advisors</h1>
            
            <section className="requirements-section">
                <h2>Counselor Requirements</h2>
                <ul>
                    <li>Minimum of a Bachelor's degree in psychology or social work.</li>
                    <li>Certification in counseling or therapy.</li>
                    <li>Experience working with victims of domestic violence or trauma.</li>
                    <li>Ability to provide both online and in-person counseling sessions.</li>
                </ul>
            </section>
            
            <section className="requirements-section">
                <h2>Doctor Requirements</h2>
                <ul>
                    <li>Valid medical license and board certification.</li>
                    <li>Experience in handling trauma or domestic violence cases is preferred.</li>
                    <li>Knowledge of mental health and physical injury assessment related to abuse.</li>
                    <li>Ability to work closely with counselors and legal advisors.</li>
                </ul>
            </section>
            
            <section className="requirements-section">
                <h2>Legal Advisor Requirements</h2>
                <ul>
                    <li>Licensed to practice law with a focus on domestic violence or family law.</li>
                    <li>Experience providing legal counsel to victims of abuse.</li>
                    <li>Knowledge of local laws and legal procedures related to domestic violence.</li>
                    <li>Ability to update and maintain legal resources within the platform.</li>
                </ul>
            </section>
        </div>
    );
};

export default Requirements;
