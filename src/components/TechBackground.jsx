import { memo } from 'react';
import './TechBackground.css';

const TechBackground = memo(() => {
    return (
        <div className="tech-background-container">
            <div className="corner-accent corner-tl"></div>
            <div className="corner-accent corner-tr"></div>
            <div className="corner-accent corner-bl"></div>
            <div className="corner-accent corner-br"></div>
        </div>
    );
});

export default TechBackground;
