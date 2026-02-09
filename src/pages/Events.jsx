import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
    const upcomingEvents = [
        {
            id: 1,
            title: "Advanced Penetration Testing Techniques",
            date: "Oct 25, 2026",
            time: "18:00 IST",
            location: "Online / Microsoft Teams",
            type: "Webinar",
            description: "Join us for a deep dive into modern pentesting methodologies with industry experts."
        }
    ];

    const pastEvents = [
        {
            id: 101,
            title: "Intro to Bug Bounty Hunting",
            date: "Aug 12, 2025",
            type: "Workshop",
            description: "A comprehensive guide for beginners to start their journey in bug bounty hunting."
        },
        {
            id: 102,
            title: "Cloud Security Fundamentals",
            date: "June 05, 2025",
            type: "Tech Talk",
            description: "Exploring shared responsibility models and securing AWS/Azure environments."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Upcoming Events Section */}
                <section className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="h-8 w-1 bg-cyan-500 mr-4 rounded-full"></div>
                        <h1 className="text-3xl font-bold">Upcoming Events</h1>
                    </div>

                    <div className="grid gap-8">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 shadow-xl group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <div className="flex-1">
                                        <span className="inline-block px-3 py-1 bg-cyan-900/50 text-cyan-300 text-xs font-semibold rounded-full mb-4 border border-cyan-500/30">
                                            {event.type}
                                        </span>
                                        <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                            {event.title}
                                        </h2>
                                        <p className="text-gray-400 mb-6 max-w-2xl">
                                            {event.description}
                                        </p>
                                        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-2 text-cyan-500" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="h-4 w-4 mr-2 text-cyan-500" />
                                                {event.time}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="h-4 w-4 mr-2 text-cyan-500" />
                                                {event.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4">
                                        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300">
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
                    <div className="flex items-center mb-8">
                        <div className="h-8 w-1 bg-gray-500 mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-300">Event Legacy</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pastEvents.map((event) => (
                            <div key={event.id} className="bg-gray-800/40 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">{event.type}</span>
                                    <span className="text-xs text-gray-500">{event.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    {event.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-2">
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
