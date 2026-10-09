import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 relative z-10 text-xs text-slate-500 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-200 pb-12">
                    {/* Brand column */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <img src="/terminal-logo.png.png" alt="Cyber Sphere Logo" className="w-6 h-6 object-cover border border-slate-900" />
                            <div className="flex flex-col">
                                <span className="font-bold text-slate-900 tracking-wider font-orbitron text-sm leading-tight">
                                    <span className="text-red-600">CYBER</span> SPHERE
                                </span>
                                <a
                                    href="https://secmentor.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono-tech text-[10px] text-slate-500 hover:text-blue-600 tracking-wider transition-colors inline-flex items-center gap-1"
                                >
                                    Powered by <span className="font-bold text-blue-600 underline underline-offset-2">SecMentor</span> ↗
                                </a>
                            </div>
                        </div>
                        <p className="text-slate-500 leading-relaxed max-w-sm">
                            Empowering the next generation of security researchers through hands-on education, collaborative CTFs, and open community sharing.
                        </p>
                    </div>

                    {/* Navigation links */}
                    <div>
                        <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-4 font-mono-tech">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/events" className="hover:text-red-600 transition-colors">
                                    Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="hover:text-red-600 transition-colors">
                                    Community Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/call-for-speakers" className="hover:text-red-600 transition-colors">
                                    Call for Speakers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social connection */}
                    <div>
                        <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-4 font-mono-tech">Connect With Us</h3>
                        <div className="flex gap-2 mb-4">
                            <a href="https://github.com/cybersphere-community" target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-slate-400 transition-all">
                                <Github className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-slate-400 transition-all">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="https://www.linkedin.com/company/cyber-sphere-369/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-slate-400 transition-all">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="https://www.youtube.com/@CyberSphere-x2e" target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-slate-400 transition-all">
                                <Youtube className="h-4 w-4" />
                            </a>
                        </div>
                        <a href="mailto:cybersphere.official@outlook.com" className="hover:text-red-600 transition-colors flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            cybersphere.official@outlook.com
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Visitor counter */}
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white">
                        <span className="cyber-pulse-green"></span>
                        <span className="text-[10px] text-slate-600 uppercase tracking-wider font-bold font-mono-tech">Total Visitors:</span>
                        <img
                            src="https://hits.sh/cybersphere-community.github.io.svg?style=flat-square&label=&color=16a34a&labelColor=ffffff"
                            alt="Visitor Count"
                            className="h-4"
                        />
                    </div>

                    {/* Copyright statement */}
                    <p className="text-[10px] text-slate-400 text-center sm:text-right font-mono-tech">
                        &copy; {new Date().getFullYear()} CYBER SPHERE &bull; POWERED BY <a href="https://secmentor.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2 font-bold">SECMENTOR</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
