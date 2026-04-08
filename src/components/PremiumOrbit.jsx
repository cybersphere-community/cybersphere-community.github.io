import React from 'react';
import './PremiumOrbit.css';

const PremiumOrbit = () => {
    return (
        <div className="premium-orbit-container">
            <div className="loader-wrapper">
                <div className="loader-logo-container">
                    <img 
                        src="/terminal-logo.png.png" 
                        alt="Cyber Sphere Logo" 
                        className="loader-logo" 
                    />
                </div>
                <div className="loader-circle"></div>
            </div>
        </div>
    );
};

export default PremiumOrbit;
