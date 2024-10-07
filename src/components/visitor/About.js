import React from 'react';
import Navigation from './Navigation';
import './About.css';

const About = () => {
    return (
        
        <div className="about-container">
            <Navigation />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>About Saahas</h1>
            <p>
                Saahas is a dedicated platform aimed at providing comprehensive support to individuals facing domestic violence. 
                We offer counseling, legal aid, and medical assistance to empower survivors on their journey to healing and growth.
            </p>
            <h2>Meet the Team</h2>
            <ul>
                <li>VENKATA SATYA SRIKAR PARVATHA - 2200032432</li>
                <li>ANNAPUREDDY KOMALI - 2200030184</li>
            </ul>
            <h2>Advisor</h2>
            <p>Jonnalagadda Surya Kiran, Assistant Professor, Department of CSE, K L University</p>
        </div>
    );
};

export default About;
