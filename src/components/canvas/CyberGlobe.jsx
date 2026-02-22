import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';

const CyberGlobe = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }} style={{ pointerEvents: 'none' }} dpr={[1, 1.5]}>
                <fog attach="fog" args={[isDark ? '#020617' : '#f8fafc', 5, 30]} />
            </Canvas>
        </div>
    );
};

export default CyberGlobe;
