const Speakers = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-12 text-center">Our Speakers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-800 rounded-lg overflow-hidden text-center p-6">
                        <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-medium text-white">Speaker Name</h3>
                        <p className="text-cyan-400 mb-4">Security Researcher</p>
                        <p className="text-gray-400 text-sm">Expert in penetration testing and cloud security.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Speakers;
