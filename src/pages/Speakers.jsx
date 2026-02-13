import SEO from '../components/SEO';
import CallForSpeakers from '../components/CallForSpeakers';

import { Linkedin } from 'lucide-react';

const speakers = [
    {
        name: "Naman Shah",
        role: "Security Researcher",
        image: "/team/naman.jpg",
        description: "Expert in router-level vulnerabilities, IoT architecture, and attacker methodology. Delivered hands-on workshops on IoT hacking.",
        linkedin: "https://www.linkedin.com/in/naman-shah-8b67a51a4/"
    },
    {
        name: "Brijesh Palta",
        role: "Cloud Security Engineer",
        image: "/team/brijesh.jpg",
        description: "Specialist in cloud infrastructure security, Shared Responsibility Models, and securing cloud-native applications.",
        linkedin: "https://www.linkedin.com/in/brijesh-palta/"
    },
    {
        name: "Harsh Kanojia",
        role: "Founder & Security Researcher",
        image: "/team/harsh.jpg",
        description: "Driving community initiatives and workshops. Researching offensive security, malware analysis, and LLM hacking.",
        linkedin: "https://www.linkedin.com/in/harsh-kanojia369/"
    }
];

const Speakers = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <SEO
                    title="Our Speakers"
                    description="Meet the industry experts and researchers speaking at Cyber Sphere events."
                    keywords="cybersecurity speakers, experts, researchers, industry professionals"
                />
                <div className="text-center mb-20">
                    <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-6 tracking-tight">Our Speakers</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Meet the industry experts and researchers leading the conversation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden text-center p-8 shadow-sm border border-slate-200 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                            <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center p-1 border-2 border-slate-100 group-hover:border-brand-accent transition-colors">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-2">{speaker.name}</h3>
                            <p className="text-brand-accent font-bold text-xs uppercase tracking-wide mb-4">{speaker.role}</p>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{speaker.description}</p>

                            {speaker.linkedin && (
                                <a
                                    href={speaker.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-400 hover:text-[#0077b5] transition-colors mt-auto"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>Connect</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <CallForSpeakers />
            </div>
        </div>
    );
};
export default Speakers;
