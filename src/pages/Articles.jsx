import { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, ExternalLink, Search } from 'lucide-react';
import SEO from '../components/SEO';

const Articles = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const [devToRes, mediumRes] = await Promise.allSettled([
                    fetch('https://dev.to/api/articles?username=harsh_hak'),
                    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cybersphere.official')
                ]);

                let allPosts = [];

                if (devToRes.status === 'fulfilled') {
                    const devToData = await devToRes.value.json();
                    const formattedDevTo = devToData.map(post => ({
                        id: `devto-${post.id}`,
                        title: post.title,
                        description: post.description,
                        url: post.url,
                        image: post.cover_image || post.social_image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000',
                        date: new Date(post.published_at),
                        author: post.user.name,
                        authorImage: post.user.profile_image,
                        source: 'Dev.to'
                    }));
                    allPosts = [...allPosts, ...formattedDevTo];
                }

                if (mediumRes.status === 'fulfilled') {
                    const mediumData = await mediumRes.value.json();
                    if (mediumData.status === 'ok' && mediumData.items) {
                        const formattedMedium = mediumData.items.map((post, index) => {
                            let image = post.thumbnail;
                            if (!image) {
                                const imgMatch = post.description.match(/<img[^>]+src="([^">]+)"/);
                                if (imgMatch) image = imgMatch[1];
                            }
                            const cleanDesc = post.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...';
                            return {
                                id: `medium-${index}`,
                                title: post.title,
                                description: cleanDesc,
                                url: post.link,
                                image: image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
                                date: new Date(post.pubDate),
                                author: post.author,
                                source: 'Medium'
                            };
                        });
                        allPosts = [...allPosts, ...formattedMedium];
                    }
                }

                allPosts.sort((a, b) => b.date - a.date);
                setBlogs(allPosts);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen text-white pt-28 pb-20 cyber-grid">
            <SEO
                title="Articles"
                description="Read the latest articles and tutorials on cybersecurity, cloud defense, and ethical hacking."
                keywords="cybersecurity articles, tutorials, hacking, cloud security, ethical hacking"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h1 className="text-5xl font-extrabold mb-5 text-white">
                        Cyber Insights
                    </h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Deep dives into cybersecurity, cloud defense, and threat evasion.
                        Aggregation of articles from Dev.to and Medium.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto mb-14 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sky-500" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-white placeholder-slate-400 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="skeleton rounded-xl h-96"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((post) => (
                            <article key={post.id} className="card overflow-hidden group">
                                <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm text-sky-400 text-xs px-3 py-1.5 rounded-lg border border-sky-500/20 font-medium">
                                            {post.source}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-slate-400 text-sm mb-3">
                                            <Calendar className="h-4 w-4 mr-1.5 text-sky-500" />
                                            {post.date.toLocaleDateString()}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-sky-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                                            <span className="text-xs text-slate-300 flex items-center gap-1.5">
                                                <User className="h-3.5 w-3.5" /> {post.author}
                                            </span>
                                            <span className="text-sky-400 text-sm font-semibold flex items-center gap-1">
                                                Read More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Articles;
