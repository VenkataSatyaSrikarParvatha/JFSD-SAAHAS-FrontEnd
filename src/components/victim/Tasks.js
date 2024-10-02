import React from 'react';
import VictimNavigation from './VictimNavigation'; // Import the navigation

const Tasks = () => {
    return (
        <div>
            <VictimNavigation />
            <h1>Recovery Tasks</h1>
            <ul>
                <li>Task 1: Attend your weekly counseling session.</li>
                <li>Task 2: Complete mindfulness exercises.</li>
                <li>Task 3: Journal your thoughts daily.</li>
            </ul>
        </div>
    );
};

export default Tasks;
