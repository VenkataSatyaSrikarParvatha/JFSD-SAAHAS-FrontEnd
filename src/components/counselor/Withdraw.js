// src/components/counselor/Withdraw.js
import React, { useState } from 'react';
import CounselorNavigation from './Navigation';
// import './Withdraw.css'; // Create this CSS file for styling
import './Withdraw.css'; // Ensure to import the CSS

const Withdraw = () => {
    const [amount, setAmount] = useState('');
    const [withdrawalHistory, setWithdrawalHistory] = useState([]);

    const handleWithdraw = (e) => {
        e.preventDefault();
        // Logic to withdraw earnings (e.g., API call)
        if (amount > 0) {
            const newWithdrawal = {
                id: withdrawalHistory.length + 1,
                amount: parseFloat(amount),
                date: new Date().toLocaleDateString(),
            };
            setWithdrawalHistory([...withdrawalHistory, newWithdrawal]);
            setAmount(''); // Reset amount after successful withdrawal
            console.log("Withdrawn amount:", amount);
        } else {
            alert("Please enter a valid amount");
        }
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

            <h2>Withdrawal History</h2>
            <div className="withdrawal-history">
                {withdrawalHistory.length === 0 ? (
                    <p>No withdrawals made yet.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {withdrawalHistory.map((withdrawal) => (
                                <tr key={withdrawal.id}>
                                    <td>{withdrawal.id}</td>
                                    <td>${withdrawal.amount.toFixed(2)}</td>
                                    <td>{withdrawal.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Withdraw;
