import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
    children, 
    delay = 0, 
    duration = 0.6, 
    yOffset = 30, 
    staggerChildren = 0,
    className = "" 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: duration, 
                delay: delay,
                staggerChildren: staggerChildren,
                ease: [0.21, 0.47, 0.32, 0.98] // Premium ease-out
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
