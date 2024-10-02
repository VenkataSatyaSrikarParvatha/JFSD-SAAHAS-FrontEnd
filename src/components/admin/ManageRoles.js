// src/components/admin/ManageRoles.js
import React from 'react';
import AdminNavigation from './Navigation'; // Import Admin Navigation
//import './ManageRoles.css'; // Create this CSS file for styling

const ManageRoles = () => {
    return (
        <div className="admin-manage-roles">
            <AdminNavigation />
            <h1>Manage Roles</h1>
            <p>Here you can manage user roles.</p>
            {/* Sample Role List */}
            <ul>
                <li>Admin</li>
                <li>Victim</li>
                <li>Counselor</li>
                <li>Doctor</li>
                <li>Legal Advisor</li>
                {/* Add options to add/edit/delete roles */}
            </ul>
        </div>
    );
};

export default ManageRoles;
