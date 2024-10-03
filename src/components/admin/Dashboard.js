import React from 'react';
import AdminNavigation from './Navigation'; // Import the Admin Navigation
import './Dashboard.css'; // Create this CSS file for styling

const Dashboard = () => {
    return (
        <div className="admin-dashboard">
            <AdminNavigation />
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <p>Welcome to the Admin Dashboard. Here you can manage users, roles, and oversee the platform's functionality.</p>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-section">
                    <h2>User Management</h2>
                    <div className="dashboard-cards">
                        <div className="dashboard-card">
                            <h3>View Users</h3>
                            <p>Manage and view all registered users in the system.</p>
                            <a href="/admin/users" className="dashboard-btn">Go to Users</a>
                        </div>
                        <div className="dashboard-card">
                            <h3>Add User</h3>
                            <p>Manually add a new user to the system.</p>
                            <a href="/admin/add-user" className="dashboard-btn">Add User</a>
                        </div>
                    </div>
                </div>

                <div className="dashboard-section">
                    <h2>Victim Reports</h2>
                    <div className="dashboard-cards">
                        <div className="dashboard-card">
                            <h3>View Victim Reports</h3>
                            <p>Access reports submitted by victims for review and management.</p>
                            <a href="/admin/victim-reports" className="dashboard-btn">View Reports</a>
                        </div>
                    </div>
                </div>

                <div className="dashboard-section">
                    <h2>Role Management</h2>
                    <div className="dashboard-cards">
                        <div className="dashboard-card">
                            <h3>Manage Roles</h3>
                            <p>Assign, remove, or edit user roles within the system.</p>
                            <a href="/admin/manage-roles" className="dashboard-btn">Manage Roles</a>
                        </div>
                    </div>
                </div>

                <div className="dashboard-section">
                    <h2>Training</h2>
                    <div className="dashboard-cards">
                        <div className="dashboard-card">
                            <h3>Training Resources</h3>
                            <p>Provide training materials and resources for new users and roles.</p>
                            <a href="/admin/training" className="dashboard-btn">View Resources</a>
                        </div>
                    </div>
                </div>

                <div className="dashboard-section">
                    <h2>Issues Management</h2>
                    <div className="dashboard-cards">
                        <div className="dashboard-card">
                            <h3>Manage Issues</h3>
                            <p>View and address issues raised by users in the system.</p>
                            <a href="/admin/issues" className="dashboard-btn">Manage Issues</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
