import React, { useState } from 'react';
import { Send, Mic, MessageCircle } from 'lucide-react';

const CallForSpeakers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        abstract: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Speaker Proposal: ${formData.topic}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Topic: ${formData.topic}\n\n` +
            `Abstract:\n${formData.abstract}`
        );

        window.location.href = `mailto:cybersphere.official@outlook.com?subject=${subject}&body=${body}`;
    };

    const handleWhatsApp = () => {
        if (!formData.name || !formData.topic) {
            alert('Please fill in at least your Name and Topic to send via WhatsApp.');
            return;
        }

        const text = encodeURIComponent(
            `*Speaker Proposal*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Topic:* ${formData.topic}\n` +
            `*Abstract:* ${formData.abstract}`
        );

        window.open(`https://wa.me/918700158124?text=${text}`, '_blank');
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12 mt-20">
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
                                    className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium"
                                    placeholder="Your Name"
                                />
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
                                    className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium"
                                    placeholder="your@email.com"
                                />
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
                                className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder-slate-400 font-medium"
                                placeholder="e.g., Advanced XSS Techniques"
                            />
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
                                className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none placeholder-slate-400 font-medium"
                                placeholder="Brief description of your talk..."
                            ></textarea>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button type="submit" className="flex-1 btn-primary justify-center text-lg py-3 shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 group">
                                <span>Submit via Email</span>
                                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                type="button"
                                onClick={handleWhatsApp}
                                className="flex-1 inline-flex items-center justify-center text-lg font-bold text-white bg-[#25D366] hover:bg-[#22bf5b] py-3 rounded-xl shadow-lg shadow-green-500/20 transition-all duration-300 group"
                            >
                                <span>WhatsApp</span>
                                <MessageCircle size={18} className="ml-2 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CallForSpeakers;
