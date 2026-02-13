export const upcomingEvents = [
    {
        id: 1,
        title: "Zero-Day Research Symposium",
        date: "Oct 25, 2026",
        time: "18:00 IST",
        location: "Online / Microsoft Teams",
        type: "Symposium",
        description: "Deep dive into kernel exploitation and heap spraying techniques. Bring your laptops. Subject: Zero-Day Exploitation Tactics."
    }
];

export const pastEvents = [
    {
        id: 103,
        title: "IoT Hacking Workshop: Router-Level Security Failures",
        date: "Jan 29, 2026",
        type: "Workshop",
        description: "Hands-on session on router-level vulnerabilities, understanding IoT architecture, and attacker methodology.",
        speaker: "Naman Shah",
        speakerUrl: "https://www.linkedin.com/in/naman-shah-8b67a51a4/",
        organizer: "Harsh Kanojia",
        organizerUrl: "https://www.linkedin.com/in/harsh-kanojia369/",
        speakerImage: "https://ui-avatars.com/api/?name=Naman+Shah&background=0D8ABC&color=fff",
        eventPoster: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
        presentationLink: "#",
        blogContent: `
### Context
I recently delivered a hands-on IoT Hacking workshop focused on router-level vulnerabilities. No, this was not about “hacking like in movies.” And no, it did not involve magical zero-days. The session was intentionally grounded in reality: understanding how IoT systems are built, where they break, and why insecure routers remain the easiest and most reliable entry point for attackers.

### Workshop Objective
The workshop had a straightforward agenda:
- Break down IoT systems into layers instead of treating them as mystery boxes
- Explain why routers fail security reviews repeatedly
- Show how attackers think before they ever touch an exploit

### Understanding IoT Architecture
We started with the basics that are often skipped: Device layer, Network layer, Processing layer, Application layer. Data flows from sensors, through routers, into cloud platforms, and finally to user-facing applications. If this chain breaks at any point, the entire system becomes unreliable. **Spoiler: it usually breaks at the router.**

### Layer-Specific Attack Surfaces
Each IoT layer introduces predictable weaknesses:
- Devices suffer from weak firmware and hardcoded credentials
- Networks fail due to exposed router interfaces, outdated firmware, and default passwords
- Cloud platforms are misconfigured more often than people like to admit
- Applications rely on fragile authentication and session handling

### Why Routers Are Always the First Casualty
Routers sit quietly between devices and the internet, trusted by everything and updated by almost no one. Once compromised, attackers can: Observe or manipulate IoT traffic, Disrupt device communication, Move laterally across the network. One router. Total visibility. Minimal effort.

### Key Takeaways
- Most IoT compromises start at the router
- Attacks succeed because basics are ignored, not because attackers are brilliant
- Securing routers properly eliminates a large percentage of IoT risk
        `
    },
    {
        id: 104,
        title: "Cloud Security Fundamentals: Where Cloud Systems Actually Fail",
        date: "Feb 09, 2026",
        type: "Workshop",
        description: "Practical session on securing data, applications, and infrastructure in cloud environments. Exploring the Shared Responsibility Model and common attack surfaces.",
        speaker: "Brijesh Palta",
        speakerUrl: "https://www.linkedin.com/in/brijesh-palta/",
        organizer: "Harsh Kanojia",
        organizerUrl: "https://www.linkedin.com/in/harsh-kanojia369/",
        speakerImage: "https://ui-avatars.com/api/?name=Brijesh+Palta&background=eb4034&color=fff",
        eventPoster: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
        presentationLink: "#",
        blogContent: `
### Context
I recently conducted a Cloud Security workshop within the CyberSphere Community, focused on securing data, applications, and infrastructure in cloud environments. The session was intentionally practical. The goal was to understand how cloud systems are actually built, where security responsibility shifts, and why most cloud breaches happen without any sophisticated exploitation.

### Workshop Objective
The workshop had a clear and limited agenda:
- Break cloud computing down instead of treating it as a black box
- Explain why cloud environments repeatedly fail security reviews
- Show how attackers think before touching tools or exploits

### Understanding Cloud Architecture
We started with the basics that are usually rushed or ignored: Infrastructure layer, Platform layer, Application layer, Identity and access layer. Data moves through cloud services, APIs, identity systems, and storage before reaching users. A failure at any layer affects the entire environment.

### Shared Responsibility Is Where Things Break
One of the most misunderstood topics in cloud security is the Shared Responsibility Model. If a cloud database is exposed, it is not a provider failure. **It is a configuration failure.**

### Common Cloud Attack Surfaces
Each cloud layer introduces predictable weaknesses:
- Identity systems fail due to excessive permissions
- Storage services fail due to public exposure
- APIs fail due to weak authentication
- Monitoring fails because logs are ignored

### Key Takeaways
- Most cloud breaches are configuration failures
- Attacks succeed because basics are ignored
- Strong IAM prevents a majority of incidents
- Cloud security is continuous, not one-time
        `
    },
    {
        id: 101,
        title: "Intro to Bug Bounty Hunting",
        date: "Aug 12, 2025",
        type: "Workshop",
        description: "A comprehensive guide for beginners to start their journey in bug bounty hunting."
    },
    {
        id: 102,
        title: "Cloud Security Fundamentals",
        date: "June 05, 2025",
        type: "Tech Talk",
        description: "Exploring shared responsibility models and securing AWS/Azure environments."
    }
];
