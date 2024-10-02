// src/components/counselor/Publish.js
import React, { useState } from 'react';
import CounselorNavigation from './Navigation';
//import './Publish.css'; // Create this CSS file for styling

const Publish = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to publish the article (e.g., API call)
        console.log("Article published:", { title, content });
    };

    return (
        <div className="publish-container">
            <CounselorNavigation />
            <h1>Publish Articles</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Publish</button>
            </form>
        </div>
    );
};

export default Publish;
