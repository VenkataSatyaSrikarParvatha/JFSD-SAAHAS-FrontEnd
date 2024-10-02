// src/components/counselor/Sell.js
import React, { useState } from 'react';
import CounselorNavigation from './Navigation';
//import './Sell.css'; // Create this CSS file for styling

const Sell = () => {
    const [service, setService] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to sell the service (e.g., API call)
        console.log("Service sold:", { service, price });
    };

    return (
        <div className="sell-container">
            <CounselorNavigation />
            <h1>Sell Services</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Service:</label>
                    <input
                        type="text"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sell</button>
            </form>
        </div>
    );
};

export default Sell;
