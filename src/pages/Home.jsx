import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogSection from '../components/BlogSection';
import SecurityQuotes from '../components/SecurityQuotes';
import { Shield, Users, Calendar, Award, Terminal, Code, Lock, Zap, Cpu, Globe, Activity } from 'lucide-react';
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
                        <ScrollReveal className="text-left space-y-8" yOffset={40}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">

                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
                                </span>
                                <span className="text-brand-accent text-xs font-bold tracking-widest uppercase">Community Active</span>
                            </div>

                            <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl font-bold font-orbitron tracking-tight leading-none flex flex-col items-start gap-0">
                                <span className="hero-cyber-text" data-text="CYBER">CYBER</span>
                                <span className="hero-sphere-text" data-text="SPHERE">SPHERE</span>
                                <span className="text-[10px] sm:text-sm md:text-lg text-slate-500 font-sans font-bold tracking-[0.2em] sm:tracking-[0.5em] uppercase mt-2 sm:mt-4 border-t border-slate-200 pt-2 sm:pt-4 w-full text-center">Security Starts With Us</span>
                            </h1>

                            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                                An open collective for hackers, researchers, and defenders.
                                <span className="font-semibold text-slate-800"> No corporate agenda.</span> Just pure security research and knowledge sharing.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="jc-btn-wrapper">
                                    <a
                                        href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="jc-btn"
                                        onClick={playClickSound}
                                    >
                                        <img src="/terminal-logo.png.png" alt="Cyber Sphere" className="jc-btn-logo" />
                                        <span className="jc-txt-wrapper">
                                            <span className="jc-txt-1">
                                                {'Join Community'.split('').map((char, i) => (
                                                    char === ' '
                                                        ? <span key={i} className="jc-btn-letter"> </span>
                                                        : <span key={i} className="jc-btn-letter">{char}</span>
                                                ))}
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right Content - Modern Visual */}
                        <ScrollReveal 
                            className="relative flex justify-center items-center h-full min-h-[400px]" 
                            delay={0.2}
                            yOffset={20}
                        >
                            <PremiumOrbit />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Stats Bar - Minimalist */}
            <div className="border-y border-slate-200/50 bg-white backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-slate-100">
                        {[
                            { label: 'MEETUPS', value: '100+' },
                            { label: 'CTFs PLAYED', value: '500+' },
                            { label: 'CONTRIBUTORS', value: '5K+' },
                            { label: 'OPEN SOURCE', value: '100%' }
                        ].map((stat, i) => (
                            <ScrollReveal
                                key={i}
                                delay={i * 0.1}
                                className="py-8 text-center group cursor-default"
                            >
                                <div className="text-3xl font-bold text-brand-primary mb-1 transition-transform group-hover:scale-110 duration-300">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-500 font-bold tracking-widest">{stat.label}</div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section - Clean Cards */}
            <section className="py-24 bg-brand-light backdrop-blur-md relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
                            Our Mission
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Empowering the next generation of defenders through open collaboration.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Terminal, title: 'Hands-on Learning', desc: 'Practical workshops and live demos. Learn by protecting real systems.' },
                            { icon: Shield, title: 'Community Defense', desc: 'Collaborate on staying safe online. Share strategies to stop the latest cyber threats.' },
                            { icon: Globe, title: 'Global Network', desc: 'Connect with security experts, researchers, and learners from around the world.' }
                        ].map((item, i) => (
                            <ScrollReveal
                                key={i}
                                delay={i * 0.1}
                                className={`bg-white backdrop-blur-md rounded-2xl border border-slate-200 group p-8 ${i === 1 ? 'md:-mt-8' : ''} hover:border-brand-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl`}
                            >
                                <div className="w-14 h-14 bg-blue-50 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                                    <item.icon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Quotes */}
            <div className="py-12 bg-white backdrop-blur-md relative z-10">
                <SecurityQuotes />
            </div>

            {/* Featured Event - Clean Design */}
            <section className="py-24 bg-transparent relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal
                        className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row p-0 hover:border-brand-accent/30 transition-all duration-300 shadow-lg"
                    >
                        <div className="p-10 sm:p-14 lg:w-1/2 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 mb-8">
                                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                                <span className="text-brand-accent font-bold text-sm tracking-widest uppercase">Next Gathering</span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                {featuredEvent ? featuredEvent.title : "Upcoming Event"}
                            </h3>
                            <p className="text-slate-600 mb-10 text-lg">
                                {featuredEvent ? featuredEvent.description : "Stay tuned for updates."}
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-slate-200 pt-8">
                                <div>
                                    <span className="block text-slate-500 text-xs font-bold tracking-wider mb-2">DATE</span>
                                    <span className="text-slate-900 font-semibold text-lg">{featuredEvent ? featuredEvent.date : "TBA"}</span>
                                </div>
                                <div>
                                    <span className="block text-slate-500 text-xs font-bold tracking-wider mb-2">TIME</span>
                                    <span className="text-slate-900 font-semibold text-lg">{featuredEvent ? featuredEvent.time : "TBA"}</span>
                                </div>
                            </div>

                            <Link to="/events" className="inline-flex items-center text-brand-accent font-bold hover:gap-4 transition-all gap-2 group">
                                View Full Event Details <ArrowRightWrapper className="w-5 h-5 transition-transform" />
                            </Link>
                        </div>

                        <div className="lg:w-1/2 bg-slate-100 backdrop-blur-md relative min-h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                                alt="Event"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Call For Speakers */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <CallForSpeakers />
            </div>

            {/* Blog Section */}
            <div className="bg-white backdrop-blur-md relative z-10">
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
