import { useState } from 'react';
import { Send, Mic, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';



const countryCodes = [
    { code: '+91', name: 'India' },
    { code: '+1', name: 'USA/Canada' },
    { code: '+44', name: 'UK' },
    { code: '+61', name: 'Australia' },
    { code: '+971', name: 'UAE' },
    { code: '+65', name: 'Singapore' },
    { code: '+49', name: 'Germany' },
    { code: '+33', name: 'France' },
    { code: '+81', name: 'Japan' },
    { code: '+82', name: 'South Korea' },
];

const CallForSpeakers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91 (India)',
        phone: '',
        link: '',
        topic: '',
        abstract: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10,15}$/;
        const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

        if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
        if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
        if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Phone number must be between 10-15 digits';
        if (!urlRegex.test(formData.link)) newErrors.link = 'Please enter a valid URL (Portfolio/LinkedIn)';
        if (formData.topic.length < 5) newErrors.topic = 'Topic title must be at least 5 characters';
        if (formData.abstract.length < 20) newErrors.abstract = 'Abstract must be at least 20 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);

        const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSsWwYC_EEmd07eXcpmfiYxJUlIXn2JwhiKqho1LqAw22vsslB-Z5Wf4ohK5z5whEU/exec";

        try {
            // 1. Send to Google Sheets
            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // 2. Also open Email as a backup/confirmation
            const subject = encodeURIComponent(`Speaker Proposal: ${formData.topic}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Phone: ${formData.countryCode} ${formData.phone}\n` +
                `Profile: ${formData.link}\n\n` +
                `Topic: ${formData.topic}\n\n` +
                `Abstract:\n${formData.abstract}`
            );

            alert('Proposal submitted successfully! Opening your email client...');
            window.location.href = `mailto:cybersphere.official@outlook.com?subject=${subject}&body=${body}`;
            
            // Clear form
            setFormData({ name: '', email: '', countryCode: '+91', phone: '', link: '', topic: '', abstract: '' });
        } catch (error) {
            console.error('Error submitting to Google Sheets:', error);
            alert('Failed to save to Google Sheets, but opening email for backup...');
            
            // Still open email even if Sheets fails
            const subject = encodeURIComponent(`Speaker Proposal: ${formData.topic}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Phone: ${formData.countryCode} ${formData.phone}\n` +
                `Profile: ${formData.link}\n\n` +
                `Topic: ${formData.topic}\n\n` +
                `Abstract:\n${formData.abstract}`
            );
            window.location.href = `mailto:cybersphere.official@outlook.com?subject=${subject}&body=${body}`;
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsApp = async () => {
        if (!validate()) return;

        const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSsWwYC_EEmd07eXcpmfiYxJUlIXn2JwhiKqho1LqAw22vsslB-Z5Wf4ohK5z5whEU/exec";
        
        // Log to sheets even for WhatsApp if possible
        try {
            fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, method: 'WhatsApp' }),
            });
        } catch (e) { console.error(e); }

        const text = encodeURIComponent(
            `*Speaker Proposal*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.countryCode} ${formData.phone}\n` +
            `*Profile:* ${formData.link}\n` +
            `*Topic:* ${formData.topic}\n` +
            `*Abstract:* ${formData.abstract}`
        );

        window.open(`https://wa.me/918700158124?text=${text}`, '_blank');
    };

    return (
        <ScrollReveal className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-12 mt-20 backdrop-blur-md hover:border-brand-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-brand-accent font-bold text-sm mb-6">
                        <Mic size={18} />
                        <span>Call for Speakers</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-6">Want to deliver a talk?</h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                        We're always looking for passionate speakers to share their knowledge with the community.
                        Whether it's a deep dive into a specific vulnerability, a case study, or a workshop, we want to hear from you.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h4 className="font-bold text-brand-primary mb-3">Why speak at Cyber Sphere?</h4>
                        <ul className="space-y-3">
                            {['Share your knowledge', 'Network with experts', 'Build your personal brand', 'Community recognition'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full rounded-xl bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
                                    placeholder="Your Name"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full rounded-xl bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                <div className="flex gap-2">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="w-28 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all font-medium"
                                    >
                                        {countryCodes.map(c => (
                                            <option key={c.code} value={`${c.code} (${c.name})`}>{c.code} ({c.name})</option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`flex-1 rounded-xl bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-200'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
                                        placeholder="9876543210"
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
                            </div>
                            <div>
                                <label htmlFor="link" className="block text-sm font-bold text-slate-700 mb-2">Portfolio / LinkedIn</label>
                                <input
                                    type="url"
                                    id="link"
                                    name="link"
                                    required
                                    value={formData.link}
                                    onChange={handleChange}
                                    className={`w-full rounded-xl bg-slate-50 border ${errors.link ? 'border-red-500' : 'border-slate-200'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
                                    placeholder="https://linkedin.com/in/..."
                                />
                                {errors.link && <p className="text-red-500 text-xs mt-1 font-bold">{errors.link}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="topic" className="block text-sm font-bold text-slate-700 mb-2">Topic Title</label>
                            <input
                                type="text"
                                id="topic"
                                name="topic"
                                required
                                value={formData.topic}
                                onChange={handleChange}
                                className={`w-full rounded-xl bg-slate-50 border ${errors.topic ? 'border-red-500' : 'border-slate-200'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
                                placeholder="e.g., Advanced XSS Techniques"
                            />
                            {errors.topic && <p className="text-red-500 text-xs mt-1 font-bold">{errors.topic}</p>}
                        </div>
                        <div>
                            <label htmlFor="abstract" className="block text-sm font-bold text-slate-700 mb-2">Abstract / Brief</label>
                            <textarea
                                id="abstract"
                                name="abstract"
                                required
                                rows={4}
                                value={formData.abstract}
                                onChange={handleChange}
                                className={`w-full rounded-xl bg-slate-50 border ${errors.abstract ? 'border-red-500' : 'border-slate-200'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none placeholder-slate-400 font-medium`}
                                placeholder="Brief description of your talk..."
                            ></textarea>
                            {errors.abstract && <p className="text-red-500 text-xs mt-1 font-bold">{errors.abstract}</p>}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`flex-1 btn-primary justify-center text-lg py-3 shadow-lg shadow-blue-500/20 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                <span>{isSubmitting ? 'Submitting...' : 'Submit via Email'}</span>
                                <Send size={18} className={`ml-2 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                            </button>

                            <button
                                type="button"
                                onClick={handleWhatsApp}
                                className="flex-1 inline-flex items-center justify-center text-lg font-bold text-white bg-[#25D366] hover:bg-[#22bf5b] py-3 rounded-xl shadow-lg shadow-green-500/20 transition-all duration-300 group"
                            >
                                <span>WhatsApp</span>
                                <MessageCircle size={18} className="ml-2 transition-transform group-hover:scale-110" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default CallForSpeakers;
