import React from 'react';
import AdminNavigation from './Navigation'; 
import './Issues.css'; 

const Issues = () => {
    return (
        <div className="admin-issues">
            <AdminNavigation />
            <h1>Manage Issues</h1>
            <p>Here you can manage reported issues.</p>

            <div className="issues-table-container">
                <table className="issues-table">
                    <thead>
                        <tr>
                            <th>Issue ID</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Issue description here.</td>
                            <td>Resolved</td>
                            <td>
                                <button className="action-btn">View</button>
                                <button className="action-btn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Another issue description.</td>
                            <td>Pending</td>
                            <td>
                                <button className="action-btn">View</button>
                                <button className="action-btn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Issue description that needs attention.</td>
                            <td>In Progress</td>
                            <td>
                                <button className="action-btn">View</button>
                                <button className="action-btn">Delete</button>
                            </td>
                        </tr>
                        {/* Add more issues as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Issues;
