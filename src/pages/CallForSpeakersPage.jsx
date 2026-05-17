import CallForSpeakers from '../components/CallForSpeakers';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';


const CallForSpeakersPage = () => {
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            <SEO
                title="Call for Speakers - Cyber Sphere"
                description="Submit your proposal to speak at Cyber Sphere events. Share your knowledge with the community."
                keywords="call for speakers, cybersecurity talks, submit proposal, speaker application"
            />
            <div className="max-w-7xl mx-auto">

                <ScrollReveal delay={0.2}>
                    <CallForSpeakers />
                </ScrollReveal>
            </div>
        </div>
    );
};

export default CallForSpeakersPage;
