import { Link } from 'react-router-dom';
import BlogSection from '../components/BlogSection';
import SecurityQuotes from '../components/SecurityQuotes';
import { Shield, Users, Calendar, Award, Terminal, Code, Lock, Zap, Cpu, Globe, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { upcomingEvents } from '../data/events';

const Home = () => {
    const featuredEvent = upcomingEvents[0];
    return (
        <div className="min-h-screen text-slate-300 overflow-hidden">
            <SEO
                title="Home"
                description="Welcome to Cyber Sphere Community - The ultimate hub for cybersecurity enthusiasts, students, and professionals to learn, collaborate, and grow."
                keywords="cybersecurity, community, hacking, students, events, ctf, workshops"
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content - Typography & CTA */}
                        <div className="text-left space-y-8 fade-in">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                                </span>
                                <span className="text-neon-cyan text-xs font-mono tracking-widest uppercase">System Online</span>
                            </div>

                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-orbitron leading-tight text-white relative z-20">
                                <span className="block glitch-text text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)]" data-text="CYBER">
                                    CYBER
                                </span>
                                <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                    SPHERE
                                </span>
                                <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                    COMMUNITY
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed border-l-2 border-red-600 pl-6">
                                An open collective for hackers, researchers, and defenders.
                                <span className="text-slate-200 font-medium"> No corporate agenda. Just pure security research, knowledge sharing, and ethical hacking.</span>
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-red-600/10 border border-red-600/50 text-red-500 font-orbitron font-bold tracking-wider uppercase hover:bg-red-600 hover:text-white transition-all duration-300 clip-path-slant"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-red-600/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Join Community
                                </a>
                            </div>
                        </div>

                        {/* Right Content - 3D/Tech Visual */}
                        <div className="relative fade-in hidden lg:block" style={{ animationDelay: '0.2s' }}>
                            <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
                                {/* Outer Glow Ring */}
                                <div className="absolute inset-0 rounded-full border border-neon-cyan/20 shadow-[0_0_60px_rgba(0,243,255,0.1)] animate-pulse"></div>

                                {/* Rotating Orbit Ring */}
                                <div className="absolute inset-4 rounded-full border border-slate-800 border-t-neon-cyan/50 animate-spin-slow"></div>

                                {/* Central Logo Container */}
                                <div className="relative w-64 h-64 bg-black/80 backdrop-blur-xl rounded-full border border-slate-700/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,243,255,0.15)] animate-float">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan/5 to-transparent"></div>
                                    <img
                                        src="/terminal-logo.png.png"
                                        alt="Cyber Sphere"
                                        className="w-40 h-40 object-contain drop-shadow-[0_0_25px_rgba(0,243,255,0.3)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HUD Stats Bar */}
            <div className="border-y border-slate-800 bg-black/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
                        {[
                            { label: 'MEETUPS', value: '100+', color: 'text-red-500' },
                            { label: 'CTFs PLAYED', value: '500+', color: 'text-white' },
                            { label: 'CONTRIBUTORS', value: '5K+', color: 'text-red-500' },
                            { label: 'OPEN SOURCE', value: '100%', color: 'text-white' }
                        ].map((stat, i) => (
                            <div key={i} className="py-6 text-center group cursor-default">
                                <div className={`text-2xl sm:text-3xl font-orbitron font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-500 font-mono tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section - Holographic Cards */}
            <section className="py-20 lg:py-32 relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-white mb-4">
                            <span className="text-red-600">///</span> OUR MISSION
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            We are a community of ethical hackers working together to make the internet safer through open knowledge sharing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Terminal, title: 'Hands-on Learning', desc: 'Practical workshops and live demos. Learn by protecting real systems.', color: 'border-red-600' },
                            { icon: Shield, title: 'Community Defense', desc: 'Collaborate on staying safe online. Share strategies to stop the latest cyber threats.', color: 'border-white' },
                            { icon: Globe, title: 'Global Network', desc: 'Connect with security experts, researchers, and learners from around the world.', color: 'border-red-600' }
                        ].map((item, i) => (
                            <div key={i} className={`glass-panel p-8 rounded-xl border-t-2 ${item.color} hover:bg-white/5 transition-colors group relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <item.icon className="w-24 h-24" />
                                </div>
                                <div className="relative z-10">
                                    <div className="bg-slate-800/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:border-slate-500 transition-colors">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold font-orbitron text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Quotes */}
            <div className="py-12 relative z-10">
                <SecurityQuotes />
            </div>

            {/* Featured Event - Neon Frame */}
            <section className="py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl border border-neon-cyan/30 bg-black/40 backdrop-blur-xl overflow-hidden group">
                        {/* Scanning Line Animation */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_15px_#00f3ff] animate-scan opacity-50"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
                            <div className="p-8 sm:p-12 flex flex-col justify-center">

                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                                    <span className="text-red-600 font-mono text-sm tracking-widest">NEXT GATHERING</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold font-orbitron text-white mb-6">
                                    {featuredEvent ? featuredEvent.title : "Upcoming Event"}
                                </h3>
                                <p className="text-slate-400 mb-8 max-w-md">
                                    {featuredEvent ? featuredEvent.description : "Stay tuned for updates."}
                                </p>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <span className="block text-slate-500 text-xs font-mono mb-1">DATE</span>
                                        <span className="text-white font-mono">{featuredEvent ? featuredEvent.date : "TBA"}</span>
                                    </div>
                                    <div>
                                        <span className="block text-slate-500 text-xs font-mono mb-1">TIME</span>
                                        <span className="text-white font-mono">{featuredEvent ? featuredEvent.time : "TBA"}</span>
                                    </div>
                                </div>

                                <a href="/events" className="inline-flex items-center justify-center px-6 py-3 bg-red-600/20 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all font-mono text-sm uppercase max-w-xs">
                                </a>
                            </div>

                            <div className="relative min-h-[300px] lg:min-h-full bg-slate-900/50">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
                                {/* Tech overlay lines */}
                                <div className="absolute bottom-0 right-0 p-8">
                                    <Shield className="w-24 h-24 text-neon-cyan/20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <div className="relative z-10">
                <BlogSection />
            </div>


        </div>
    );
};

// Helper for the Arrow Icon to avoid cluttering imports if not used elsewhere often
const ArrowRightWrapper = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

export default Home;
