// src/data/siteData.ts

export const siteConfig = {
  name: "Tom Joshua",
  title: "IT Specialist & Technical VA",
  email: "tomjatn@gmail.com",
  calendlyUrl: "https://calendly.com/tomjatn/30min",
  social: {
    github: "https://github.com/ttomon",
    linkedin: "https://www.linkedin.com/in/tom-joshua-tumanan-221364315/",
  },
};

export const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/#education" },
];

export const sectionContent = {
  hero: {
    badge: "Technical Solutions Partner",
    title: "Engineered for Performance.",
    description: "I architect seamless digital ecosystems. From high-performance web apps to automated business logistics, I build the technical backbone that allows your business to scale without friction.",
    primaryCta: "Book a Discovery Call",
    secondaryCta: "Get in Touch"
  },
  services: {
    title: "My Technical Arsenal",
  },
  experience: {
    title: "Work Experience",
    subtitle: "My professional journey and track record of delivering technical solutions."
  },
  education: {
    title: "Certifications & Education"
  },
  projectsPage: {
    title: "All Projects",
    description: "A deep dive into my technical portfolio. From full-stack applications to automation scripts, here is what I've built."
  }
};

export const services = [
    {
      title: "Web Development",
      icon: "code",
      description: "Building fast, responsive websites using modern stacks (Astro, React, Tailwind). I don't just use templates; I code custom solutions."
    },
    {
      title: "Technical Automation",
      icon: "workflow",
      description: "Streamlining business workflows. I connect your tools (CRM, Email, Sheets) to save you hours of manual data entry."
    },
    {
      title: "System Administration",
      icon: "server",
      description: "Managing databases, hosting environments, and troubleshooting software issues. I handle the tech headaches so you don't have to."
    },
    {
      title: "General Virtual Assistant",
      icon: "user",
      description: "Reliable administrative support handling email management, scheduling, and customer communication to keep your operations running smoothly."
    },
    {
      title: "Executive Assistant",
      icon: "briefcase",
      description: "High-level support for entrepreneurs. I manage calendars, organize meetings, and handle sensitive communications so you can focus on growth."
    },
    {
      title: "Data Entry Specialist",
      icon: "data",
      description: "Accurate and fast data processing. Transcribing information, managing spreadsheets, and maintaining database integrity with high attention to detail."
    },
    {
      title: "SEO Support",
      icon: "search",
      description: "Optimizing content and managing on-page SEO basics to improve visibility. Keyword research, meta tags, and site audits."
    }
  ];

  export const projects = [
    {
      title: "1Up Blood Donation System",
      role: "Lead Developer", // Simple and accurate
      status: "Ongoing",
      description: "A digital management system for blood banks. It helps staff track inventory levels in real-time and schedule donors efficiently. Built to replace manual record-keeping.",
      techStack: ["PHP", "MySQL", "Bootstrap", "Database Design"],
      link: "https://1up-donation.free.nf/?i=1",
      imagePath: "/1up-project.png"
    },
    {
      title: "Sky Pulse Weather App",
      role: "Mobile Developer",
      status: "Completed",
      description: "A straightforward weather app that provides local forecasts. It connects to weather APIs to show real-time conditions based on the user's location.",
      techStack: ["Mobile Dev", "API Integration", "UI Design"],
      link: "https://drive.google.com/file/d/1YnaVtw5lgnPo2T6tb5N425dDz4NUeMGP/view?usp=sharing",
      imagePath: "/sky-pulse.png" 
    }
  ];

  export const credentials = [
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    year: "2026",
    imagePath: "/hardware-basics-cisco.jpg",
    link: "https://www.credly.com/badges/abbfe97d-e2df-4e78-bf9f-f3b942b4ef68/public_url" 
  },
  {
    title: "Computer Systems Servicing NC II",
    issuer: "TESDA",
    year: "2025",
    imagePath: "/computer-systems-servicing-nc-ii.jpg",
    link: "https://t2mis.tesda.gov.ph/Learners/S/770073006C007900510041004D00460067006700550071006E006C0066007400440057004D006D006E006E006C0057006D003600490051004900730051006D0049006200590052004100340055004B003300450073003D00"
  }
];

export const workExperience = [
  {
    role: "Freelance Technical VA",
    company: "Upwork / Direct Clients",
    period: "2026 - Present",
    description: "Providing technical assistance to businesses, managing CRM systems, and automating workflows. specialized in troubleshooting and system optimization.",
    skills: ["Automation", "CRM Management", "Technical Support"]
  },
  {
    role: "IT Support Intern",
    company: "Local Tech Firm",
    period: "2025 - 2026",
    description: "Assisted in network configuration, hardware troubleshooting, and software installation for office systems.",
    skills: ["Network Config", "Hardware Repair", "Windows Admin"]
  }
];