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
        id: 107,
        title: "AI Security: Threats, Risks & Defense",
        date: "May 16, 2026",
        type: "Workshop",
        description: "Insightful workshop exploring the AI threat landscape, focusing on AI security risks, defense mechanisms, Secure ADF pipelines, Key Vault, and RBAC strategies.",
        speaker: "Gauthaman Sakthivel",
        speakerUrl: "https://www.linkedin.com/in/gauthamansakthivel/",
        speakerImage: "/team/gauthaman.jpg",
        organizer: "Harsh Kanojia",
        organizerUrl: "https://www.linkedin.com/in/harsh-kanojia369/",
        organizerImage: "/team/harsh.jpg",
        eventPoster: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
        presentationLink: "https://docs.google.com/presentation/d/1R8Fz_CeKMWf_t4G0ROQG7JQHuAzgJQJf/edit?usp=sharing&ouid=113587794034483694144&rtpof=true&sd=true",
        blogContent: `
### Context
We recently hosted an insightful AI Security workshop within the Cyber Sphere Community, focusing on the intersection of Artificial Intelligence and modern cybersecurity. Led by Gauthaman Sakthivel, a Secure Azure Data Engineer, the session provided a deep dive into the emerging threats targeting AI models, associated risks in enterprise environments, and robust defense mechanisms.

### Workshop Objective
The session was structured to bridge the gap between AI development and cloud security, equipping attendees with practical knowledge. The core objectives were:
- Understand the AI Threat Landscape and Model Vulnerabilities
- Explore Data Pipeline Security and RBAC in Azure
- Implement Defenses for Enterprise AI Applications

### AI Threat Landscape & Risks
We examined how artificial intelligence introduces new attack surfaces, including prompt injection, data poisoning, and model inversion. The discussion highlighted why securing the underlying data pipelines and infrastructure is just as critical as securing the models themselves.

### Securing Cloud Data Pipelines
Drawing from real-world expertise, Gauthaman demonstrated best practices for securing cloud environments where AI data resides. Key topics included configuring Secure Azure Data Factory (ADF) pipelines, leveraging Azure Key Vault for secrets management, and enforcing strict Role-Based Access Control (RBAC).

### Key Takeaways
- Securing AI requires a holistic approach covering data pipelines, infrastructure, and model interaction.
- Proper secrets management and RBAC are the first line of defense against cloud-based AI breaches.
- Continuous monitoring and threat modeling are essential as AI technologies evolve rapidly.
        `
    },
    {
        id: 106,
        title: "Next-Gen Autonomous Security Platform Evolution: Explore the Future of Cybersecurity",
        date: "Apr 11, 2026",
        type: "Workshop",
        description: "Dive deep into how next-generation autonomous security platforms are redefining cyber defense, shifting from reactive models to intelligent, self-learning systems.",
        speaker: "S Aravind",
        speakerUrl: "https://www.linkedin.com/in/s-aravind-2590b22b0/",
        speakerImage: "/team/aravind.jpg",
        organizer: "Harsh Kanojia",
        organizerUrl: "https://www.linkedin.com/in/harsh-kanojia369/",
        organizerImage: "/team/harsh.jpg",
        eventPoster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        presentationLink: "https://docs.google.com/presentation/d/1c7VCsa4rDfHI5sUCDQWeQ5MCxzsZ2Os5/edit?usp=sharing&ouid=113587794034483694144&rtpof=true&sd=true",
        blogContent: `
### Context
We recently explored how next-generation autonomous security platforms are redefining the way organizations defend against cyber threats. The session covered the shift from traditional, reactive security models to intelligent, self-learning systems capable of predicting, preventing, and responding to attacks in real time.

### Workshop Objective
This session was designed to make complex concepts accessible for students and tech enthusiasts without losing technical depth. The main goals were:
- Understand AI-Driven Threat Detection
- Master Modern Threat Landscape Analysis
- Gain Real-World Cybersecurity Insights

### AI-Driven Threat Detection
We broke down how artificial intelligence and machine learning are used to identify complex attack patterns, detect anomalies, and automate responses. These systems significantly reduce human effort while increasing accuracy in identifying both known and unknown threats.

### Modern Threat Landscape Analysis
The session provided a clear understanding of how cyber threats are evolving, from ransomware and zero-day exploits to advanced persistent threats. We explored practical techniques used by security professionals to analyze, categorize, and respond to these challenges effectively.

### Key Takeaways
- Walk away with actionable knowledge applicable to personal security and career advancement.
- Learn tools, approaches, and mindsets that align with current industry practices.
- Go beyond theory with real-world scenarios, case studies, and attack simulations.
        `
    },
    {
        id: 105,
        title: "Linux Exploitation Workshop: CVE-2021-4034 (PwnKit)",
        date: "Feb 21, 2026",
        type: "Workshop",
        description: "Insightful workshop on CVE-2021-4034, focusing on Polkit privilege escalation techniques and defense strategies in a hands-on environment.",
        speaker: "Himanshi Shrivastava",
        speakerUrl: "https://www.linkedin.com/in/himanshi-shrivastava-8000a5180/",
        organizer: "Harsh Kanojia",
        organizerUrl: "https://www.linkedin.com/in/harsh-kanojia369/",
        organizerImage: "/team/harsh.jpg",
        speakerImage: "/team/himanshi.jpg",
        eventPoster: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000",
        presentationLink: "https://drive.google.com/file/d/1sbbALTGje8FlXuhIaLeHKisiKruaZU4P/view?usp=sharing",
        blogContent: `
### Context
We recently hosted a hands-on Linux Exploitation Workshop focusing on one of the most infamous privilege escalation vulnerabilities in recent years: CVE-2021-4034, also known as PwnKit. This session provided a deep dive into how the Polkit \`pkexec\` utility can be abused to gain root privileges on major Linux distributions.

### Workshop Objective
The goal of this workshop was to understand the mechanics behind the PwnKit vulnerability and how to defend against it.
- Analyze the root cause of CVE-2021-4034 in the Polkit source code
- Demonstrate a live privilege escalation attack from a standard user to root
- Implement mitigation and patching strategies

### Understanding the Vulnerability
We explored how \`pkexec\` mishandles command-line arguments. By passing a specific out-of-bounds argument array, an attacker can manipulate the environment variables and force \`pkexec\` to execute arbitrary code with root privileges.

### Defensive Strategies
After the exploitation phase, we shifted focus to remediation. We discussed how to:
- Identify vulnerable versions of Polkit across different Linux distributions
- Apply the official patches released by vendors
- Implement temporary mitigations by stripping the SUID bit from the \`pkexec\` binary for legacy systems that cannot be immediately patched.

### Key Takeaways
- Even ubiquitous, heavily scrutinized utilities can harbor critical vulnerabilities for years.
- Understanding the root cause of an exploit is more valuable than just running public proof-of-concept scripts.
- Defense-in-depth and timely patching are crucial for maintaining system integrity.
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
        organizerImage: "/team/harsh.jpg",
        speakerImage: "/team/brijesh.jpg",
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
        id: 103,
        title: "IoT Hacking Workshop: Router-Level Security Failures",
        date: "Jan 29, 2026",
        type: "Workshop",
        description: "Hands-on session on router-level vulnerabilities, understanding IoT architecture, and attacker methodology.",
        speaker: "Naman Shah",
        speakerUrl: "https://www.linkedin.com/in/naman-shah-8b67a51a4/",
        organizer: "Harsh Kanojia",
        organizerUrl: "https://www.linkedin.com/in/harsh-kanojia369/",
        organizerImage: "/team/harsh.jpg",
        speakerImage: "/team/naman.jpg",
        eventPoster: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
        presentationLink: "https://drive.google.com/file/d/14p1vvrKvrqUkUfOLs82kt5mbDJWwdOjt/view?usp=sharing",
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
    }
];

