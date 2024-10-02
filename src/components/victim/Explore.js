import React from 'react';
import VictimNavigation from './VictimNavigation'; // Import the navigation

const Explore = () => {
    return (
        <div>
            <VictimNavigation />
            <h1>Explore Counselors</h1>
            <p>Find a counselor nearby:</p>
            <ul>
                <li>Counselor A - 2 km away</li>
                <li>Counselor B - 5 km away</li>
                <li>Counselor C - 10 km away</li>
            </ul>
        </div>
    );
};

export default Explore;
