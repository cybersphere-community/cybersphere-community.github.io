import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { Linkedin } from 'lucide-react';


const speakers = [
    {
        name: "Harsh Kanojia",
        role: "Founder & Security Researcher",
        image: "/team/harsh.jpg",
        description: "Driving community initiatives and workshops. Researching offensive security, malware analysis, and LLM hacking.",
        linkedin: "https://www.linkedin.com/in/harsh-kanojia369/"
    },
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
        name: "Himanshi Shrivastava",
        role: "SOC Operations",
        image: "/team/himanshi.jpg",
        description: "Conducted hands-on Linux Exploitation Workshop. Specializes in SOC Operations, Threat Intelligence, and Incident Response.",
        linkedin: "https://www.linkedin.com/in/himanshi-shrivastava-8000a5180/"
    },
    {
        name: "S Aravind",
        role: "Blue Team Researcher",
        image: "/team/aravind.jpg",
        description: "Specializing in Blue Team Operations and SIEM detection. Building hands-on expertise in log analysis, threat hunting, and incident response within SOC environments.",
        linkedin: "https://www.linkedin.com/in/s-aravind-2590b22b0/"
    },
    {
        name: "Gauthaman Sakthivel",
        role: "Secure Azure Data Engineer",
        image: "/team/gauthaman.jpg",
        description: "Specializing in Secure ADF pipelines, Key Vault & RBAC. Delivered the talk on 'AI Security: Threats, Risks & Defense'.",
        linkedin: "https://www.linkedin.com/in/gauthamansakthivel/",
        presentation: "https://docs.google.com/presentation/d/1R8Fz_CeKMWf_t4G0ROQG7JQHuAzgJQJf/edit?usp=sharing&ouid=113587794034483694144&rtpof=true&sd=true"
    }
];

const Speakers = () => {
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-24 sm:pt-32 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <SEO
                    title="Our Speakers"
                    description="Meet the industry experts and researchers speaking at Cyber Sphere events."
                    keywords="cybersecurity speakers, experts, researchers, industry professionals"
                />
                <ScrollReveal className="text-center mb-20">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase">OUR <span className="text-gradient">SPEAKERS</span></h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Meet the industry experts and researchers leading the conversation.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {speakers.map((speaker, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden text-center p-8 shadow-sm border border-slate-200 transition-all duration-300 group flex flex-col h-full backdrop-blur-md hover:shadow-xl hover:border-brand-accent/30">
                                <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center p-1 border-2 border-slate-100 group-hover:border-brand-accent transition-colors duration-500">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full rounded-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-brand-primary mb-2 transition-colors group-hover:text-brand-accent">{speaker.name}</h3>
                                <p className="text-brand-accent font-bold text-xs uppercase tracking-wide mb-4">{speaker.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{speaker.description}</p>

                                {speaker.linkedin && (
                                    <div className="mt-auto flex justify-center w-full pb-2">
                                        <a
                                            href={speaker.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block"
                                        >
                                            <button
                                                className="group/btn w-12 hover:w-64 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 group-hover/btn:pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-56 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45 overflow-hidden transition-all ease-in-out"
                                            >
                                                <svg
                                                    y="0"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0"
                                                    width="100"
                                                    viewBox="0 0 100 100"
                                                    preserveAspectRatio="xMidYMid meet"
                                                    height="100"
                                                    className="w-8 h-8 shrink-0 fill-neutral-50"
                                                >
                                                    <path
                                                        d="M30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,10,17.79,25.68Z"
                                                    ></path>
                                                </svg>
                                                <span
                                                    className="origin-left inline-flex duration-100 group-hover/btn:duration-300 group-hover/btn:delay-500 opacity-0 group-hover/btn:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover/btn:scale-x-100 transition-all text-sm whitespace-nowrap"
                                                >
                                                    {speaker.name}
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* CallForSpeakers component moved to dedicated page */}

            </div>
        </div>
    );
};
export default Speakers;
