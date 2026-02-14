import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, canonical, keywords, image }) => {
    const siteUrl = window.location.origin;
    const metaImage = image || `${siteUrl}/terminal-logo.png.png`; // Fallback to logo

    // Structured Data (JSON-LD) for the Community/Organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cyber Sphere Community",
        "url": siteUrl,
        "logo": `${siteUrl}/terminal-logo.png.png`,
        "description": "An open collective for ethical hackers and security researchers.",
        "sameAs": [
            "https://linkedin.com/company/cybersphere",
            "https://github.com/cybersphere-community"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "cybersphere.official@outlook.com",
            "contactType": "customer support"
        }
    };

    // WebSite schema for search box potential
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Cyber Sphere Community",
        "url": siteUrl,
        "description": "Leading cybersecurity community for ethical hackers, researchers, and security enthusiasts",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/#/articles?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <Helmet>
            <title>{title ? `${title} | Cyber Sphere Community` : 'Cyber Sphere Community'}</title>
            <meta name="description" content={description || "Join Cyber Sphere, the leading open community for ethical hackers, security researchers, and cyber professionals. access workshops, articles, and events."} />
            <meta name="keywords" content={keywords || "cybersecurity, hacking, pentesting, ethical hacker, cyber sphere, infosec, bug bounty, cloud security, network defense, workshops"} />
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

            {/* Structured Data - Organization */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>

            {/* Structured Data - WebSite */}
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
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
