const Events = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder for Event Cards */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Cyber Talk #{i}</h3>
                        <p className="text-gray-400 mb-4">An insightful session on emerging cyber threats.</p>
                        <button className="text-white bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-700">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Events;
