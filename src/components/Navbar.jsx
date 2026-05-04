import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
        { name: 'Articles', href: '/articles' },
        { name: 'Speakers', href: '/speakers' },
        { name: 'Team', href: '/team' },
        { name: 'Call for Speakers', href: '/call-for-speakers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-1' : 'bg-transparent py-3'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center group gap-3">
                            <img src="/terminal-logo.png.png" alt="Cyber Sphere Logo" className="w-10 h-10 object-cover rounded-full shadow-sm border border-slate-200/50 transition-transform" />
                            <span className="font-orbitron font-bold text-lg tracking-wider hidden sm:block text-slate-900 transition-colors duration-300">
                                <span className="text-red-600">CYBER</span>
                                <span className="ml-1">SPHERE</span>
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-baseline gap-1 bg-white/50 backdrop-blur-md px-2 py-1 rounded-2xl border border-slate-200/50 shadow-sm transition-colors duration-300">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-slate-600 hover:text-brand-accent hover:bg-slate-100/80 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden items-center gap-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-slate-600 hover:text-brand-accent hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out absolute w-full overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/50 px-2 pt-2 pb-3 space-y-1 sm:px-3 mx-4 mt-2 rounded-2xl border shadow-xl">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-slate-600 hover:text-brand-accent hover:bg-slate-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all border border-transparent hover:border-slate-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
