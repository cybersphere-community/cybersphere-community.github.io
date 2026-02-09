import { Link } from 'react-router-dom';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 sm:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <img
                                src="/logo.png"
                                alt="Cyber Sphere Logo"
                                className="h-32 w-auto sm:h-40 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.2)] border border-gray-800"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
                            <span className="text-red-600">Cyber</span> <span className="text-white">Sphere</span>
                            <span className="block text-white mt-2">Community</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            A non-profit initiative to promote cybersecurity awareness and build a network for students, researchers, and industry professionals.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://lnkd.in/gJQN6f5J" target="_blank" rel="noopener noreferrer" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                                Join Cyber Sphere
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section Preview */}
            <section className="py-16 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">Who We Are</h2>
                            <p className="text-gray-300 mb-4">
                                Cyber Sphere is dedicated to bridging the gap between academic knowledge and industry practice in the field of cybersecurity. We organize workshops, CTFs, and talks to empower the next generation of defenders.
                            </p>
                            <p className="text-gray-300">
                                Our mission is to create a safe and collaborative environment where anyone can learn, share, and grow.
                            </p>
                        </div>
                        <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                            {/* Placeholder for About Image */}
                            <span className="text-gray-500">Community Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Event Highlight */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Upcoming Event</h2>
                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-colors">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <span className="inline-block px-3 py-1 bg-cyan-900 text-cyan-300 text-xs font-semibold rounded-full mb-3">
                                    Webinar
                                </span>
                                <h3 className="text-2xl font-bold mb-2 text-white">Advanced Penetration Testing Techniques</h3>
                                <p className="text-gray-400 mb-4">Join us for a deep dive into modern pentesting methodologies with industry experts.</p>
                                <div className="flex items-center text-sm text-gray-400 space-x-4">
                                    <span>📅 Oct 25, 2026</span>
                                    <span>⏰ 18:00 IST</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <a href="/events/1" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
                                    Register Now
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
