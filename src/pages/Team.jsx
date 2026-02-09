const Team = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-12 text-center">Meet the Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-800 rounded-lg overflow-hidden text-center p-6 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-lg font-medium text-white">Member Name</h3>
                        <p className="text-gray-500 text-sm">Core Team</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Team;
