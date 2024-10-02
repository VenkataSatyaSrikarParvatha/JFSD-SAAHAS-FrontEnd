// src/components/counselor/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './Login.css'; // Create this CSS file for styling

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically validate the credentials
        // For now, we'll just navigate to the Counselor Dashboard
        navigate('/counselor/dashboard'); // Redirect to the Counselor Dashboard
    };

    return (
        <div className="login-container">
            <h1>Counselor Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
