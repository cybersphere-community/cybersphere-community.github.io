import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, ExternalLink, Search } from 'lucide-react';
import SEO from '../components/SEO';

const Articles = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Schema for Articles Collection
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Cyber Insights - Cybersecurity Articles",
        "description": "Deep dives into cybersecurity, cloud defense, and threat evasion.",
        "url": "https://cybersphere-community.github.io/articles",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": blogs.map((blog, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": blog.url,
                "name": blog.title
            }))
        }
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const timestamp = new Date().getTime();
                const [devToRes, mediumRes] = await Promise.allSettled([
                    fetch('https://dev.to/api/articles?username=harsh_hak'),
                    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@cybersphere.official?t=${timestamp}`)}`)
                ]);

                let allPosts = [];

                if (devToRes.status === 'fulfilled') {
                    if (!devToRes.value.ok) console.error("Dev.to API Error:", devToRes.value.status, devToRes.value.statusText);
                    const devToData = await devToRes.value.json();
                    if (Array.isArray(devToData)) {
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
                } else {
                    console.error("Dev.to Request Failed:", devToRes.reason);
                }

                if (mediumRes.status === 'fulfilled') {
                    if (!mediumRes.value.ok) console.error("Medium RSS Error:", mediumRes.value.status, mediumRes.value.statusText);
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
                    } else {
                        console.warn("Medium RSS returned invalid status:", mediumData);
                    }
                } else {
                    console.error("Medium RSS Request Failed:", mediumRes.reason);
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
        <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-12 sm:pt-32 sm:pb-20 font-sans">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(collectionSchema)}
                </script>
            </Helmet>
            <SEO
                title="Cybersecurity Articles & Tutorials | Security Research Blog"
                description="Read in-depth cybersecurity articles, ethical hacking tutorials, penetration testing guides, and latest security research. Expert insights on vulnerabilities, exploits, and defense strategies."
                keywords="cybersecurity articles, ethical hacking tutorials, penetration testing guides, security research, vulnerability analysis, exploit development, infosec blog, malware analysis, web security, network security"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-brand-primary tracking-tight">
                        Cyber Insights
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                        Deep dives into cybersecurity, cloud defense, and threat evasion.
                        Aggregation of articles from Dev.to and Medium.
                    </p>
                    <a href="https://www.linkedin.com/in/harsh-kanojia-300189178/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006097] text-white rounded-xl shadow-md hover:shadow-lg transition-all font-bold">
                        <ExternalLink className="h-4 w-4" />
                        Connect on LinkedIn
                    </a>
                </div>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto mb-16 relative">
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-slate-900 placeholder-slate-400 shadow-sm transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="animate-pulse bg-slate-200 rounded-2xl h-96"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((post) => (
                            <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-primary text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                                            {post.source}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center text-slate-500 text-sm font-medium mb-3 gap-2">
                                            <Calendar className="h-4 w-4 text-brand-accent" />
                                            {post.date.toLocaleDateString()}
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-primary mb-3 line-clamp-2 group-hover:text-brand-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                                            <span className="text-xs text-slate-500 font-bold flex items-center gap-2">
                                                <User className="h-3.5 w-3.5" /> {post.author}
                                            </span>
                                            <span className="text-brand-accent text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read More <ArrowRight className="h-4 w-4" />
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
