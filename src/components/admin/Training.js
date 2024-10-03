import React from 'react';
import AdminNavigation from './Navigation'; // Import Admin Navigation
import './Training.css'; // Ensure this CSS file is created for styling

const Training = () => {
    const trainingModules = [
        { id: 1, title: "Training Module 1", description: "Introduction to Domestic Violence Awareness" },
        { id: 2, title: "Training Module 2", description: "Counseling Techniques for Survivors" },
        { id: 3, title: "Training Module 3", description: "Legal Rights and Resources for Victims" },
        { id: 4, title: "Training Module 4", description: "Health Care Considerations for Domestic Violence" },
        { id: 5, title: "Training Module 5", description: "Creating a Safe Environment for Survivors" },
    ];

    const handleModuleClick = (module) => {
        // Logic to navigate or display module details
        console.log(`Navigating to ${module}`);
        // Example: Redirect to the module details page
        // navigate(`/training/${module.id}`);
    };

    return (
        <div className="admin-training">
            <AdminNavigation />
            <h1>Training Resources</h1>
            <p>Here you can find training resources for counselors and staff.</p>
            <ul>
                {trainingModules.map((module) => (
                    <li key={module.id}>
                        <button onClick={() => handleModuleClick(module.title)}>
                            {module.title}
                        </button>
                        <p>{module.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Training;
