import React, { useState } from 'react';
import './Acceptance.css'; // Import the CSS for styling

const Acceptance = () => {
  // Sample data for accepted users (replace with actual data from your backend)
  const [acceptedUsers, setAcceptedUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Victim', dateAccepted: '2024-09-28' },
    { id: 2, name: 'Jane Smith', role: 'Counselor', dateAccepted: '2024-09-30' },
    { id: 3, name: 'Emily Johnson', role: 'Legal Advisor', dateAccepted: '2024-10-02' },
  ]);

  // Function to handle removing a user from acceptance history
  const handleRemove = (id) => {
    setAcceptedUsers(acceptedUsers.filter(user => user.id !== id));
  };

  return (
    <div className="acceptance-container">
      <h2>Acceptance History</h2>
      <p>Manage accepted users and their history below.</p>

      {acceptedUsers.length > 0 ? (
        <table className="acceptance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Date Accepted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {acceptedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.dateAccepted}</td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="remove-btn" onClick={() => handleRemove(user.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users have been accepted yet.</p>
      )}
    </div>
  );
};

export default Acceptance;
