import React from 'react';
import AdminNavigation from './Navigation'; // Import Admin Navigation
import './ManageRoles.css'; // Ensure this CSS file is created for styling

const ManageRoles = () => {
    const roles = ["Admin", "Victim", "Counselor", "Doctor", "Legal Advisor"]; // Sample role list

    const handleAddRole = () => {
        // Logic to add a new role
        alert("Add role functionality to be implemented");
    };

    const handleEditRole = (role) => {
        // Logic to edit the specified role
        alert(`Edit ${role} functionality to be implemented`);
    };

    const handleDeleteRole = (role) => {
        // Logic to delete the specified role
        alert(`Delete ${role} functionality to be implemented`);
    };

    return (
        <div className="admin-manage-roles">
            <AdminNavigation />
            <h1>Manage Roles</h1>
            <p>Here you can manage user roles.</p>
            <ul>
                {roles.map((role, index) => (
                    <li key={index}>
                        {role}
                        <button onClick={() => handleEditRole(role)}>Edit</button>
                        <button onClick={() => handleDeleteRole(role)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddRole} className="add-role-button">Add New Role</button>
        </div>
    );
};

export default ManageRoles;
