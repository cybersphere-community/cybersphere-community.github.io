import { Link } from 'react-router-dom';
import BlogSection from '../components/BlogSection';
import SecurityQuotes from '../components/SecurityQuotes';
import { Shield, Users, Calendar, Award, Terminal, Code, Lock, Zap, Cpu, Globe, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { upcomingEvents } from '../data/events';
import CallForSpeakers from '../components/CallForSpeakers';

const Home = () => {
    const featuredEvent = upcomingEvents[0];
    return (
        <div className="min-h-screen bg-brand-light text-brand-secondary overflow-hidden font-sans">
            <SEO
                title="Cybersecurity Community | Ethical Hacking & Security Research Hub"
                description="Join Cyber Sphere - India's leading cybersecurity community for ethical hackers, security researchers, and infosec professionals. Free workshops, CTFs, and hands-on security training."
                keywords="cybersecurity community india, ethical hacking, security research, infosec, penetration testing, bug bounty, ctf competitions, cyber security workshops, security training, hacker community"
            />

            {/* Hero Section - Premium Light */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden bg-white">
                {/* Subtle Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content - Typography & CTA */}
                        <div className="text-left space-y-8 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
                                </span>
                                <span className="text-brand-accent text-xs font-bold tracking-widest uppercase">Community Active</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-orbitron tracking-tight leading-none flex flex-col items-start gap-0">
                                <span className="text-red-600 drop-shadow-sm">CYBER</span>
                                <span className="text-slate-900 drop-shadow-sm">SPHERE</span>
                                <span className="text-[10px] sm:text-sm md:text-lg text-slate-500 font-sans font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase mt-2 sm:mt-4 border-t border-slate-200 pt-2 sm:pt-4 w-full text-center">Security Starts With Us</span>
                            </h1>

                            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                                An open collective for hackers, researchers, and defenders.
                                <span className="font-semibold text-slate-800"> No corporate agenda.</span> Just pure security research and knowledge sharing.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary shadow-xl shadow-blue-500/20 hover:shadow-blue-600/30 text-lg px-8 py-4"
                                >
                                    Join Community <Users className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Modern Visual */}
                        <div className="relative animate-fade-in flex justify-center items-center h-full min-h-[400px]" style={{ animationDelay: '0.2s' }}>
                            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
                                {/* Outer Glow */}
                                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                                {/* Outer Ring - Orbiting */}
                                <div className="absolute inset-0 rounded-full border border-slate-200 animate-[spin_20s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                                        <Shield className="w-5 h-5 text-brand-accent" />
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                                        <Globe className="w-5 h-5 text-indigo-500" />
                                    </div>
                                </div>

                                {/* Inner Ring - Orbiting Reverse */}
                                <div className="absolute inset-12 sm:inset-16 rounded-full border border-slate-200 animate-[spin_15s_linear_infinite_reverse]">
                                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                                        <Terminal className="w-4 h-4 text-slate-700" />
                                    </div>
                                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                                        <Code className="w-4 h-4 text-pink-500" />
                                    </div>
                                </div>

                                {/* Central Core */}
                                <div className="absolute w-40 h-40 sm:w-56 sm:h-56 bg-white rounded-full shadow-[0_0_50px_rgba(37,99,235,0.2)] flex items-center justify-center border border-slate-50 z-10 relative group hover:scale-105 transition-transform duration-500">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-50 to-transparent opacity-50"></div>
                                    <div className="absolute inset-2 rounded-full border border-slate-100"></div>
                                    <img
                                        src="/terminal-logo.png.png"
                                        alt="Cyber Sphere Community Logo - Cybersecurity and Ethical Hacking Hub"
                                        loading="lazy"
                                        className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full relative z-20 drop-shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar - Minimalist */}
            <div className="border-y border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
                        {[
                            { label: 'MEETUPS', value: '100+' },
                            { label: 'CTFs PLAYED', value: '500+' },
                            { label: 'CONTRIBUTORS', value: '5K+' },
                            { label: 'OPEN SOURCE', value: '100%' }
                        ].map((stat, i) => (
                            <div key={i} className="py-8 text-center group cursor-default">
                                <div className="text-3xl font-bold text-brand-primary mb-1 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-500 font-bold tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section - Clean Cards */}
            <section className="py-24 bg-brand-light relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
                            Our Mission
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Empowering the next generation of defenders through open collaboration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Terminal, title: 'Hands-on Learning', desc: 'Practical workshops and live demos. Learn by protecting real systems.' },
                            { icon: Shield, title: 'Community Defense', desc: 'Collaborate on staying safe online. Share strategies to stop the latest cyber threats.' },
                            { icon: Globe, title: 'Global Network', desc: 'Connect with security experts, researchers, and learners from around the world.' }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                                    <item.icon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Quotes */}
            <div className="py-12 bg-white">
                <SecurityQuotes />
            </div>

            {/* Featured Event - Clean Design */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
                        <div className="p-10 sm:p-14 lg:w-1/2 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 mb-8">
                                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                                <span className="text-brand-accent font-bold text-sm tracking-widest uppercase">Next Gathering</span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-6 leading-tight">
                                {featuredEvent ? featuredEvent.title : "Upcoming Event"}
                            </h3>
                            <p className="text-slate-500 mb-10 text-lg">
                                {featuredEvent ? featuredEvent.description : "Stay tuned for updates."}
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-slate-100 pt-8">
                                <div>
                                    <span className="block text-slate-400 text-xs font-bold tracking-wider mb-2">DATE</span>
                                    <span className="text-brand-primary font-semibold text-lg">{featuredEvent ? featuredEvent.date : "TBA"}</span>
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-xs font-bold tracking-wider mb-2">TIME</span>
                                    <span className="text-brand-primary font-semibold text-lg">{featuredEvent ? featuredEvent.time : "TBA"}</span>
                                </div>
                            </div>

                            <Link to="/events" className="inline-flex items-center text-brand-accent font-bold hover:gap-4 transition-all gap-2 group">
                                View Full Event Details <ArrowRightWrapper className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="lg:w-1/2 bg-slate-100 relative min-h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                                alt="Event"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call For Speakers */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <CallForSpeakers />
            </div>

            {/* Blog Section */}
            <div className="bg-white">
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
