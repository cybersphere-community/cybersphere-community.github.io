import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, canonical, keywords, image }) => {
    const siteUrl = window.location.origin;
    const metaImage = image || `${siteUrl}/terminal-logo.png.png`; // Fallback to logo

    // Structured Data (JSON-LD) for the Community/Organization
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cyber Sphere Community",
        "url": siteUrl,
        "logo": `${siteUrl}/terminal-logo.png.png`,
        "description": "An open collective for ethical hackers and security researchers.",
        "sameAs": [
            "https://linkedin.com/company/cybersphere",
            // Add other social links here if available
        ]
    };

    return (
        <Helmet>
            <title>{title ? `${title} | Cyber Sphere Community` : 'Cyber Sphere Community'}</title>
            <meta name="description" content={description || "Join the Cyber Sphere Community - A hub for cybersecurity enthusiasts, students, and professionals."} />
            <meta name="keywords" content={keywords || "cybersecurity, hacking, pentesting, ethical hacker, cyber sphere, community"} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || "Cyber Sphere Community"} />
            <meta property="og:description" content={description || "Join the Cyber Sphere Community - A hub for cybersecurity enthusiasts, students, and professionals."} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@CyberSphere" />
            <meta name="twitter:title" content={title || "Cyber Sphere Community"} />
            <meta name="twitter:description" content={description || "Join the Cyber Sphere Community - A hub for cybersecurity enthusiasts, students, and professionals."} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    canonical: PropTypes.string,
    keywords: PropTypes.string,
    image: PropTypes.string
};

export default SEO;
