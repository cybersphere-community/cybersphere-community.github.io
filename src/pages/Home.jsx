import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogSection from '../components/BlogSection';
import SecurityQuotes from '../components/SecurityQuotes';
import { Shield, Users, Calendar, Award, Terminal, Code, Lock, Zap, Cpu, Globe, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { upcomingEvents } from '../data/events';
import CallForSpeakers from '../components/CallForSpeakers';

const Home = () => {
    const featuredEvent = upcomingEvents[0];
    return (
        <div className="min-h-screen bg-transparent text-brand-secondary overflow-hidden font-sans">
            <SEO
                title="Cybersecurity Community | Ethical Hacking & Security Research Hub"
                description="Join Cyber Sphere - India's leading cybersecurity community for ethical hackers, security researchers, and infosec professionals. Free workshops, CTFs, and hands-on security training."
                keywords="cybersecurity community india, ethical hacking, security research, infosec, penetration testing, bug bounty, ctf competitions, cyber security workshops, security training, hacker community"
            />

            {/* Hero Section - Premium Interactive 3D */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden bg-transparent">

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
                                <span className="text-slate-900 dark:text-white drop-shadow-sm transition-colors duration-300">SPHERE</span>
                                <span className="text-[10px] sm:text-sm md:text-lg text-slate-500 dark:text-slate-400 font-sans font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase mt-2 sm:mt-4 border-t border-slate-200 dark:border-white/10 pt-2 sm:pt-4 w-full text-center">Security Starts With Us</span>
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                                An open collective for hackers, researchers, and defenders.
                                <span className="font-semibold text-slate-800 dark:text-white"> No corporate agenda.</span> Just pure security research and knowledge sharing.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary shadow-xl shadow-blue-500/20 dark:shadow-blue-500/10 text-lg px-8 py-4"
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
                                <div className="absolute inset-0 rounded-full border border-slate-200 animate-[spin_20s_linear_infinite] dark:border-white/10">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100 dark:bg-white/5 backdrop-blur-md">
                                        <Shield className="w-5 h-5 text-brand-accent" />
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100 dark:bg-white/5 backdrop-blur-md">
                                        <Globe className="w-5 h-5 text-indigo-500" />
                                    </div>
                                </div>

                                {/* Inner Ring - Orbiting Reverse */}
                                <div className="absolute inset-12 sm:inset-16 rounded-full border border-slate-200 animate-[spin_15s_linear_infinite_reverse] dark:border-white/10">
                                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100 dark:bg-white/5 backdrop-blur-md">
                                        <Terminal className="w-4 h-4 text-slate-700" />
                                    </div>
                                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100 dark:bg-white/5 backdrop-blur-md">
                                        <Code className="w-4 h-4 text-pink-500" />
                                    </div>
                                </div>

                                {/* Central Core */}
                                <div className="absolute w-40 h-40 sm:w-56 sm:h-56 bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(37,99,235,0.15)] flex items-center justify-center border border-white z-10 relative group transition-transform duration-500 animate-float hover:shadow-[0_8px_32px_rgba(37,99,235,0.3)]">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100/50 to-transparent"></div>
                                    <div className="absolute inset-2 rounded-full border border-white/60"></div>
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
            <div className="border-y border-slate-200/50 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
                        {[
                            { label: 'MEETUPS', value: '100+' },
                            { label: 'CTFs PLAYED', value: '500+' },
                            { label: 'CONTRIBUTORS', value: '5K+' },
                            { label: 'OPEN SOURCE', value: '100%' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="py-8 text-center group cursor-default"
                            >
                                <div className="text-3xl font-bold text-brand-primary mb-1 transition-transform dark:text-white">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-500 font-bold tracking-widest dark:text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section - Clean Cards */}
            <section className="py-24 bg-brand-light dark:bg-white/5 backdrop-blur-md relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4 dark:text-white">
                            Our Mission
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto dark:text-slate-400">
                            Empowering the next generation of defenders through open collaboration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Terminal, title: 'Hands-on Learning', desc: 'Practical workshops and live demos. Learn by protecting real systems.' },
                            { icon: Shield, title: 'Community Defense', desc: 'Collaborate on staying safe online. Share strategies to stop the latest cyber threats.' },
                            { icon: Globe, title: 'Global Network', desc: 'Connect with security experts, researchers, and learners from around the world.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={`bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 group p-8 ${i === 1 ? 'md:-mt-8' : ''}`}
                            >
                                <div className="w-14 h-14 bg-blue-50 dark:bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                                    <item.icon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Quotes */}
            <div className="py-12 bg-white dark:bg-white/5 backdrop-blur-md relative z-10">
                <SecurityQuotes />
            </div>

            {/* Featured Event - Clean Design */}
            <section className="py-24 bg-transparent relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col lg:flex-row p-0"
                    >
                        <div className="p-10 sm:p-14 lg:w-1/2 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 mb-8">
                                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                                <span className="text-brand-accent font-bold text-sm tracking-widest uppercase">Next Gathering</span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                {featuredEvent ? featuredEvent.title : "Upcoming Event"}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
                                {featuredEvent ? featuredEvent.description : "Stay tuned for updates."}
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-slate-200 dark:border-white/10 pt-8">
                                <div>
                                    <span className="block text-slate-500 dark:text-slate-500 text-xs font-bold tracking-wider mb-2">DATE</span>
                                    <span className="text-slate-900 dark:text-white font-semibold text-lg">{featuredEvent ? featuredEvent.date : "TBA"}</span>
                                </div>
                                <div>
                                    <span className="block text-slate-500 dark:text-slate-500 text-xs font-bold tracking-wider mb-2">TIME</span>
                                    <span className="text-slate-900 dark:text-white font-semibold text-lg">{featuredEvent ? featuredEvent.time : "TBA"}</span>
                                </div>
                            </div>

                            <Link to="/events" className="inline-flex items-center text-brand-accent font-bold hover:gap-4 transition-all gap-2 group">
                                View Full Event Details <ArrowRightWrapper className="w-5 h-5 transition-transform" />
                            </Link>
                        </div>

                        <div className="lg:w-1/2 bg-slate-100 dark:bg-white/5 backdrop-blur-md relative min-h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                                alt="Event"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call For Speakers */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <CallForSpeakers />
            </div>

            {/* Blog Section */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-md relative z-10">
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
