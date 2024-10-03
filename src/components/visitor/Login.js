// src/components/visitor/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navigation from './Navigation'; // Import the Navigation component
import './Login.css'; // Create this CSS file for styling

const Login = () => {
    const [role, setRole] = useState("Victim"); // Default role
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here (authentication)
        console.log(`Logging in as ${role}`);

        // Redirect to the respective role dashboard
        switch (role) {
            case "Admin":
                navigate("/admin/dashboard");
                break;
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
        <div className="login-container">
            <Navigation />
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Select Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Victim">Victim</option>
                    <option value="Counselor">Counselor</option>
                    <option value="Legal Advisor">Legal Advisor</option>
                    <option value="Doctor">Doctor</option>
                </select>
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
