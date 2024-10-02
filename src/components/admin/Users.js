// src/components/admin/Users.js
import React from 'react';
import AdminNavigation from './Navigation'; // Import Admin Navigation
//import './Users.css'; // Create this CSS file for styling

const Users = () => {
    return (
        <div className="admin-users">
            <AdminNavigation />
            <h1>User Management</h1>
            <p>Here you can manage users.</p>
            {/* Sample User List */}
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data; replace with real data from your database */}
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>Victim</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    {/* Add more users as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
