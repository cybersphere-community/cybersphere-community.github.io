import { Calendar, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';

import { upcomingEvents, pastEvents } from '../data/events';

const Events = () => {

    return (
        <div className="min-h-screen text-white pt-20 pb-12 sm:pt-28 sm:pb-20 cyber-grid">
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
                            <div key={event.id} className="card p-6 sm:p-8 bg-slate-800/60">
                                <div className="flex justify-between items-start mb-5">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{event.type}</span>
                                    <span className="text-xs text-slate-400">{event.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {event.title}
                                </h3>
                                <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Events;
