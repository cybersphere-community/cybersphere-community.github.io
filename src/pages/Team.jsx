import SEO from '../components/SEO';
import { Linkedin, Github, Globe, Mail } from 'lucide-react';

const teamMembers = [
    {
        name: "Harsh Kanojia",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/harsh.jpg",
        portfolio: "https://harsh-hak.github.io/",
        linkedin: "https://www.linkedin.com/in/harsh-kanojia369/",
        github: "https://github.com/harsh-hak",
        objectPosition: "object-[center_35%]",
        email: "hk.cybersphere@gmail.com",
        interests: ["Offensive Security", "Malware Analysis", "LLM Hacking"]
    },
    {
        name: "Manish Garg",
        role: "Business Analytics",
        university: "Deakin University",
        image: "/team/manish.jpg",
        linkedin: "https://www.linkedin.com/in/manish-garg-51b072228/",
        objectPosition: "object-top",
        email: "manish.garg@deakin.edu.au",
        interests: ["Data Analytics", "Business Intelligence", "Risk Assessment"]
    },
    {
        name: "Himanshi Shrivastava",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/himanshi.jpg",
        linkedin: "https://www.linkedin.com/in/himanshi-shrivastava-8000a5180/",
        objectPosition: "object-center",
        interests: ["SOC Operations", "Threat Intelligence", "Incident Response"]
    },
    {
        name: "Brijesh Palta",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/brijesh.jpg",
        linkedin: "https://www.linkedin.com/in/brijesh-palta/",
        objectPosition: "object-top",
        interests: ["Cloud Security", "Secure Infra Development", "DevSecOps"]
    },
    {
        name: "Naman Shah",
        role: "Master of Cyber Security",
        university: "Deakin University",
        image: "/team/naman.jpg",
        linkedin: "https://www.linkedin.com/in/naman-shah-8b67a51a4/",
        objectPosition: "object-center",
        interests: ["Digital Forensics", "Network Forensics", "Cyber Investigation"]
    }
];

const Team = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SEO
                title="Our Team"
                description="Meet the dedicated team behind Cyber Sphere Community."
                keywords="cyber sphere team, core team, volunteers, cybersecurity experts"
            />

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Meet the Team
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    The passionate individuals driving the Cyber Sphere mission forward.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/60 flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
                    >
                        {/* Circular Image */}
                        <div className="flex-shrink-0 relative">
                            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-cyan-500 transition-colors duration-300 ring-4 ring-slate-800/50 shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    width="112"
                                    height="112"
                                    className={`w-full h-full object-cover ${member.objectPosition || 'object-center'} transform group-hover:scale-110 transition-transform duration-500`}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center sm:text-left w-full">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-slate-400 text-sm font-medium mb-1">{member.role}</p>
                            <p className="text-slate-500 text-sm mb-3">{member.university}</p>

                            {/* Interests / Tags */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                                {member.interests.map((interest, idx) => (
                                    <span key={idx} className="bg-slate-900/50 text-cyan-400/80 text-xs px-2 py-1 rounded border border-slate-700/50">
                                        {interest}
                                    </span>
                                ))}
                            </div>

                            {/* Social Links - Compact Row */}
                            <div className="flex justify-center sm:justify-start gap-4 pt-2 border-t border-slate-700/30 mt-auto">
                                {member.portfolio && (
                                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="Portfolio">
                                        <Globe className="w-4 h-4" />
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors" title="LinkedIn">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                )}
                                {member.github && (
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                                        <Github className="w-4 h-4" />
                                    </a>
                                )}
                                {member.email && (
                                    <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-red-500 transition-colors" title="Email">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Team;
