import React from 'react';
import VictimNavigation from './VictimNavigation'; // Import the navigation

const Explore = () => {
    const counselors = [
        { name: 'Counselor A', distance: '2 km', rating: 4.5 },
        { name: 'Counselor B', distance: '5 km', rating: 4.0 },
        { name: 'Counselor C', distance: '10 km', rating: 4.8 },
        { name: 'Counselor D', distance: '7 km', rating: 4.2 },
        { name: 'Counselor E', distance: '3 km', rating: 5.0 },
    ];

    return (
        <div className="explore-container">
            <VictimNavigation />
            <h1>Explore Counselors</h1>
            <p>Find a counselor nearby:</p>
            <ul className="counselor-list">
                {counselors.map((counselor, index) => (
                    <li key={index} className="counselor-item">
                        <strong>{counselor.name}</strong> - {counselor.distance} | Rating: {counselor.rating}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Explore;
