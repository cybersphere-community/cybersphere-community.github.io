import { Mail, User, MessageSquare, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="relative min-h-screen bg-slate-50 pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
            <SEO
                title="Contact Us | Join Cybersecurity Community"
                description="Get in touch with Cyber Sphere Community. Join our cybersecurity community, collaborate with security researchers, or inquire about workshops and events. We're here to help aspiring ethical hackers."
                keywords="contact cybersecurity community, join hacker community, security collaboration, ethical hacking mentorship, infosec community india"
            />

            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Info */}
                    <div className="text-left space-y-8">
                        <div>
                            <h2 className="text-brand-accent font-bold tracking-wide uppercase text-sm mb-2">Connect With Us</h2>
                            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Let's Start a <br />
                                <span className="text-gradient">Conversation.</span>
                            </h1>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                            Have a question about our events, articles, or just want to say hello?
                            We're here to help and collaborate with fellow security enthusiasts.
                        </p>

                        <div className="flex flex-col space-y-6">
                            <div className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center gap-5">
                                    <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                                        <Mail className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                                        <a href="mailto:cybersphere.official@outlook.com" className="text-lg sm:text-xl text-slate-800 font-bold hover:text-brand-primary transition-colors break-all">
                                            cybersphere.official@outlook.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:pl-10">
                        <div className="glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                            {/* Decorative shiny edge */}
                            <div className="absolute inset-0 border border-white/40 rounded-3xl pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all backdrop-blur-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all backdrop-blur-sm"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
                                    <div className="relative">
                                        <div className="absolute top-4 left-4 pointer-events-none">
                                            <MessageSquare className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all backdrop-blur-sm resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary justify-center text-lg py-4 shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 group"
                                >
                                    <span>Send Message</span>
                                    <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Contact;
