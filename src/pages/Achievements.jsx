import SEO from '../components/SEO';

const Achievements = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SEO
                title="Achievements"
                description="Showcasing the victories and milestones of our community members in CTFs, Bug Bounties, and Research."
                keywords="achievements, ctf winners, bug bounty, cybersecurity awards, hall of fame"
            />
            <h1 className="text-4xl font-bold text-brand-primary mb-8 tracking-tight">Community Achievements</h1>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-lg leading-relaxed">Showcasing the victories and milestones of our community members in CTFs, Bug Bounties, and Research.</p>
            </div>
        </div>
    );
};
export default Achievements;
