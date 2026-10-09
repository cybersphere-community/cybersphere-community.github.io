import { Link } from 'react-router-dom';
import BlogSection from '../components/BlogSection';
import SecurityQuotes from '../components/SecurityQuotes';
import { Terminal, Shield, Globe, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { upcomingEvents } from '../data/events';
import CallForSpeakers from '../components/CallForSpeakers';
import PremiumOrbit from '../components/PremiumOrbit';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
    const featuredEvent = upcomingEvents[0];

    const playClickSound = () => {
        const audio = new Audio('/join-click.ogg');
        audio.play().catch(err => console.log("Audio play blocked or failed:", err));
    };

    return (
        <div className="min-h-screen bg-transparent text-slate-900 font-sans relative">
            <SEO
                title="Cybersecurity Community | Ethical Hacking & Security Research Hub"
                description="Join Cyber Sphere - India's leading cybersecurity community for ethical hackers, security researchers, and infosec professionals. Free workshops, CTFs, and hands-on security training."
                keywords="cybersecurity community india, ethical hacking, security research, infosec, penetration testing, bug bounty, ctf competitions, cyber security workshops, security training, hacker community"
            />



            {/* Hero Section */}
            <section className="relative lg:min-h-[80vh] flex lg:items-center py-12 lg:py-20 overflow-hidden bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* Left Content - Precise Typography & CTAs */}
                        <ScrollReveal className="text-left space-y-6" yOffset={25}>
                            <div className="flex flex-wrap items-center gap-2.5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 border border-green-200 bg-green-50/50">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                                    </span>
                                    <span className="font-mono-tech text-green-700 text-[10px] font-bold tracking-wider uppercase">
                                        Community Active
                                    </span>
                                </div>
                                <a
                                    href="https://secmentor.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono-tech tracking-wider text-slate-700 bg-white hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 border border-slate-200 shadow-sm transition-all"
                                >
                                    <span>POWERED BY</span>
                                    <span className="font-bold text-blue-600">SECMENTOR</span>
                                    <span className="text-blue-600 text-[10px] font-bold">↗</span>
                                </a>
                            </div>

                            <div className="space-y-1">
                                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-orbitron tracking-tight leading-none flex flex-col items-start w-full text-slate-900">
                                    <span className="text-red-600 select-none">CYBER</span>
                                    <span className="text-slate-900 select-none">SPHERE</span>
                                </h1>
                                <p className="font-mono-tech text-[10px] sm:text-xs font-bold text-slate-500 tracking-[0.2em] uppercase pt-1">
                                    POWERED BY <span className="text-blue-600 font-bold">SECMENTOR</span>
                                </p>
                            </div>
                            
                            <p className="text-xs sm:text-sm text-slate-500 font-sans font-bold tracking-[0.2em] uppercase border-b border-slate-100 pb-4 max-w-sm">
                                Security Starts With Us
                            </p>

                            <p className="text-base sm:text-lg text-slate-600 max-w-md leading-relaxed">
                                An open collective for security researchers, defenders, and learners. 
                                <span className="font-semibold text-slate-900"> No corporate agenda.</span> Just pure security education, CTF training, and workshops.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-cyber-primary btn-cyber-primary-green group"
                                    onClick={playClickSound}
                                >
                                    <span>JOIN_COMMUNITY</span>
                                    <span className="text-green-400 group-hover:text-white transition-colors font-bold">&gt;&gt;</span>
                                </a>
                                <Link
                                    to="/events"
                                    className="btn-cyber-secondary"
                                >
                                    <span>VIEW_EVENTS</span>
                                </Link>
                            </div>
                        </ScrollReveal>

                        {/* Right Content - Technical Scan Wheel */}
                        <ScrollReveal 
                            className="hidden lg:flex relative justify-center items-center h-full min-h-[400px]" 
                            delay={0.15}
                            yOffset={10}
                        >
                            <PremiumOrbit />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Stats Grid - Schematic Coordinates */}
            <div className="border-y border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {[
                            { label: 'WORKSHOPS & MEETUPS', value: '100+' },
                            { label: 'CTFs COMPLETED', value: '500+' },
                            { label: 'MEMBERS & CONTRIB', value: '5K+' },
                            { label: 'OPEN SOURCE CODE', value: '100%' }
                        ].map((stat, i) => (
                            <ScrollReveal
                                key={i}
                                delay={i * 0.05}
                                className="py-6 px-4 text-center group cursor-default"
                            >
                                <div className="text-2xl font-bold font-mono-tech text-slate-900 mb-1 transition-colors group-hover:text-red-600 duration-150">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] text-slate-500 font-mono-tech font-bold tracking-wider">{stat.label}</div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                            Our Mission
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Terminal, title: 'Hands-on Learning', desc: 'Practical workshops, CVE walkthroughs, and live malware analysis. Learn by attacking and defending real systems.' },
                            { icon: Shield, title: 'CTF & Job Readiness', desc: 'Accelerate career transitions and secure job placements with industry-focused training and cooperative capture-the-flag competitions.' },
                            { icon: Globe, title: 'Open Source Community', desc: 'A community built on collaborative research, shared guides, and tools. Free of vendor locks or sales pitches.' }
                        ].map((item, i) => (
                            <ScrollReveal
                                key={i}
                                delay={i * 0.05}
                                className="cyber-card hover:border-red-600 transition-colors duration-150 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 border border-slate-200 bg-white flex items-center justify-center mb-6">
                                        <item.icon className="w-5 h-5 text-slate-900" />
                                    </div>
                                    <h3 className="text-md font-bold font-mono-tech text-slate-900 uppercase tracking-wider mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Event Section */}
            {featuredEvent && (
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal
                            className="bg-slate-50 border border-slate-200 flex flex-col lg:flex-row p-0 hover:border-red-600 transition-colors duration-150"
                        >
                            <div className="p-8 sm:p-12 lg:w-1/2 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="cyber-pulse-green"></span>
                                    <span className="text-red-600 font-bold text-xs tracking-widest uppercase">
                                        Next Gathering
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                                    {featuredEvent.title}
                                </h3>
                                <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                    {featuredEvent.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8 border-t border-slate-200 pt-6">
                                    <div>
                                        <span className="block text-[10px] text-slate-500 font-mono-tech font-bold tracking-wider mb-1">DATE</span>
                                        <span className="text-slate-900 font-mono-tech text-sm font-semibold">{featuredEvent.date}</span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-slate-500 font-mono-tech font-bold tracking-wider mb-1">TIME</span>
                                        <span className="text-slate-900 font-mono-tech text-sm font-semibold">{featuredEvent.time}</span>
                                    </div>
                                </div>

                                <Link to="/events" className="btn-cyber-primary w-fit flex items-center gap-2">
                                    <span>EVENT_DETAILS</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="lg:w-1/2 bg-slate-100 relative min-h-[300px] border-t lg:border-t-0 lg:border-l border-slate-200">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                                    alt="Event"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            {/* Security Quotes Section */}
            <section className="py-16 bg-white border-b border-slate-200">
                <SecurityQuotes />
            </section>

            {/* Call For Speakers */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CallForSpeakers />
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-20 bg-white">
                <BlogSection />
            </section>
        </div>
    );
};

export default Home;
