import { Link } from 'react-router-dom';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white cyber-grid">
            {/* Scanline Effect */}
            <div className="scanline"></div>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 sm:py-32 holographic">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="flex justify-center mb-8 pulse-animation">
                            <img
                                src="/logo.png"
                                alt="Cyber Sphere Logo"
                                className="h-32 w-auto sm:h-40 rounded-2xl shadow-[0_0_80px_rgba(0,255,255,0.4)] border-2 border-cyan-500/50"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
                            <span className="gradient-text neon-glow">Cyber</span> <span className="text-white neon-glow">Sphere</span>
                            <span className="block gradient-text mt-2">Community</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-cyan-100/80 mb-8 max-w-3xl mx-auto">
                            A non-profit initiative to promote cybersecurity awareness and build a network for students, researchers, and industry professionals.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://lnkd.in/gJQN6f5J" target="_blank" rel="noopener noreferrer" className="btn-animated-border btn-ripple bg-transparent text-white px-8 py-3 rounded-md font-bold transition-all">
                                <span className="relative z-10">Join Cyber Sphere</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section Preview */}
            <section className="py-16 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="glow-card p-8 rounded-2xl">
                            <h2 className="text-3xl font-bold mb-6 text-white">
                                <span className="gradient-text">Who We Are</span>
                            </h2>
                            <p className="text-cyan-100/70 mb-4">
                                Cyber Sphere is dedicated to bridging the gap between academic knowledge and industry practice in the field of cybersecurity. We organize workshops, CTFs, and talks to empower the next generation of defenders.
                            </p>
                            <p className="text-cyan-100/70">
                                Our mission is to create a safe and collaborative environment where anyone can learn, share, and grow.
                            </p>
                        </div>
                        <div className="glow-card h-64 rounded-2xl flex items-center justify-center holographic">
                            {/* Placeholder for About Image */}
                            <span className="text-cyan-400/50 text-lg">Community Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Event Highlight */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="gradient-text neon-glow">Upcoming Event</span>
                    </h2>
                    <div className="glow-card rounded-2xl p-8 border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <span className="inline-block px-3 py-1 bg-cyan-900/50 text-cyan-300 text-xs font-semibold rounded-full mb-3 border border-cyan-500/30">
                                    Webinar
                                </span>
                                <h3 className="text-2xl font-bold mb-2 text-white glitch-hover">Advanced Penetration Testing Techniques</h3>
                                <p className="text-cyan-100/70 mb-4">Join us for a deep dive into modern pentesting methodologies with industry experts.</p>
                                <div className="flex items-center text-sm text-cyan-300/80 space-x-4">
                                    <span>📅 Oct 25, 2026</span>
                                    <span>⏰ 18:00 IST</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <a href="/events/1" className="inline-block btn-animated-border btn-ripple px-6 py-2 rounded-md font-bold transition-all">
                                    <span className="relative z-10">Register Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <BlogSection />
        </div>
    );
};

export default Home;
