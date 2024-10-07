import React from 'react';
import Navigation from './Navigation'; 
import './Articles.css';

const Articles = () => {
    return (
        <div className="articles-container">
            <Navigation />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Articles on Domestic Violence</h1>
            <p>
                Here are various articles, laws, and insights about domestic violence and its effects on individuals and society. 
                Read more to understand your rights and the available support systems.
            </p>
            <div className="articles-list">
                <article>
                    <h2>Understanding Domestic Violence: Causes and Consequences</h2>
                    <p>
                        This article explores the underlying causes of domestic violence and the physical, emotional, 
                        and societal impacts it has on victims.
                    </p>
                    <a href="https://example.com/understanding-domestic-violence" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </article>

                <article>
                    <h2>The Role of Law in Protecting Victims of Domestic Violence</h2>
                    <p>
                        Learn about the legal frameworks that exist to protect victims, and the different laws 
                        and policies designed to address and prevent domestic violence.
                    </p>
                    <a href="https://example.com/domestic-violence-laws" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </article>

                <article>
                    <h2>Domestic Violence and Mental Health: Breaking the Cycle</h2>
                    <p>
                        A discussion on the effects of domestic violence on mental health and strategies for breaking the cycle of abuse.
                    </p>
                    <a href="https://example.com/domestic-violence-mental-health" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </article>

                <article>
                    <h2>Empowering Survivors: Resources and Support Systems</h2>
                    <p>
                        A guide to the resources available for survivors of domestic violence, including counseling, 
                        legal aid, and community support programs.
                    </p>
                    <a href="https://example.com/empowering-survivors" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </article>

                <article>
                    <h2>Domestic Violence Laws Around the World</h2>
                    <p>
                        Explore how different countries tackle domestic violence through their legal systems and what 
                        protections are available for victims worldwide.
                    </p>
                    <a href="https://example.com/global-domestic-violence-laws" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </article>

                <article>
                    <h2>Recognizing the Early Signs of Abuse</h2>
                    <p>
                        Learn about the early warning signs of domestic abuse and how to seek help before the situation escalates.
                    </p>
                    <a href="https://example.com/signs-of-abuse" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </article>
            </div>
        </div>
    );
};

export default Articles;
