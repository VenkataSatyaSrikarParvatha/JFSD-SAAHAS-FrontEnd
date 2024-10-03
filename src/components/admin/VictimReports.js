// src/components/admin/VictimReports.js
import React from 'react';
import AdminNavigation from './Navigation'; // Import Admin Navigation
import './VictimReports.css'; // Import the CSS file for styling

const VictimReports = () => {
    return (
        <div className="admin-victim-reports">
            <AdminNavigation />
            <h1>Victim Reports</h1>
            <p>Here you can view and manage victim reports.</p>
            {/* Sample Report List */}
            <table>
                <thead>
                    <tr>
                        <th>Report ID</th>
                        <th>Victim Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data; replace with real data from your database */}
                    <tr>
                        <td>1</td>
                        <td>Jane Smith</td>
                        <td>Report of domestic violence.</td>
                        <td>Pending</td>
                        <td>
                            <button className="view-button">View</button>
                            <button className="resolve-button">Resolve</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Emily Johnson</td>
                        <td>Assault incident report.</td>
                        <td>In Review</td>
                        <td>
                            <button className="view-button">View</button>
                            <button className="resolve-button">Resolve</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Michael Brown</td>
                        <td>Threat report from partner.</td>
                        <td>Resolved</td>
                        <td>
                            <button className="view-button">View</button>
                            <button className="resolve-button" disabled>Resolved</button>
                        </td>
                    </tr>
                    {/* Add more reports as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default VictimReports;
