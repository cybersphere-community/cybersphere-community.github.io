import SEO from '../components/SEO';
import { Linkedin, Github, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <div className="min-h-screen bg-transparent pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
            <SEO
                title="Our Team"
                description="Meet the dedicated team behind Cyber Sphere Community."
                keywords="cyber sphere team, core team, volunteers, cybersecurity experts"
            />

            <div className="text-center mb-20">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-brand-primary tracking-tight">
                    Meet the Team
                </h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                    The passionate individuals driving the Cyber Sphere mission forward.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:border-blue-100 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-8 group backdrop-blur-md"
                    >
                        {/* Circular Image */}
                        <div className="flex-shrink-0 relative">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-md group-hover:border-brand-accent transition-colors duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    width="128"
                                    height="128"
                                    className={`w-full h-full object-cover ${member.objectPosition || 'object-center'} transform  transition-transform duration-700`}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center sm:text-left w-full">
                            <h3 className="text-2xl font-bold text-brand-primary mb-1 group-hover:text-brand-accent transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-brand-secondary font-medium mb-1 text-sm uppercase tracking-wide">{member.role}</p>
                            <p className="text-slate-400 text-sm mb-4 italic">{member.university}</p>

                            {/* Interests / Tags */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
                                {member.interests.map((interest, idx) => (
                                    <span key={idx} className="bg-blue-50 text-brand-accent text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                                        {interest}
                                    </span>
                                ))}
                            </div>

                            {/* Social Links - Premium Interactive */}
                            <div className="team-social-card justify-center sm:justify-start pt-4 border-t border-slate-100 mt-auto">
                                {member.portfolio && (
                                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="team-social-container" title="Portfolio">
                                        <Globe className="team-social-svg" />
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-container" title="LinkedIn">
                                        <Linkedin className="team-social-svg" />
                                    </a>
                                )}
                                {member.github && (
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="team-social-container" title="GitHub">
                                        <Github className="team-social-svg" />
                                    </a>
                                )}
                                {member.email && (
                                    <a href={`mailto:${member.email}`} className="team-social-container" title="Email">
                                        <Mail className="team-social-svg" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default Team;
