// src/components/counselor/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    // Sample data for statistics and appointments
    const statistics = {
        victimsHelped: 120,
        upcomingAppointments: 5,
        articlesPublished: 10,
    };

    return (
        <div className="home-container">
            <h2>Counselor Home</h2>
            <p>Welcome to your home page! Here are some statistics and upcoming appointments:</p>
            <div className="statistics">
                <h3>Statistics</h3>
                <ul>
                    <li>Victims Helped: <strong>{statistics.victimsHelped}</strong></li>
                    <li>Upcoming Appointments: <strong>{statistics.upcomingAppointments}</strong></li>
                    <li>Articles Published: <strong>{statistics.articlesPublished}</strong></li>
                </ul>
            </div>
            <div className="appointments">
                <h3>Upcoming Appointments</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Client Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2024-10-05</td>
                            <td>10:00 AM</td>
                            <td>Jane Doe</td>
                        </tr>
                        <tr>
                            <td>2024-10-06</td>
                            <td>2:00 PM</td>
                            <td>John Smith</td>
                        </tr>
                        {/* Add more appointments as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
