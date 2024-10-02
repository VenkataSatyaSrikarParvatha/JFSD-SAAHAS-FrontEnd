// src/components/admin/VictimReports.js
import React from 'react';
import AdminNavigation from './Navigation'; // Import Admin Navigation
//import './VictimReports.css'; // Create this CSS file for styling

const VictimReports = () => {
    return (
        <div className="admin-victim-reports">
            <AdminNavigation />
            <h1>Victim Reports</h1>
            <p>Here you can view victim reports.</p>
            {/* Sample Report List */}
            <table>
                <thead>
                    <tr>
                        <th>Report ID</th>
                        <th>Victim Name</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data; replace with real data from your database */}
                    <tr>
                        <td>1</td>
                        <td>Jane Smith</td>
                        <td>Report description here.</td>
                        <td>Pending</td>
                    </tr>
                    {/* Add more reports as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default VictimReports;
