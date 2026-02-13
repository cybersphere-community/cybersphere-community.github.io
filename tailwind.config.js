/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                orbitron: ['"Orbitron"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                neon: {
                    cyan: '#00f3ff',
                    purple: '#bd00ff',
                    green: '#0aff00',
                    pink: '#ff0099',
                },
                cyber: {
                    black: '#020205',
                    dark: '#0a0f1e',
                    slate: '#1e293b',
                }
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'spin-slow': 'spin 10s linear infinite',
                'reverse-spin': 'reverse-spin 15s linear infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'reverse-spin': {
                    from: { transform: 'rotate(360deg)' },
                    to: { transform: 'rotate(0deg)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)' },
                    '50%': { opacity: '0.5', boxShadow: '0 0 10px rgba(0, 243, 255, 0.2)' },
                }
            }
        },
    },
    plugins: [],
}
