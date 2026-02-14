import CallForSpeakers from '../components/CallForSpeakers';
import SEO from '../components/SEO';

const CallForSpeakersPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            <SEO
                title="Call for Speakers - Cyber Sphere"
                description="Submit your proposal to speak at Cyber Sphere events. Share your knowledge with the community."
                keywords="call for speakers, cybersecurity talks, submit proposal, speaker application"
            />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-6 tracking-tight">Speak at Cyber Sphere</h1>
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                        Share your expertise, research, and passion with a community of security enthusiasts.
                    </p>
                </div>
                <CallForSpeakers />
            </div>
        </div>
    );
};

export default CallForSpeakersPage;
