import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';



const quotes = [
    { text: "Security is not a product, but a process.", author: "Bruce Schneier" },
    { text: "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.", author: "Gene Spafford" },
    { text: "Passwords are like underwear: don't let people see it, change it very often, and you shouldn't share it with strangers.", author: "Chris Pirillo" },
    { text: "If you think technology can solve your security problems, then you don't understand the problems and you don't understand the technology.", author: "Bruce Schneier" },
    { text: "Amateurs hack systems, professionals hack people.", author: "Bruce Schneier" },
    { text: "There are only two types of companies: those that have been hacked and those that will be.", author: "Robert Mueller" },
    { text: "Security is ensuring that data is accessed only by authorized users.", author: "Tech Target" },
    { text: "Privacy is not an option, and it shouldn't be the price we accept for just getting on the Internet.", author: "Gary Kovacs" }
];

const SecurityQuotes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                setFade(true);
            }, 500);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ScrollReveal className="w-full max-w-5xl mx-auto px-4 relative group">
            {/* Background Decor */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 via-transparent to-red-50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-card border border-slate-100 flex flex-col items-center text-center backdrop-blur-md">
                <div className="mb-6 relative">
                    <div className="absolute -top-4 -left-6 opacity-10">
                        <Quote size={60} className="text-brand-accent transform -scale-x-100" />
                    </div>
                    <Quote size={40} className="text-brand-accent opacity-20 relative z-10" />
                </div>

                <div className={`transition-all duration-500 ease-in-out transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-xl md:text-3xl text-slate-700 font-medium leading-relaxed mb-6 max-w-3xl mx-auto font-sans">
                        "{quotes[currentIndex].text}"
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300"></div>
                        <p className="text-brand-primary font-bold text-sm tracking-[0.2em] uppercase font-orbitron">
                            {quotes[currentIndex].author}
                        </p>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300"></div>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex gap-2 mt-8">
                    {quotes.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setFade(false);
                                setTimeout(() => {
                                    setCurrentIndex(idx);
                                    setFade(true);
                                }, 300);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'w-8 bg-brand-accent'
                                    : 'w-2 bg-slate-200 hover:bg-slate-300'
                                }`}
                            aria-label={`Go to quote ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </ScrollReveal>
    );
};

export default SecurityQuotes;
