import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md border-slate-900/10 shadow-sm py-2' : 'bg-white/80 backdrop-blur-sm border-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo & Identity */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src="/terminal-logo.png.png" alt="Cyber Sphere Logo" className="w-8 h-8 object-cover border border-slate-900 transition-transform group-hover:scale-105" />
                            <div className="flex flex-col">
                                <span className="font-orbitron text-xs sm:text-sm tracking-[0.1em] uppercase font-bold text-slate-900 leading-tight">
                                    <span className="text-red-600">CYBER</span> SPHERE
                                </span>
                                <span className="font-mono-tech text-[8px] sm:text-[9px] text-slate-400 tracking-wider">
                                    POWERED BY <span className="text-blue-600 font-bold group-hover:text-blue-700 transition-colors">SECMENTOR</span>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`font-mono-tech text-xs uppercase tracking-wider px-3.5 py-1.5 transition-all duration-150 border-b-2 ${
                                        isActive 
                                            ? 'text-red-600 border-red-600 font-bold bg-slate-50' 
                                            : 'text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu trigger */}
                    <div className="-mr-2 flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 focus:outline-none transition-all duration-150"
                        >
                            <span className="sr-only">Open menu</span>
                            {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-150 ease-in-out border-b border-slate-200 bg-white absolute w-full overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-slate-100 shadow-md">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`font-mono-tech text-xs uppercase tracking-wider block px-4 py-3 border-l-2 ${
                                    isActive 
                                        ? 'text-red-600 border-red-600 bg-slate-50 font-bold' 
                                        : 'text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
