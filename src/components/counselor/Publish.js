// src/components/counselor/Publish.js
import React, { useState } from 'react';
import CounselorNavigation from './Navigation';
// import './Publish.css'; // Create this CSS file for styling
import './Publish.css'; // Ensure to import the CSS

const Publish = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to publish the article (e.g., API call)
        console.log("Article published:", { title, content });
        // Optionally, reset the form after submission
        setTitle('');
        setContent('');
    };

    return (
        <div className="publish-container">
            <CounselorNavigation />
            <h1>Publish Articles</h1>
            <form onSubmit={handleSubmit} className="publish-form">
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="form-textarea"
                    />
                </div>
                <button type="submit" className="publish-button">Publish</button>
            </form>
        </div>
    );
};

export default Publish;
