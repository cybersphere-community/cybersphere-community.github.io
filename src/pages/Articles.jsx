import { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, ExternalLink, Search } from 'lucide-react';

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
        <div className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-white mb-4">Cyber Insights</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Deep dives into cybersecurity, cloud defense, and threat evasion.
                        Aggregation of articles from Dev.to and Medium.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-12 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-gray-800 rounded-xl h-96 animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((post) => (
                            <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-700 hover:border-cyan-500/30">
                                <a href={post.url} target="_blank" rel="noopener noreferrer">
                                    <div className="relative h-48">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                        <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-cyan-400 text-xs px-2 py-1 rounded border border-cyan-500/30">
                                            {post.source}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-gray-400 text-sm mb-3">
                                            <Calendar className="h-4 w-4 mr-1 text-cyan-500" />
                                            {post.date.toLocaleDateString()}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.description}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                            <span className="text-xs text-gray-300 flex items-center">
                                                <User className="h-3 w-3 mr-1" /> {post.author}
                                            </span>
                                            <span className="text-cyan-400 text-sm font-medium flex items-center">
                                                Read More <ArrowRight className="ml-1 h-3 w-3" />
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
