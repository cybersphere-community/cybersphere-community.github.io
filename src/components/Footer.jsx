import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-700/50 mt-auto">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <div className="flex items-center mb-5">
                            <img src="/logo.png" alt="Cyber Sphere Logo" loading="lazy" width="140" height="24" className="h-6 w-auto max-w-[140px]" />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering the next generation of cybersecurity experts through community, knowledge, and innovation.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="/events" className="hover:text-sky-400 transition-colors inline-block">
                                    Upcoming Events
                                </a>
                            </li>
                            <li>
                                <a href="/team" className="hover:text-sky-400 transition-colors inline-block">
                                    Join the Team
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-5">Connect With Us</h3>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors p-2 hover:bg-slate-800 rounded-lg">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors p-2 hover:bg-slate-800 rounded-lg">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors p-2 hover:bg-slate-800 rounded-lg">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="mailto:cybersphere.official@outlook.com" className="text-slate-400 hover:text-sky-400 transition-colors p-2 hover:bg-slate-800 rounded-lg">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                        <a href="mailto:cybersphere.official@outlook.com" className="text-slate-400 hover:text-sky-400 transition-colors text-sm flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            cybersphere.official@outlook.com
                        </a>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-700/50 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Cyber Sphere. Open Community. All rights reserved. <span className="opacity-50 text-xs ml-2">v1.1</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
