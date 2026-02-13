import SEO from '../components/SEO';

const News = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SEO
                title="News"
                description="Latest updates, hackathon announcements, and community news from Cyber Sphere."
                keywords="cybersecurity news, hackathons, community updates, events, announcements"
            />
            <h1 className="text-4xl font-bold text-brand-primary mb-8 tracking-tight">Latest News</h1>
            <div className="space-y-6">
                <article className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-card transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full mb-4 border border-green-100 uppercase tracking-wider">Announcement</span>
                    <h2 className="text-2xl font-bold text-brand-primary mb-3">Cyber Sphere Community Website Launch</h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        We are excited to unveil the new digital home for Cyber Sphere. This platform will serve as the central hub for our workshops, articles, and community initiatives.
                        Stay tuned for upcoming CTF announcements and speaker sessions.
                    </p>
                    <a href="https://forms.gle/xsLyYgHzMiYsp8zx6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-accent font-bold hover:text-blue-700 transition-colors">
                        Join the Community <span className="ml-2">→</span>
                    </a>
                </article>
            </div>
        </div>
    );
};
export default News;
