import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const timestamp = new Date().getTime();
                const [devToRes, mediumRes] = await Promise.allSettled([
                    fetch('https://dev.to/api/articles?username=harsh_hak'),
                    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@cybersphere.official?t=${timestamp}`)}`)
                ]);

                let allPosts = [];

                // Process Dev.to posts
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
                        source: 'Dev.to',
                        tags: post.tag_list
                    }));
                    allPosts = [...allPosts, ...formattedDevTo];
                }

                // Process Medium posts
                if (mediumRes.status === 'fulfilled') {
                    const mediumData = await mediumRes.value.json();
                    if (mediumData.status === 'ok' && mediumData.items) {
                        const formattedMedium = mediumData.items.map((post, index) => {
                            // Extract first image from description if thumbnail is missing or empty
                            let image = post.thumbnail;
                            if (!image) {
                                const imgMatch = post.description.match(/<img[^>]+src="([^">]+)"/);
                                if (imgMatch) image = imgMatch[1];
                            }
                            // Cleanup description (remove HTML tags and truncate)
                            const cleanDesc = post.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...';

                            return {
                                id: `medium-${index}`,
                                title: post.title,
                                description: cleanDesc,
                                url: post.link,
                                image: image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
                                date: new Date(post.pubDate),
                                author: post.author,
                                authorImage: '', // Medium doesn't easily give author image in RSS
                                source: 'Medium',
                                tags: post.categories
                            };
                        });
                        allPosts = [...allPosts, ...formattedMedium];
                    }
                }

                // Sort by date (newest first) and take top 6
                allPosts.sort((a, b) => b.date - a.date);
                setBlogs(allPosts.slice(0, 6));
                setLoading(false);

            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to load blog posts.");
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <section className="py-16 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden animate-pulse h-96"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) return null; // Or show error message

    return (
        <section className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/harsh-kanojia-300189178/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] flex items-center text-sm font-medium transition-all hover:scale-105">
                            LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                        <Link to="/articles" className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm font-medium transition-all hover:scale-105">
                            View all <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post) => (
                        <article key={post.id} className="glass-panel rounded-xl overflow-hidden group hover:border-neon-cyan transition-all duration-300 relative">
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            <a href={post.url} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col relative z-10">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000' }}
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className={`px-2 py-1 rounded text-xs font-mono font-bold border ${post.source === 'Dev.to' ? 'bg-black text-white border-white' : 'bg-black text-white border-white'}`}>
                                            {post.source.toUpperCase()}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-neon-cyan text-xs font-mono mb-3 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {post.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-neon-cyan transition-colors font-orbitron">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                                        <div className="flex items-center">
                                            {post.authorImage ? (
                                                <img src={post.authorImage} alt={post.author} className="h-6 w-6 rounded-full mr-2 ring-1 ring-neon-cyan/50" />
                                            ) : (
                                                <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center mr-2 ring-1 ring-slate-600">
                                                    <User className="h-3 w-3 text-slate-400" />
                                                </div>
                                            )}
                                            <span className="text-xs text-slate-300 font-medium">{post.author}</span>
                                        </div>
                                        <span className="text-neon-cyan text-sm font-bold flex items-center group/btn">
                                            ACCESS
                                            <ArrowRight className="ml-1 h-3 w-3 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
