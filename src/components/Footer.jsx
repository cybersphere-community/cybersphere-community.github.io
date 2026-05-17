import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter, Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 transition-colors duration-300 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
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
                                <Link to="/events" className="hover:text-brand-accent transition-colors inline-block">
                                    Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="hover:text-brand-accent transition-colors inline-block">
                                    Join the Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-5">Connect With Us</h3>
                        <div className="flex gap-4 mb-4">
                            <a href="https://github.com/cybersphere-community" className="text-slate-400 hover:text-brand-accent transition-colors p-2 hover:bg-white  rounded-lg border border-transparent hover:border-slate-100">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors p-2 hover:bg-white  rounded-lg border border-transparent hover:border-slate-100">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/company/cyber-sphere-369/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors p-2 hover:bg-white  rounded-lg border border-transparent hover:border-slate-100">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="mailto:cybersphere.official@outlook.com" className="text-slate-400 hover:text-brand-accent transition-colors p-2 hover:bg-white  rounded-lg border border-transparent hover:border-slate-100">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                        <a href="mailto:cybersphere.official@outlook.com" className="text-slate-500 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            cybersphere.official@outlook.com
                        </a>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8">
                    {/* Visitor Counter */}
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200">
                            <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="text-slate-600 text-sm font-semibold">Total Visitors:</span>
                            <img
                                src="https://hits.sh/cybersphere-community.github.io.svg?style=flat&label=&color=2563eb&labelColor=f1f5f9"
                                alt="Visitor Count"
                                className="h-5"
                            />
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-500 text-sm text-center">
                        &copy; {new Date().getFullYear()} Cyber Sphere. Open Community. All rights reserved. <span className="opacity-50 text-xs ml-2">v2.0 Premium</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
