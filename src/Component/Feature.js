import React from 'react';
import './Feature.css';
import like from './../Asset/like.png';
export default function Feature() {
    return (
        <div className="site-section">
            <div className="site-section-inside">

                <div className="section-header">
                    <h2>Key Features</h2>
                </div>

                <div className="feature-box">
                    <img src={like} alt="Easy to Use"></img>
                    <h5>Feature 1</h5>

                    <p>We have shit feature taht you like hope you like it !</p>
                </div>

                <div className="feature-box">
                    <img src={like} alt="Easy to Use"></img>
                    <h5>Feature 2</h5>
                    <p>We have shit feature taht you like hope you like it !</p>
                </div>

                <div className="feature-box">
                    <img src={like} alt="Easy to Use"></img>
                    <h5>Feature 3</h5>
                    <p>We have shit feature taht you like hope you like it !</p>
                </div>

            </div>
        </div>

    );
}
