import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isFadeOut }) => {
    return (
        <div className={`loading-screen ${isFadeOut ? 'fade-out' : ''}`}>
            <div className="loader">
                <div className="eye"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
