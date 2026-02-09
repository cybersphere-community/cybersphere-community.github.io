import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Cyber Sphere</h3>
                        <p className="text-gray-400 text-sm">
                            Empowering the next generation of cybersecurity experts through community, knowledge, and innovation.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/events" className="hover:text-cyan-400 transition-colors">Upcoming Events</a></li>
                            <li><a href="/team" className="hover:text-cyan-400 transition-colors">Join the Team</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Cyber Sphere. Open Community. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
