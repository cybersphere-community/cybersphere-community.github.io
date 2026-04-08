import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';


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
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center text-brand-primary">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse h-96 shadow-sm border border-slate-100"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) return null; // Or show error message

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold text-brand-primary mb-2 tracking-tight">Latest Articles</h2>
                        <p className="text-slate-500">Insights from our team of researchers and developers.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/harsh-kanojia-300189178/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077b5] flex items-center text-sm font-bold transition-all ">
                            LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                        <Link to="/articles" className="text-brand-accent hover:text-blue-700 flex items-center text-sm font-bold transition-all ">
                            View all <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <ScrollReveal 
                            key={post.id} 
                            delay={index % 3 * 0.1}
                            yOffset={40}
                            className="flex flex-col h-full"
                        >
                            <article className="bg-white rounded-2xl overflow-hidden group shadow-sm border border-slate-200 transition-all duration-300 relative flex flex-col h-full hover:shadow-xl hover:border-brand-accent/30">
                                <a href={post.url} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col relative z-10">
                                    <div className="relative h-52 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60"></div>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000' }}
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold bg-white/90 backdrop-blur-sm text-brand-primary shadow-sm border border-slate-100`}>
                                                {post.source.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center text-brand-accent text-sm font-medium mb-3 gap-2">
                                            <Calendar className="h-4 w-4" />
                                            {post.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>

                                        <h3 className="text-xl font-bold text-brand-primary mb-3 line-clamp-2 group-hover:text-brand-accent transition-colors leading-tight">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
                                            <div className="flex items-center">
                                                {post.authorImage ? (
                                                    <img src={post.authorImage} alt={post.author} className="h-8 w-8 rounded-full mr-3 border-2 border-slate-100" />
                                                ) : (
                                                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 text-slate-400">
                                                        <User className="h-4 w-4" />
                                                    </div>
                                                )}
                                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">{post.author}</span>
                                            </div>
                                            <span className="text-brand-accent text-sm font-bold flex items-center group/btn">
                                                Read
                                                <ArrowRight className="ml-1 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
