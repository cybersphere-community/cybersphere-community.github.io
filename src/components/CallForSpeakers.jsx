import { useState } from 'react';
import { Send, Mic, MessageCircle, X, FileText, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';



const countryCodes = [
    { code: '+91', flag: '🇮🇳' },
    { code: '+1', flag: '🇺🇸' },
    { code: '+44', flag: '🇬🇧' },
    { code: '+61', flag: '🇦🇺' },
    { code: '+971', flag: '🇦🇪' },
    { code: '+65', flag: '🇸🇬' },
    { code: '+49', flag: '🇩🇪' },
    { code: '+33', flag: '🇫🇷' },
    { code: '+81', flag: '🇯🇵' },
    { code: '+82', flag: '🇰🇷' },
];

const CallForSpeakers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        link: '',
        topic: '',
        abstract: '',
        acceptTerms: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

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
        if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
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

        const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwszLHzXFU4r5E6f7uSS7O5lQVj_MXZYN8k9paJ1G_omtY2_Bjfo8W1yA0uETN6K6iopQ/exec";

        const termsText = `I ${formData.name} accept all the terms and conditions:\n\n` +
            `Speaker Terms & Conditions – Cyber Sphere\n` +
            `By submitting a speaker application to Cyber Sphere, you agree to the following terms and conditions:\n\n` +
            `Session Recording & Broadcasting\nYour session may be live streamed and recorded for community, educational, and promotional purposes across platforms operated by Cyber Sphere, including YouTube and social media channels.\n\n` +
            `Content Usage Permission\nAny presentation materials, slides, demos, screen shares, audio, video recordings, and related session content shared during your talk may be stored, published, distributed, reused, edited, or showcased by Cyber Sphere.\n\n` +
            `Educational & Community Use\nSession recordings or portions of the content may be included in workshops, educational resources, training material, learning modules, community archives, or future Cyber Sphere programs.\n\n` +
            `Digital Distribution\nYour session may remain publicly accessible on platforms such as YouTube, websites, newsletters, promotional campaigns, or other digital media channels managed by Cyber Sphere.\n\n` +
            `Platform Monetization & Promotional Usage\nPublished session content may appear on monetized platforms or channels operated by Cyber Sphere. This includes usage connected to advertisements, sponsorships, memberships, course libraries, educational initiatives, or community growth activities.\n\n` +
            `Professional Conduct\nSpeakers must ensure that their content is respectful, lawful, original, and does not infringe on third-party rights. Cyber Sphere reserves the right to reject or remove content that violates community or legal standards.\n\n` +
            `Changes & Event Management\nCyber Sphere reserves the right to reschedule, modify, edit, shorten, or cancel sessions when necessary for operational, technical, or policy-related reasons.\n\n` +
            `Acceptance of Terms\nBy checking the Terms & Conditions box and submitting the speaker form, you confirm that you have read, understood, and agreed to these terms.`;

        try {
            // 1. Send to Google Sheets
            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    ...formData, 
                    acceptTerms: termsText,
                    countryCode: "'" + formData.countryCode 
                }),
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
            setFormData({ name: '', email: '', countryCode: '+91', phone: '', link: '', topic: '', abstract: '', acceptTerms: false });
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

        const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwszLHzXFU4r5E6f7uSS7O5lQVj_MXZYN8k9paJ1G_omtY2_Bjfo8W1yA0uETN6K6iopQ/exec";
        
        const termsText = `I ${formData.name} accept all the terms and conditions:\n\n` +
            `Speaker Terms & Conditions – Cyber Sphere\n` +
            `By submitting a speaker application to Cyber Sphere, you agree to the following terms and conditions:\n\n` +
            `Session Recording & Broadcasting\nYour session may be live streamed and recorded for community, educational, and promotional purposes across platforms operated by Cyber Sphere, including YouTube and social media channels.\n\n` +
            `Content Usage Permission\nAny presentation materials, slides, demos, screen shares, audio, video recordings, and related session content shared during your talk may be stored, published, distributed, reused, edited, or showcased by Cyber Sphere.\n\n` +
            `Educational & Community Use\nSession recordings or portions of the content may be included in workshops, educational resources, training material, learning modules, community archives, or future Cyber Sphere programs.\n\n` +
            `Digital Distribution\nYour session may remain publicly accessible on platforms such as YouTube, websites, newsletters, promotional campaigns, or other digital media channels managed by Cyber Sphere.\n\n` +
            `Platform Monetization & Promotional Usage\nPublished session content may appear on monetized platforms or channels operated by Cyber Sphere. This includes usage connected to advertisements, sponsorships, memberships, course libraries, educational initiatives, or community growth activities.\n\n` +
            `Professional Conduct\nSpeakers must ensure that their content is respectful, lawful, original, and does not infringe on third-party rights. Cyber Sphere reserves the right to reject or remove content that violates community or legal standards.\n\n` +
            `Changes & Event Management\nCyber Sphere reserves the right to reschedule, modify, edit, shorten, or cancel sessions when necessary for operational, technical, or policy-related reasons.\n\n` +
            `Acceptance of Terms\nBy checking the Terms & Conditions box and submitting the speaker form, you confirm that you have read, understood, and agreed to these terms.`;

        // Log to sheets even for WhatsApp if possible
        try {
            fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    ...formData, 
                    acceptTerms: termsText,
                    countryCode: "'" + formData.countryCode,
                    method: 'WhatsApp' 
                }),
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
        <>
        <ScrollReveal className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-12 backdrop-blur-md hover:border-brand-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1 flex flex-col h-full">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-brand-accent font-bold text-sm mb-6 w-fit">
                        <Mic size={18} />
                        <span>Call for Speakers</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 uppercase">WANT TO DELIVER A <span className="text-gradient">TALK?</span></h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                        We're always looking for passionate speakers to share their knowledge. Whether it's a deep dive into a specific vulnerability, a case study, or a workshop, we want to hear from you.
                    </p>

                    {/* Speaker Image placeholder */}
                    <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                        <img 
                            src="/speaker-illustration.png" 
                            alt="Call for Speakers Illustration" 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-300 mt-auto">
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
                                    className={`w-full rounded-xl bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-300'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
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
                                    className={`w-full rounded-xl bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-300'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="pb-2">
                            <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                            <div className="flex items-end gap-4">
                                <div className="relative border-b border-slate-300 pb-1 w-24 flex-shrink-0 focus-within:border-brand-accent transition-colors">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="w-full appearance-none bg-transparent text-slate-900 focus:outline-none cursor-pointer font-medium text-lg pr-4"
                                    >
                                        {countryCodes.map(c => (
                                            <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex-1 relative pb-1 border-b ${errors.phone ? 'border-red-500' : 'border-slate-300 focus-within:border-brand-accent focus-within:border-b-2'} transition-all`}>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-none text-slate-900 focus:outline-none focus:ring-0 placeholder-slate-400 font-medium text-lg px-0"
                                    />
                                </div>
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
                                className={`w-full rounded-xl bg-slate-50 border ${errors.link ? 'border-red-500' : 'border-slate-300'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
                                placeholder="https://linkedin.com/in/..."
                            />
                            {errors.link && <p className="text-red-500 text-xs mt-1 font-bold">{errors.link}</p>}
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
                                className={`w-full rounded-xl bg-slate-50 border ${errors.topic ? 'border-red-500' : 'border-slate-300'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium`}
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
                                className={`w-full rounded-xl bg-slate-50 border ${errors.abstract ? 'border-red-500' : 'border-slate-300'} text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none placeholder-slate-400 font-medium`}
                                placeholder="Brief description of your talk..."
                            ></textarea>
                            {errors.abstract && <p className="text-red-500 text-xs mt-1 font-bold">{errors.abstract}</p>}
                        </div>
                        
                        <div>
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="flex items-center h-6">
                                    <input
                                        type="checkbox"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded border-slate-300 text-brand-accent focus:ring-brand-accent focus:ring-offset-2 transition-all cursor-pointer"
                                    />
                                </div>
                                <span className="text-sm text-slate-600 font-medium leading-relaxed group-hover:text-slate-800 transition-colors">
                                    I accept the{' '}
                                    <span 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setShowTermsModal(true);
                                        }}
                                        className="text-brand-accent hover:underline cursor-pointer font-bold"
                                    >
                                        Terms and Conditions
                                    </span>
                                </span>
                            </label>
                            {errors.acceptTerms && <p className="text-red-500 text-xs mt-1 font-bold">{errors.acceptTerms}</p>}
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

        {showTermsModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
                <div className="bg-white rounded-2xl border border-slate-200 w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg text-brand-accent">
                                <FileText size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary">Speaker Terms & Conditions – Cyber Sphere</h3>
                        </div>
                        <button 
                            onClick={() => setShowTermsModal(false)}
                            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Modal Body (Scrollable) */}
                    <div className="p-6 overflow-y-auto space-y-6 text-slate-600 text-base leading-relaxed">
                        <p className="font-medium text-slate-700">
                            By submitting a speaker application to Cyber Sphere, you confirm that you agree to the following terms and conditions:
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Session Recording & Broadcasting</h4>
                                <p>Your session may be live streamed and recorded for community, educational, and promotional purposes across platforms operated by Cyber Sphere, including YouTube and social media channels.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Content Usage Permission</h4>
                                <p>Any presentation materials, slides, demos, screen shares, audio, video recordings, and related session content shared during your talk may be stored, published, distributed, reused, edited, or showcased by Cyber Sphere.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Educational & Community Use</h4>
                                <p>Session recordings or portions of the content may be included in workshops, educational resources, training material, learning modules, community archives, or future Cyber Sphere programs.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Digital Distribution</h4>
                                <p>Your session may remain publicly accessible on platforms such as YouTube, websites, newsletters, promotional campaigns, or other digital media channels managed by Cyber Sphere.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Platform Monetization & Promotional Usage</h4>
                                <p>Published session content may appear on monetized platforms or channels operated by Cyber Sphere. This includes usage connected to advertisements, sponsorships, memberships, course libraries, educational initiatives, or community growth activities.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Professional Conduct</h4>
                                <p>Speakers must ensure that their content is respectful, lawful, original, and does not infringe on third-party rights. Cyber Sphere reserves the right to reject or remove content that violates community or legal standards.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Changes & Event Management</h4>
                                <p>Cyber Sphere reserves the right to reschedule, modify, edit, shorten, or cancel sessions when necessary for operational, technical, or policy-related reasons.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Acceptance of Terms</h4>
                                <p>By checking the Terms & Conditions box and submitting the speaker form, you confirm that you have read, understood, and agreed to these terms.</p>
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-4">
                        <button
                            onClick={() => setShowTermsModal(false)}
                            className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-100 transition-colors"
                        >
                            Close
                        </button>
                        <button
                            onClick={() => {
                                setFormData(prev => ({ ...prev, acceptTerms: true }));
                                setShowTermsModal(false);
                            }}
                            className="px-6 py-2.5 rounded-xl bg-brand-accent hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
                        >
                            <Check size={18} />
                            <span>I Agree</span>
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default CallForSpeakers;
