import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, Clock, ArrowRight, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';
import { upcomingEvents, pastEvents } from '../data/events';

const Events = () => {
    const [selectedEvent, setSelectedEvent] = React.useState(null);

    // Schema.org Structured Data for Events
    const eventSchema = upcomingEvents.map(event => ({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": event.title,
        "startDate": event.date,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
            "@type": "VirtualLocation",
            "url": "https://cybersphere-community.github.io/events"
        },
        "description": event.description,
        "organizer": {
            "@type": "Organization",
            "name": "Cyber Sphere Community",
            "url": "https://cybersphere-community.github.io"
        }
    }));

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedEvent]);

    return (
        <div className="min-h-screen bg-transparent text-slate-900 pt-24 pb-12 sm:pt-32 sm:pb-20 font-sans">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(eventSchema)}
                </script>
            </Helmet>
            <SEO
                title="Cybersecurity Events & Workshops | CTF Competitions"
                description="Attend hands-on cybersecurity workshops, capture the flag (CTF) competitions, and security training events. Learn ethical hacking, penetration testing, and infosec skills through practical sessions."
                keywords="cybersecurity events india, ctf competitions, security workshops, ethical hacking events, penetration testing training, infosec meetups, bug bounty workshops, security conferences"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Upcoming Events Section */}
                <section className="mb-20">
                    <div className="flex items-center mb-10 gap-4">
                        <div className="h-10 w-1.5 bg-brand-accent rounded-full"></div>
                        <h1 className="text-3xl sm:text-5xl font-bold text-brand-primary tracking-tight">Upcoming Events</h1>
                    </div>

                    <div className="grid gap-8">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 transition-all duration-300 backdrop-blur-md"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                    <div className="flex-1">
                                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-brand-accent text-sm font-bold rounded-full mb-5 border border-blue-100">
                                            {event.type}
                                        </span>
                                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-brand-primary group-hover:text-brand-accent transition-colors">
                                            {event.title}
                                        </h2>
                                        <p className="text-slate-500 mb-6 max-w-2xl leading-relaxed text-lg">
                                            {event.description}
                                        </p>
                                        <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-500">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-5 w-5 text-brand-accent" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-5 w-5 text-brand-accent" />
                                                {event.time}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-5 w-5 text-brand-accent" />
                                                {event.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="https://forms.gle/xsLyYgHzMiYsp8zx6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:bg-brand-accent transition-all duration-300 transform">
                                            Register Now
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Event Legacy Section */}
                <section>
                    <div className="flex items-center mb-10 gap-4">
                        <div className="h-10 w-1.5 bg-slate-300 rounded-full"></div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-400">Event Legacy</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pastEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full transition-shadow backdrop-blur-md"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">{event.type}</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{event.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-brand-primary leading-tight">
                                    {event.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                                    {event.description}
                                </p>

                                <div className="pt-6 border-t border-slate-100 mt-auto">
                                    <div className="flex flex-wrap gap-y-4 gap-x-8 text-xs text-slate-500 font-bold uppercase tracking-wider mb-6">
                                        {event.speaker && (
                                            <div className="flex items-center gap-3">
                                                {event.speakerImage && (
                                                    <img src={event.speakerImage} alt={event.speaker} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                                                )}
                                                <div>
                                                    <span className="block text-slate-400 mb-0.5 text-[10px]">Speaker</span>
                                                    {event.speaker}
                                                </div>
                                            </div>
                                        )}
                                        {event.organizer && (
                                            <div className="flex items-center gap-3">
                                                {event.organizerImage && (
                                                    <img src={event.organizerImage} alt={event.organizer} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                                                )}
                                                <div>
                                                    <span className="block text-slate-400 mb-0.5 text-[10px]">Organizer</span>
                                                    {event.organizer}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {event.blogContent && (
                                        <button
                                            onClick={() => setSelectedEvent(event)}
                                            className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-brand-primary rounded-xl transition-colors text-sm font-bold flex items-center justify-center gap-2 group border border-slate-200 backdrop-blur-md"
                                        >
                                            Read Recap <ArrowRight className="w-4 h-4 transition-transform text-brand-accent" />
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Full Screen Event Recap Modal */}
            {selectedEvent && createPortal(
                <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                        <div className="flex justify-between items-center mb-12">
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="inline-flex items-center gap-3 text-slate-500 hover:text-brand-accent font-bold transition-colors group"
                            >
                                <div className="back-btn">
                                    <div className="back-btn-box">
                                        <svg className="back-btn-elem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.83 5H6a7 7 0 1 1-1.193 13.897l.471-1.938a5 5 0 1 0 .744-9.959H2.83l2.302 2.302L3.72 10.716 0 7l3.719-3.714L5.131 4.7 2.83 5Z" />
                                        </svg>
                                        <svg className="back-btn-elem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.83 5H6a7 7 0 1 1-1.193 13.897l.471-1.938a5 5 0 1 0 .744-9.959H2.83l2.302 2.302L3.72 10.716 0 7l3.719-3.714L5.131 4.7 2.83 5Z" />
                                        </svg>
                                    </div>
                                </div>
                                Back to Events
                            </button>
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Event Recap</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                            {/* Left Column: Event Details & Metadata */}
                            <div className="lg:col-span-4 space-y-10">
                                {selectedEvent.eventPoster && (
                                    <div className="rounded-2xl overflow-hidden shadow-card border border-slate-100 transform hover:scale-[1.02] transition-transform duration-500">
                                        <img src={selectedEvent.eventPoster} alt="Event Poster" className="w-full h-auto object-cover" />
                                    </div>
                                )}

                                <div className="space-y-8">
                                    {/* Speaker Card */}
                                    {selectedEvent.speaker && (
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center backdrop-blur-md">
                                            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-sm">
                                                {selectedEvent.speakerImage ? (
                                                    <img src={selectedEvent.speakerImage} alt={selectedEvent.speaker} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-brand-accent flex items-center justify-center text-2xl font-bold text-white">
                                                        {selectedEvent.speaker.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <h4 className="text-brand-primary font-bold text-lg mb-1">{selectedEvent.speaker}</h4>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Speaker</p>
                                            {selectedEvent.speakerUrl && (
                                                <a href={selectedEvent.speakerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-brand-accent hover:text-blue-700 font-medium transition-colors">
                                                    <Linkedin className="w-4 h-4" /> Connect
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    {/* Organizer Card */}
                                    {selectedEvent.organizer && (
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center backdrop-blur-md">
                                            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-sm">
                                                {selectedEvent.organizerImage ? (
                                                    <img src={selectedEvent.organizerImage} alt={selectedEvent.organizer} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-2xl font-bold text-white">
                                                        {selectedEvent.organizer.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <h4 className="text-brand-primary font-bold text-lg mb-1">{selectedEvent.organizer}</h4>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Organizer</p>
                                            {selectedEvent.organizerUrl && (
                                                <a href={selectedEvent.organizerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-brand-accent hover:text-blue-700 font-medium transition-colors">
                                                    <Linkedin className="w-4 h-4" /> Connect
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

                            </div>

                            {/* Right Column: Content */}
                            <div className="lg:col-span-8">
                                <div className="mb-10">
                                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-brand-accent text-sm font-bold rounded-full mb-6 border border-blue-100">
                                        {selectedEvent.type} RECAP
                                    </span>
                                    <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight">
                                        {selectedEvent.title}
                                    </h1>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-slate-500 font-medium border-b border-slate-100 pb-8">
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 text-brand-accent" /> {selectedEvent.date}
                                        </span>
                                        {selectedEvent.presentationLink && selectedEvent.presentationLink !== '#' && (
                                            <a
                                                href={selectedEvent.presentationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: 'none' }}
                                                className="docs-btn-link"
                                            >
                                                <button className="docs-btn">
                                                    <div className="docs-folder-container">
                                                        {/* File Back */}
                                                        <svg className="docs-file-back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30">
                                                            <rect x="0" y="4" width="40" height="26" rx="3" ry="3" fill="#1e40af" />
                                                            <rect x="0" y="0" width="18" height="8" rx="3" ry="3" fill="#2563eb" />
                                                        </svg>
                                                        {/* File Page */}
                                                        <svg className="docs-file-page" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 36">
                                                            <rect width="28" height="36" rx="2" ry="2" fill="#eff6ff" />
                                                            <rect x="4" y="8" width="20" height="2" rx="1" fill="#bfdbfe" />
                                                            <rect x="4" y="13" width="20" height="2" rx="1" fill="#bfdbfe" />
                                                            <rect x="4" y="18" width="14" height="2" rx="1" fill="#bfdbfe" />
                                                        </svg>
                                                        {/* File Front */}
                                                        <svg className="docs-file-front" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30">
                                                            <rect x="0" y="0" width="40" height="30" rx="3" ry="3" fill="#2563eb" />
                                                            <rect x="4" y="8" width="32" height="2" rx="1" fill="#93c5fd" />
                                                            <rect x="4" y="14" width="32" height="2" rx="1" fill="#93c5fd" />
                                                            <rect x="4" y="20" width="20" height="2" rx="1" fill="#93c5fd" />
                                                        </svg>
                                                    </div>
                                                    <span className="docs-btn-text">Download Presentation</span>
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none leading-relaxed text-slate-600">
                                    {selectedEvent.blogContent?.split('\n').map((paragraph, idx) => {
                                        const trimmed = paragraph.trim();
                                        if (!trimmed) return null;
                                        if (trimmed.startsWith('###')) {
                                            return <h3 key={idx} className="text-2xl font-bold text-brand-primary mt-10 mb-4">{trimmed.replace('###', '').trim()}</h3>;
                                        }
                                        if (trimmed.startsWith('-')) {
                                            return <li key={idx} className="ml-4 list-disc marker:text-brand-accent pl-2 mb-2">{trimmed.replace('-', '').trim()}</li>
                                        }
                                        if (trimmed.startsWith('**')) {
                                            return <p key={idx} className="font-bold text-brand-primary mb-4">{trimmed.replace(/\*\*/g, '')}</p>;
                                        }
                                        return <p key={idx} className="mb-4">{trimmed}</p>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Events;
