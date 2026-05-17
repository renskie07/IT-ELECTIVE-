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
  name: "Renier C. Nigparanon",
  title: "Web Portfolio",
  description:
    "A student portfolio highlighting academic resume, capstone storytelling, and practical experience for 4BSIT-2.",
  email: "reniernigs07@gmail.com",
  resumeUrl: "/profile-picure.pdf",
  siteUrl: "",
  social: {
    github: "",
    linkedin: "",
  },
};

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Education", href: "/education" },
];

export const freelancePlatforms = [
  { name: "Upwork", status: "Coming soon" },
  { name: "Fiverr", status: "Coming soon" },
  { name: "Freelancer", status: "Coming soon" },
];

export const sectionContent = {
  hero: {
    badge: "4BSIT-2 | New Era University",
    titleLine1: "Hi, I’m Renier,",
    titleLine2: "Information Technology Student",
    description:
      "A BSIT student presenting the StreetFix capstone and a clean portfolio focused on academic growth, project delivery, and practical IT experience.",
    primaryCta: "See My Capstone",
    contactCta: "Email Renier",
    proofPoints: [
      "Resume-ready academic profile",
      "StreetFix capstone storytelling",
      "Customer service and operations experience",
    ],
  },
  about: {
    title: "4BSIT-2 portfolio with real service experience.",
    description:
      "I blend BSIT studies with delivery and event work to build a professional portfolio that highlights my resume, capstone, and practical skills.",
    highlights: [
      "Third-year BSIT student at New Era University.",
      "Experience supporting delivery and event operations across Metro Manila.",
      "Creating a portfolio that reflects both career growth and academic focus.",
    ],
  },
  services: {
    title: "Portfolio Focus",
    subtitle:
      "Key strengths and student-ready abilities showcased for 4BSIT-2 and future IT pathways.",
  },
  experience: {
    title: "Experience",
    subtitle:
      "Roles and responsibilities that show service, coordination, and professional habits.",
  },
  education: {
    title: "Credentials & Education",
    subtitle:
      "Academic background, training, and certifications that support my BSIT journey.",
  },
  educationPage: {
    kicker: "4BSIT-2",
    title: "4BSIT-2 Academic Focus",
    description:
      "Selected topics and coursework from the BSIT program, presented as part of a student portfolio and capstone narrative.",
  },
  techStackSection: {
    title: "Tools & Skills",
    subtitle:
      "Software, office skills, and student tools used for projects, academic work, and event coordination.",
    badge: "Student Toolkit",
  },
  resume: {
    title: "Resume",
    description:
      "A full student resume with education, work experience, skills, and a capstone showcase.",
    readyLabel: "Download Resume",
    pendingLabel: "Resume Page Available",
  },
  footer: {
    ctaLine1: "Ready to review 4BSIT-2 work?",
    ctaLine2: "Let's connect and share the capstone story.",
    ctaButton: "Email Renier",
    connectLabel: "Connect with Renier",
    copyright: "All Rights Reserved.",
  },
  projectsPage: {
    title: "Portfolio & Resume",
    description:
      "Academic profile, Street Fix capstone UI, and IT Elective 6 coursework. Contact details are limited to protect privacy.",
  },
};

export const stats = [
  { value: "1", label: "Featured capstone", highlight: true },
  { value: "5+", label: "Service experience roles", highlight: false },
  { value: "3", label: "Academic years in BSIT", highlight: false },
  { value: "4", label: "Resume-ready strengths", highlight: false },
];

export const techStack = {
  automation: {
    title: "Office & Academic Tools",
    description: "Spreadsheet, presentation, and document skills for school and coordination.",
    color: "emerald",
    tools: ["Microsoft Excel", "PowerPoint", "Google Sheets", "Google Docs", "Notion", "Canva"],
  },
  development: {
    title: "Web & Study Tools",
    description: "Portfolio presentation, research, and academic documentation tools.",
    color: "blue",
    tools: ["Astro", "HTML", "CSS", "JavaScript", "Tailwind CSS", "VS Code"],
  },
  admin: {
    title: "Communication & Coordination",
    description: "Teamwork, event support, and customer-facing skills.",
    color: "purple",
    tools: ["Email", "Slack", "Task Planning", "Field Coordination", "Customer Service", "Time Management"],
  },
};

export const services = [
  {
    title: "Academic Capstone Presentation",
    icon: "code",
    description:
      "Present a capstone portfolio that explains problem-solving, student research, and technical learning in a clear format.",
  },
  {
    title: "Professional Resume",
    icon: "server",
    description:
      "Showcase education, work experience, and skills in a student-friendly layout that hiring panels can review quickly.",
  },
  {
    title: "Student Project Storytelling",
    icon: "workflow",
    description:
      "Communicate what was learned, how tasks were completed, and why academic work matters in real settings.",
  },
  {
    title: "Event & Delivery Support",
    icon: "briefcase",
    description:
      "Highlight service roles, coordination experience, and practical habits from delivery and event work.",
  },
];

export const projects: Project[] = [
  {
    title: "StreetFix Capstone Project",
    role: "Capstone Lead",
    status: "Completed",
    description:
      "A community street repair platform designed to document road conditions, manage repair proposals, and present the StreetFix capstone using the proposal and visual references from PROPOSAL STREETFIX(1).pdf.",
    problem:
      "Street infrastructure issues are hard to track because repair requests, road condition imaging, and maintenance plans are scattered across documents and manual reports.",
    solution:
      "StreetFix centralizes problem reports, repair proposals, and progress visuals so stakeholders can see road conditions, prioritize fixes, and manage project documentation effectively.",
    contributions: [
      "Translated the StreetFix proposal into a structured capstone showcase for academic review.",
      "Developed the project narrative, defined user scenarios, and organized visuals from capstone.pdf into an online portfolio presentation.",
      "Prepared the technical summary, proposal rationale, and outcome highlights for classroom and stakeholder review.",
    ],
    outcome:
      "A clear capstone presentation that connects street repair challenges to a documented solution, complete with proposal details and illustrative images from the capstone package.",
    techStack: ["HTML", "CSS", "Responsive Design", "Documentation", "Capstone Presentation"],
    repoUrl: "",
    demoUrl: "",
    imagePath: "/streetfix/streetfix-login.png",
    imageAlt: "StreetFix login screen showing the community reporting interface",
  },
  {
    title: "StreetFix Admin Dashboard",
    role: "Product Designer",
    status: "Completed",
    description:
      "An admin dashboard view for StreetFix that shows total reports, active issues, and fixed cases while providing a quick action panel for operators.",
    problem:
      "Municipal staff need a centralized view of reported issues, priorities, and progress to manage street repairs efficiently.",
    solution:
      "The dashboard organizes key metrics, report summaries, and shortcuts for tracking progress and handling community issues.",
    contributions: [
      "Designed the admin dashboard layout for concise issue tracking.",
      "Defined priority indicators, quick action cards, and report navigation for field operations.",
      "Aligned the dashboard visuals with StreetFix branding and user flow expectations.",
    ],
    outcome:
      "A clear summary interface that supports StreetFix administrators in reviewing issue status and prioritizing road repairs.",
    techStack: ["UI Design", "Dashboard Layout", "User Workflow"],
    repoUrl: "",
    demoUrl: "",
    imagePath: "/streetfix/streetfix-dashboard.png",
    imageAlt: "StreetFix admin dashboard screen showing report summaries and quick actions",
  },
  {
    title: "StreetFix Reporting Flow",
    role: "UX Designer",
    status: "In Progress",
    description:
      "A user flow for submitting a street issue report, selecting location, and uploading photos to document damaged roads and sidewalks.",
    problem:
      "Citizens need an easy way to report infrastructure issues with photos and location details without filling out complex forms.",
    solution:
      "The StreetFix reporting flow simplifies issue submission using photo reports, GPS pinning, and issue categories.",
    contributions: [
      "Designed the issue report screen with category selection and camera/gallery upload options.",
      "Improved the submission workflow for faster community reporting.",
      "Enabled clear guidance for location selection and issue description entry.",
    ],
    outcome:
      "A streamlined reporting workflow that empowers users to log road and sidewalk issues with supporting images.",
    techStack: ["UX", "Mobile UI", "Reporting Workflow"],
    repoUrl: "",
    demoUrl: "",
    imagePath: "/streetfix/streetfix-report.png",
    imageAlt: "StreetFix report submission screen with issue categories and location picker",
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
    role: "Event Supervisor",
    company: "A AND R Event Catering Services",
    period: "March 2022 - 2023",
    description:
      "Managed event crew operations, coordinated schedules, and ensured seamless service delivery for catered events in Taguig City.",
    skills: ["Event Coordination", "Team Leadership", "Client Support"],
  },
  {
    role: "Delivery Assistant",
    company: "Local Delivery Services",
    period: "March 2020 - May 2021",
    description:
      "Handled on-time deliveries, supported logistics flow, and maintained positive communication with clients and team members.",
    skills: ["Logistics", "Time Management", "Customer Service"],
  },
];
