const News = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Latest News</h1>
            <div className="space-y-6">
                {[1, 2].map((i) => (
                    <article key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 className="text-2xl font-semibold text-white mb-2">Cyber Sphere Hackathon {2024 + i} Announced</h2>
                        <p className="text-gray-400 mb-4">We are thrilled to announce our annual hackathon focusing on AI safety.</p>
                        <a href="#" className="text-cyan-400 hover:text-cyan-300">Read more →</a>
                    </article>
                ))}
            </div>
        </div>
    );
};
export default News;
