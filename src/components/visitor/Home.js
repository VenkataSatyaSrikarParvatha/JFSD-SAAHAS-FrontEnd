import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'; 
import './Home.css'; 

const Home = () => {
    return (
        <div className="home-container">
            
            <Navigation />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="welcome-section">
                <h1>Welcome to Saahas</h1>
                <p>Your journey to support and resources begins here.</p>
            </div>

            
            <div className="modules-section">
                <h2>Check Out</h2>
                <ul>
                    <li><Link to="/about">About</Link>: Learn more about this project.</li>
                    <li><Link to="/requirements">Requirements</Link>: Information for counselors, doctors, and advisors.</li>
                    <li><Link to="/articles">Read Articles</Link>: Explore laws and resources related to domestic violence.</li>
                    <li><Link to="/help">Help / FAQ</Link>: Get assistance and options to sign in or sign up.</li>
                </ul>
            </div>

      
            <div className="roles-section">
                <h2>Roles in Saahas</h2>
                <div className="roles-description">
                    <div className="role">
                        <h3>Admin</h3>
                        <p>The Admin manages user roles, oversees content, and ensures data security.</p>
                    </div>
                    <div className="role">
                        <h3>Victim/Survivor</h3>
                        <p>Victims can access resources and seek help through the application.</p>
                    </div>
                    <div className="role">
                        <h3>Counselor</h3>
                        <p>Counselors provide support and guidance to victims and survivors.</p>
                    </div>
                    <div className="role">
                        <h3>Legal Advisor</h3>
                        <p>Legal Advisors offer legal advice and resources to users in need.</p>
                    </div>
                    <div className="role">
                        <h3>Doctor</h3>
                        <p>Doctors provide medical advice and support for physical injuries or health issues.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
