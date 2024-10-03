// src/components/counselor/Store.js
import React from 'react';
import CounselorNavigation from './Navigation';
// import './Store.css'; // Create this CSS file for styling
import './Store.css'; // Ensure to import the CSS

const Store = () => {
    // Sample data for items available for sale
    const items = [
        { id: 1, name: 'Self-Help Book', price: 15.99, description: 'A guide to overcoming domestic violence.' },
        { id: 2, name: 'Therapy Journal', price: 10.99, description: 'A journal for personal reflection and therapy notes.' },
        { id: 3, name: 'Support Group Membership', price: 29.99, description: 'Monthly membership for support group access.' },
        { id: 4, name: 'Wellness Kit', price: 24.99, description: 'A kit with self-care items for emotional well-being.' },
        // Add more items as needed
    ];

    return (
        <div className="store-container">
            <CounselorNavigation />
            <h1>Counselor's Store</h1>
            <p>Here you can sell items related to support for victims of domestic violence.</p>
            <div className="item-list">
                {items.map(item => (
                    <div key={item.id} className="item-card">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
