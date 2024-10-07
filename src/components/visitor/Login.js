import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navigation from './Navigation'; 
import './Login.css'; 

const Login = () => {
    const [role, setRole] = useState("Victim");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Logging in as ${role}`);

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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
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
