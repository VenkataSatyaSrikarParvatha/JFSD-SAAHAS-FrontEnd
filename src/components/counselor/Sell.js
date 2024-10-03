// src/components/counselor/Sell.js
import React, { useState } from 'react';
import CounselorNavigation from './Navigation';
// import './Sell.css'; // Create this CSS file for styling
import './Sell.css'; // Ensure to import the CSS

const Sell = () => {
    const [service, setService] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to sell the service (e.g., API call)
        console.log("Service sold:", { service, price, description, duration });
    };

    return (
        <div className="sell-container">
            <CounselorNavigation />
            <h1>Sell Services</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Service:</label>
                    <input
                        type="text"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes):</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sell</button>
            </form>
        </div>
    );
};

export default Sell;
