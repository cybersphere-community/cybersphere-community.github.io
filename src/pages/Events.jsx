import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';

import { upcomingEvents, pastEvents } from '../data/events';

const Events = () => {

    const [selectedEvent, setSelectedEvent] = React.useState(null);

    return (
        <div className="min-h-screen text-white pt-20 pb-12 sm:pt-28 sm:pb-20 cyber-grid relative">
            <SEO
                title="Events & Webinars"
                description="Explore upcoming and past cybersecurity events, webinars, and workshops hosted by Cyber Sphere."
                keywords="cybersecurity events, webinars, workshops, pentesting, cloud security"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Upcoming Events Section */}
                <section className="mb-12 sm:mb-20">
                    <div className="flex items-center mb-10">
                        <div className="h-10 w-1.5 bg-gradient-to-b from-sky-500 to-blue-500 mr-4 rounded-full glow"></div>
                        <h1 className="text-2xl sm:text-4xl font-bold text-white">Upcoming Events</h1>
                    </div>

                    <div className="grid gap-8">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="card p-6 sm:p-10 glow-hover">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                    <div className="flex-1">
                                        <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 text-sm font-semibold rounded-full mb-5 border border-sky-500/20">
                                            {event.type}
                                        </span>
                                        <h2 className="text-xl sm:text-3xl font-bold mb-4 text-white">
                                            {event.title}
                                        </h2>
                                        <p className="text-slate-300 mb-6 max-w-2xl leading-relaxed">
                                            {event.description}
                                        </p>
                                        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                                            <div className="flex items-center">
                                                <Calendar className="h-5 w-5 mr-2 text-sky-500" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="h-5 w-5 mr-2 text-sky-500" />
                                                {event.time}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="h-5 w-5 mr-2 text-sky-500" />
                                                {event.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn-primary whitespace-nowrap">
                                            Register Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Event Legacy Section */}
                <section>
                    <div className="flex items-center mb-10">
                        <div className="h-10 w-1.5 bg-gradient-to-b from-slate-500 to-slate-700 mr-4 rounded-full"></div>
                        <h2 className="text-2xl sm:text-4xl font-bold text-slate-300">Event Legacy</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pastEvents.map((event) => (
                            <div key={event.id} className="card p-6 sm:p-8 bg-slate-800/60 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-5">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{event.type}</span>
                                    <span className="text-xs text-slate-400">{event.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {event.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                                    {event.description}
                                </p>

                                <div className="pt-4 border-t border-slate-700/50 mt-auto">
                                    {(event.speaker || event.organizer) && (
                                        <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-mono mb-4">
                                            {event.speaker && (
                                                <div>
                                                    SPEAKER: <span className="text-neon-cyan ml-1">{event.speaker}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {event.blogContent && (
                                        <button
                                            onClick={() => setSelectedEvent(event)}
                                            className="w-full py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded transition-colors text-sm font-medium flex items-center justify-center gap-2 group"
                                        >
                                            Read Recap <span className="text-neon-cyan group-hover:translate-x-1 transition-transform">→</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Event Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                        <button
                            onClick={() => setSelectedEvent(null)}
                            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Left Column: Media */}
                            <div className="w-full md:w-1/3 bg-slate-800 p-6 md:p-8 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-slate-700">
                                {selectedEvent.eventPoster && (
                                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-600/50">
                                        <img src={selectedEvent.eventPoster} alt="Event Poster" className="w-full h-auto object-cover" />
                                    </div>
                                )}

                                {selectedEvent.speaker && (
                                    <div className="text-center">
                                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                                            {selectedEvent.speakerImage ? (
                                                <img src={selectedEvent.speakerImage} alt={selectedEvent.speaker} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-slate-700 flex items-center justify-center text-3xl font-bold text-slate-500">
                                                    {selectedEvent.speaker.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <h4 className="text-white font-bold text-lg">{selectedEvent.speaker}</h4>
                                        <a href={selectedEvent.speakerUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-neon-cyan transition-colors">
                                            Connect on LinkedIn
                                        </a>
                                    </div>
                                )}

                                {selectedEvent.presentationLink && selectedEvent.presentationLink !== '#' && (
                                    <a
                                        href={selectedEvent.presentationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary text-center justify-center w-full"
                                    >
                                        View Presentation
                                    </a>
                                )}
                            </div>

                            {/* Right Column: Content */}
                            <div className="w-full md:w-2/3 p-6 md:p-8">
                                <span className="inline-block px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-bold rounded-full mb-4 border border-neon-cyan/20">
                                    {selectedEvent.type} RECAP
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold font-orbitron text-white mb-2 leading-tight">
                                    {selectedEvent.title}
                                </h2>
                                <p className="text-slate-400 mb-8 flex items-center gap-2 text-sm">
                                    <Calendar className="w-4 h-4" /> {selectedEvent.date}
                                </p>

                                <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-4">
                                    {selectedEvent.blogContent?.split('\n').map((paragraph, idx) => {
                                        const trimmed = paragraph.trim();
                                        if (!trimmed) return null;
                                        if (trimmed.startsWith('###')) {
                                            return <h3 key={idx} className="text-xl font-bold text-white mt-6 mb-3">{trimmed.replace('###', '').trim()}</h3>;
                                        }
                                        if (trimmed.startsWith('-')) {
                                            return <li key={idx} className="ml-4 list-disc">{trimmed.replace('-', '').trim()}</li>
                                        }
                                        return <p key={idx}>{trimmed}</p>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
