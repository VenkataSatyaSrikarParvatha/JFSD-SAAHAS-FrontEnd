// src/components/counselor/Read.js
import React from 'react';
import CounselorNavigation from './Navigation';
// import './Read.css'; // Create this CSS file for styling
import './Read.css'; // Ensure to import the CSS

const Read = () => {
    // Sample data for articles
    const articles = [
        {
            id: 1,
            title: 'Understanding Domestic Violence',
            author: 'Dr. Jane Smith',
            date: '2024-09-15',
            content: 'This article provides an overview of domestic violence, its types, and its impact on individuals and families.',
        },
        {
            id: 2,
            title: 'How to Support a Victim',
            author: 'Counselor John Doe',
            date: '2024-09-20',
            content: 'Learn how to provide emotional and practical support to victims of domestic violence.',
        },
        {
            id: 3,
            title: 'Legal Rights of Domestic Violence Victims',
            author: 'Legal Advisor Anna Lee',
            date: '2024-09-25',
            content: 'An in-depth look at the legal protections available for victims of domestic violence.',
        },
        // Add more articles as needed
    ];

    return (
        <div className="read-container">
            <CounselorNavigation />
            <h1>Read Published Articles</h1>
            <p>List of published articles related to domestic violence:</p>
            <div className="articles-list">
                {articles.map((article) => (
                    <div key={article.id} className="article-card">
                        <h2>{article.title}</h2>
                        <p><strong>Author:</strong> {article.author}</p>
                        <p><strong>Date:</strong> {article.date}</p>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Read;
