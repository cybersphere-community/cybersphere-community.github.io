import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <div className="flex flex-col items-center leading-none mb-5 content-start place-items-start">
                            <span className="font-orbitron font-bold text-2xl tracking-wider">
                                <span className="text-red-600">CYBER</span>
                                <span className="text-slate-900 ml-1">SPHERE</span>
                            </span>
                            <span className="text-[0.6rem] font-bold tracking-[0.2em] text-slate-400 uppercase text-center w-full mt-1">Security Starts With Us</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Empowering the next generation of cybersecurity experts through community, knowledge, and innovation.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <a href="/events" className="hover:text-brand-accent transition-colors inline-block">
                                    Upcoming Events
                                </a>
                            </li>
                            <li>
                                <a href="/team" className="hover:text-brand-accent transition-colors inline-block">
                                    Join the Team
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-5">Connect With Us</h3>
                        <div className="flex gap-4 mb-4">
                            <a href="https://github.com/cybersphere-community" className="text-slate-400 hover:text-brand-accent transition-colors p-2 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-slate-100">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors p-2 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-slate-100">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors p-2 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-slate-100">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="mailto:cybersphere.official@outlook.com" className="text-slate-400 hover:text-brand-accent transition-colors p-2 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-slate-100">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                        <a href="mailto:cybersphere.official@outlook.com" className="text-slate-500 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            cybersphere.official@outlook.com
                        </a>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Cyber Sphere. Open Community. All rights reserved. <span className="opacity-50 text-xs ml-2">v2.0 Premium</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
