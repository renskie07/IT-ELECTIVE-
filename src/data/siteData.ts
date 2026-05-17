export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  title: string;
  role: string;
  status: ProjectStatus;
  description: string;
  problem: string;
  solution: string;
  contributions: string[];
  outcome: string;
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
  imagePath: string;
  imageAlt: string;
}

export interface EducationTopic {
  number: string;
  title: string;
  tag: string;
  body: string;
  calloutLabel: string;
  calloutText: string;
  note: string;
}

export const siteConfig = {
  name: "Tom Tumanan | PORTFOLIO",
  title: "Freelance & IT Support",
  description:
    "Portfolio of a web developer and IT support freelancer focused on responsive websites, workflow automation, troubleshooting, and practical technical operations.",
  email: "tomjatn@gmail.com",
  resumeUrl: "",
  siteUrl: "https://tomjoshuas-projects.vercel.app/",
  social: {
    github: "https://github.com/ttomja/edu-portfolio.git",
    linkedin: "https://www.linkedin.com/in/tom-joshua-tumanan-221364315/",
  },
};

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Credentials", href: "/credentials" },
  { name: "IT Elective 6", href: "/education" },
];

export const freelancePlatforms = [
  { name: "Upwork", status: "Coming soon" },
  { name: "Fiverr", status: "Coming soon" },
  { name: "Freelancer", status: "Coming soon" },
];

export const sectionContent = {
  hero: {
    badge: "Available for web, IT support, and automation work",
    titleLine1: "Web Developer",
    titleLine2: "& IT Support Freelancer",
    description:
      "I build responsive websites, organize technical workflows, and troubleshoot systems for teams that need practical, reliable support.",
    primaryCta: "View Projects",
    contactCta: "Contact Me",
    proofPoints: [
      "Astro, TypeScript, Tailwind CSS",
      "PHP and MySQL project work",
      "IT support and workflow automation",
    ],
  },
  about: {
    title: "Practical technical support with visible project work.",
    description:
      "My portfolio focuses on hands-on work: building web interfaces, connecting tools, documenting technical decisions, and supporting users when systems need to run smoothly.",
    highlights: [
      "I can build and maintain responsive sites using modern frontend tooling.",
      "I can support IT operations such as setup, troubleshooting, documentation, and user support.",
      "I can automate repetitive workflows across spreadsheets, CRMs, forms, and admin tools.",
    ],
  },
  services: {
    title: "Core Strengths",
    subtitle:
      "Focused capabilities that match web development, IT support, and technical operations roles.",
  },
  experience: {
    title: "Experience",
    subtitle:
      "Work and training that show technical support, implementation, and communication practice.",
  },
  education: {
    title: "Certifications & Education",
    subtitle:
      "Verified credentials that support my IT troubleshooting and systems foundation.",
  },
  educationPage: {
    kicker: "IT Elective 6",
    title: "IT Elective 6 - Course Topics",
    description:
      "Security models, adversarial thinking, and MITRE ATT&CK tactics from threat frameworks through initial access, execution, persistence, and discovery.",
  },
  techStackSection: {
    title: "Technologies & Tools",
    subtitle:
      "Tools I use or practice with for websites, support work, automation, and technical operations.",
    badge: "Technical Toolkit",
  },
  resume: {
    title: "Resume",
    description:
      "A downloadable resume will be added here. For now, this page shows a coming soon state without linking to a missing file.",
    readyLabel: "Download Resume",
    pendingLabel: "Resume Coming Soon",
  },
  footer: {
    ctaLine1: "Need a web developer",
    ctaLine2: "or technical support freelancer?",
    ctaButton: "Email Me",
    connectLabel: "Professional links",
    copyright: "All Rights Reserved.",
  },
  projectsPage: {
    title: "Project Proof",
    description:
      "A closer look at selected work, including the problem, solution, stack, contribution, and current proof links.",
  },
};

export const stats = [
  { value: "2", label: "Featured projects documented", highlight: false },
  { value: "18+", label: "Tools practiced", highlight: false },
  { value: "2", label: "Verified credentials", highlight: false },
  { value: "Open", label: "Freelance and junior roles", highlight: true },
];

export const techStack = {
  automation: {
    title: "Automation & CRM",
    description: "Workflow support and operations",
    color: "emerald",
    tools: ["Zapier", "Make.com", "n8n", "ActiveCampaign", "HubSpot", "Google Apps Script"],
  },
  development: {
    title: "Web Development",
    description: "Frontend and full-stack basics",
    color: "blue",
    tools: ["Astro", "React", "TypeScript", "Tailwind CSS", "Node.js", "PHP"],
  },
  admin: {
    title: "IT & Admin Tools",
    description: "Support and team operations",
    color: "purple",
    tools: ["Notion", "Airtable", "Excel/Sheets", "Asana", "Jira", "Slack"],
  },
};

export const services = [
  {
    title: "Responsive Web Builds",
    icon: "code",
    description:
      "Build clean portfolio, business, and project pages with Astro, TypeScript, Tailwind CSS, and practical frontend structure.",
  },
  {
    title: "IT Support",
    icon: "server",
    description:
      "Troubleshoot hardware, software, account, and setup issues with clear documentation and steady communication.",
  },
  {
    title: "Workflow Automation",
    icon: "workflow",
    description:
      "Connect tools, forms, spreadsheets, and CRM workflows to reduce repetitive admin work and manual handoffs.",
  },
  {
    title: "Technical Operations",
    icon: "briefcase",
    description:
      "Support day-to-day technical tasks such as documentation, data cleanup, system checks, and tool organization.",
  },
];

export const projects: Project[] = [
  {
    title: "Samgyupsal POS & Inventory Monitoring System",
    role: "Full-Stack Developer",
    status: "Completed",
    description:
      "A web-based POS and inventory monitoring system for a Korean food business, built around branch operations, sales tracking, and FEFO inventory control.",
    problem:
      "Food inventory cannot be managed safely with a single stock number because products may have different expiration dates, branch locations, and sales velocity.",
    solution:
      "The system separates product records from expiration-aware inventory batches, applies FEFO stock deduction during checkout, and surfaces low-stock, near-expiry, and predicted stockout alerts.",
    contributions: [
      "Built the React frontend for dashboard, POS, inventory, reports, products, and user workflows.",
      "Implemented Supabase Auth, PostgreSQL tables, RLS policies, and RPC-backed checkout and stock-in flows.",
      "Added FEFO batch deduction, sale-to-batch allocation records, inventory movements, and sales-velocity alert logic.",
    ],
    outcome:
      "The deployed capstone demonstrates a production-style Supabase backend, role-aware access, multi-branch inventory monitoring, FEFO checkout behavior, and Vercel deployment.",
    techStack: ["React", "Supabase", "PostgreSQL", "RLS", "Vercel", "FEFO Logic"],
    repoUrl: "https://github.com/ttomja/samgyupsal-pos-system.git",
    demoUrl: "https://samgyupsal.vercel.app/",
    imagePath: "/samgyupsal-pos.png",
    imageAlt: "Login screen of the Samgyupsal Korean Food POS and inventory monitoring system",
  },
  {
    title: "Sky Pulse Weather App",
    role: "Mobile Developer",
    status: "Completed",
    description:
      "A mobile weather app concept that displays local forecast information through a weather API integration.",
    problem:
      "Users need a simple way to check local weather conditions without navigating through a complex dashboard.",
    solution:
      "The app presents weather information in a focused mobile interface with API-powered forecast data and lightweight visual hierarchy.",
    contributions: [
      "Designed the mobile UI flow for quick forecast scanning.",
      "Integrated weather data into the app experience.",
      "Packaged the project demo for review through a shared build link.",
    ],
    outcome:
      "The project shows mobile UI thinking, API integration practice, and a user-centered approach to a small utility app.",
    techStack: ["Mobile Development", "Weather API", "UI Design"],
    repoUrl: "",
    demoUrl:
      "https://drive.google.com/file/d/1YnaVtw5lgnPo2T6tb5N425dDz4NUeMGP/view?usp=sharing",
    imagePath: "/sky-pulse.webp",
    imageAlt: "Mobile screens from the Sky Pulse Weather App",
  },
];

export const credentials = [
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    year: "2026",
    imagePath: "/hardware-basics-cisco.jpg",
    link: "https://www.credly.com/badges/abbfe97d-e2df-4e78-bf9f-f3b942b4ef68/public_url",
  },
  {
    title: "Computer Systems Servicing NC II",
    issuer: "TESDA",
    year: "2025",
    imagePath: "/computer-systems-servicing-nc-ii.jpg",
    link: "https://t2mis.tesda.gov.ph/Learners/S/770073006C007900510041004D00460067006700550071006E006C0066007400440057004D006D006E006E006C0057006D003600490051004900730051006D0049006200590052004100340055004B003300450073003D00",
  },
];

export const educationTopics: EducationTopic[] = [
  {
    number: "1",
    title: "The Adversarial Hook",
    tag: "Foundations",
    body:
      "Introduces how attackers think and operate by focusing on the adversary mindset, the cyber kill chain, and why defenders need to model threats from an attacker's perspective.",
    calloutLabel: "Key ideas",
    calloutText:
      "Threat actors, attack lifecycle, offense-informed defense, and security awareness as the first control layer.",
    note:
      "Sets the foundation for mapping real attacks to structured frameworks like MITRE ATT&CK.",
  },
  {
    number: "2",
    title: "Security Models & Threat Frameworks",
    tag: "Frameworks",
    body:
      "Covers foundational security models such as confidentiality, integrity, and availability, along with threat frameworks that organize adversary behavior into tactics, techniques, and procedures.",
    calloutLabel: "Key ideas",
    calloutText:
      "CIA triad, defense in depth, MITRE ATT&CK matrix, control mapping, and risk-based prioritization.",
    note:
      "Frameworks help teams use a shared language when analyzing incidents and designing controls.",
  },
  {
    number: "3",
    title: "Initial Access - Phishing",
    tag: "TA0001 - T1566",
    body:
      "Initial Access is the tactic where adversaries enter a network. Phishing uses deceptive email, messages, or sites to trick users into revealing credentials or running malicious content.",
    calloutLabel: "Defenses",
    calloutText:
      "Email filtering, SPF/DKIM/DMARC, user training, MFA, attachment sandboxing, and suspicious-message reporting.",
    note:
      "Phishing remains common because it targets human trust instead of only technical controls.",
  },
  {
    number: "4",
    title: "Initial Access - Exploit Public App",
    tag: "TA0001 - T1190",
    body:
      "Exploit Public-Facing Application targets internet-exposed services such as web servers, VPN portals, and mail gateways by using known or zero-day vulnerabilities to gain a foothold.",
    calloutLabel: "Defenses",
    calloutText:
      "Patch management, WAF, vulnerability scanning, least-privilege services, network segmentation, and disabling unused services.",
    note:
      "A common example is exploiting an unpatched web application to drop a web shell.",
  },
  {
    number: "5",
    title: "Initial Access - Valid Accounts",
    tag: "TA0001 - T1078",
    body:
      "Valid Accounts uses legitimate credentials that may be stolen, guessed, or purchased. The activity can blend in with normal usage and become harder to detect than malware alone.",
    calloutLabel: "Defenses",
    calloutText:
      "Strong password policies, MFA, account lockout, privileged access management, anomalous-login monitoring, and breach checks.",
    note:
      "This often follows phishing, credential stuffing, or credentials exposed in prior breaches.",
  },
  {
    number: "6",
    title: "Execution - Scripting Interpreter",
    tag: "TA0002 - T1059",
    body:
      "Execution runs adversary-controlled code on a system. Command and Scripting Interpreter abuses tools like PowerShell, Bash, or cmd to execute commands and live off the land.",
    calloutLabel: "Defenses",
    calloutText:
      "Application control, script block logging, constrained language mode, least privilege, and EDR behavioral detection.",
    note:
      "Scripts can download payloads, move laterally, or exfiltrate data quickly.",
  },
  {
    number: "7",
    title: "Persistence",
    tag: "TA0003",
    body:
      "Persistence ensures adversaries maintain access after reboots or credential changes through registry run keys, scheduled tasks, services, startup folders, or cloud IAM backdoors.",
    calloutLabel: "Defenses",
    calloutText:
      "Baseline autoruns, monitor new services and tasks, integrity monitoring, rotate credentials, and remove unused accounts.",
    note:
      "Without finding persistence, incident response may only provide temporary relief.",
  },
  {
    number: "8",
    title: "Discovery",
    tag: "TA0007",
    body:
      "Discovery is reconnaissance inside the environment: enumerating users, groups, network shares, domain trust, cloud resources, and security tools to plan the next move.",
    calloutLabel: "Defenses",
    calloutText:
      "Honeypots, UEBA, restricted directory enumeration, tiered admin models, suspicious LDAP/AD query logging, and least-privilege access.",
    note:
      "Discovery often happens before lateral movement and privilege escalation.",
  },
];

export const workExperience = [
  {
    role: "Freelance Web & IT Support",
    company: "Independent Projects",
    period: "2026 - Present",
    description:
      "Building small web projects, supporting technical workflows, organizing tool setups, and documenting practical fixes for clients and personal project work.",
    skills: ["Web Development", "Technical Support", "Workflow Automation"],
  },
  {
    role: "IT Support Intern",
    company: "Local Tech Firm",
    period: "2025 - 2026",
    description:
      "Assisted with hardware troubleshooting, software installation, network configuration, and user support for office systems.",
    skills: ["Hardware Support", "Windows Admin", "Network Basics"],
  },
];
