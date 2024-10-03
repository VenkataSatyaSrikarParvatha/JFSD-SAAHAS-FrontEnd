// src/components/visitor/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navigation from './Navigation'; // Import the Navigation component
import './Signup.css'; // Create this CSS file for styling

const Signup = () => {
    const [role, setRole] = useState("Victim"); // Default role
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log(`Signing up as ${role}`);
        
        // Redirect to the respective role dashboard
        switch (role) {
            case "Victim":
                navigate("/victim/dashboard");
                break;
            case "Counselor":
                navigate("/counselor/dashboard");
                break;
            case "Legal Advisor":
                navigate("/legal-advisor/dashboard");
                break;
            case "Doctor":
                navigate("/doctor/dashboard");
                break;
            default:
                break;
        }
    };

    return (
        <div className="signup-container">
            <Navigation />
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>Select Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Victim">Victim</option>
                    <option value="Counselor">Counselor</option>
                    <option value="Legal Advisor">Legal Advisor</option>
                    <option value="Doctor">Doctor</option>
                </select>
                <br />
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
