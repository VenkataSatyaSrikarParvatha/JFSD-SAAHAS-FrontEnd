// src/components/visitor/Login.js
import React, { useState } from 'react';
import Navigation from './Navigation'; // Import the Navigation component
import './Login.css'; // Create this CSS file for styling

const Login = () => {
    const [role, setRole] = useState("Victim"); // Default role

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here based on the selected role
        console.log(`Logging in as ${role}`);
        // Redirect or perform login action
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
                <input type="email" required />
                <br />
                <label>Password:</label>
                <input type="password" required />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
