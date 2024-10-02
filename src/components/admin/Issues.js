// src/components/admin/Issues.js
import React from 'react';
import AdminNavigation from './Navigation'; // Import Admin Navigation
//import './Issues.css'; // Create this CSS file for styling

const Issues = () => {
    return (
        <div className="admin-issues">
            <AdminNavigation />
            <h1>Manage Issues</h1>
            <p>Here you can manage reported issues.</p>
            {/* Sample Issues List */}
            <table>
                <thead>
                    <tr>
                        <th>Issue ID</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data; replace with real data from your database */}
                    <tr>
                        <td>1</td>
                        <td>Issue description here.</td>
                        <td>Resolved</td>
                    </tr>
                    {/* Add more issues as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Issues;
