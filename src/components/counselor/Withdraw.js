// src/components/counselor/Withdraw.js
import React, { useState } from 'react';
import CounselorNavigation from './Navigation';
//import './Withdraw.css'; // Create this CSS file for styling

const Withdraw = () => {
    const [amount, setAmount] = useState('');

    const handleWithdraw = (e) => {
        e.preventDefault();
        // Logic to withdraw earnings (e.g., API call)
        console.log("Withdrawn amount:", amount);
    };

    return (
        <div className="withdraw-container">
            <CounselorNavigation />
            <h1>Withdraw Earnings</h1>
            <form onSubmit={handleWithdraw}>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Withdraw</button>
            </form>
        </div>
    );
};

export default Withdraw;
