import { Project, SkillCategory, Certification, CodingProfile } from '../types';

export const PERSONAL_INFO = {
  name: "DARLA RENUSRI",
  headline: "Computer Science Undergraduate | Software Developer",
  statusBadge: "Open to Software Engineering Opportunities",
  shortIntro: "Computer Science undergraduate with strong programming and problem-solving skills, passionate about building efficient software solutions and real-world applications.",
  institution: "Vignan’s Institute of Information Technology, Visakhapatnam",
  degree: "B.Tech – Computer Science and Engineering",
  timeline: "2023–2027",
  cgpa: "9.17/10",
  email: "23l31a0548.viit.cse@gmail.com",
  phone: "7569072550",
  linkedin: "https://www.linkedin.com/in/renusri-darla-a2a1682a2/",
  github: "https://github.com/Renusridarla",
  interests: [
    "Software Development",
    "Full-Stack Development",
    "Data Structures & Algorithms",
    "Problem Solving"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java" },
      { name: "Python" }
    ]
  },
  {
    title: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React.js" }
    ]
  },
  {
    title: "Backend & Database",
    iconName: "Database",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" }
    ]
  },
  {
    title: "Tools",
    iconName: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" }
    ]
  },
  {
    title: "CS Fundamentals",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Database Management Systems" },
      { name: "Operating Systems" },
      { name: "Computer Networks" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "team-collaboration-board",
    title: "Team Collaboration Board",
    subtitle: "MERN Platform with Role-Based Access Control",
    description: "Developed a MERN-based team collaboration platform with secure JWT authentication and role-based access control.",
    features: [
      "JWT Authentication",
      "Role-Based Access Control",
      "REST APIs",
      "Project Management",
      "Task Management",
      "Interactive Dashboard",
      "Task Assignment",
      "Status Updates"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/Renusridarla/team-collaboration-board",
    liveUrl: "https://github.com/Renusridarla/team-collaboration-board",
    image: "/projects/team-collaboration.jpg",
    badge: "Full-Stack MERN"
  },
  {
    id: "traverge",
    title: "Traverge – Smart Travel Planning Platform",
    subtitle: "Full-Stack Travel Planning & Budget Management",
    description: "Developed a full-stack travel planning platform using the MERN stack with budget estimation and trip planning features.",
    features: [
      "Trip Planning",
      "Budget Estimation",
      "Weather API Integration",
      "REST APIs",
      "MongoDB Data Management",
      "Travel Itinerary Organization"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/Renusridarla/Traverge",
    liveUrl: "https://github.com/Renusridarla/Traverge",
    image: "/projects/traverge.jpg",
    badge: "Smart Travel App"
  },
  {
    id: "pest-spread-prediction",
    title: "Pest Spread Prediction",
    subtitle: "Cellular Automata Agricultural Simulation",
    description: "Developed a pest spread prediction application using Cellular Automata to simulate how pests spread across agricultural regions.",
    features: [
      "Cellular Automata Simulation",
      "Pest Spread Visualization",
      "Time-Based Spread Analysis",
      "Agricultural Risk Visualization"
    ],
    techStack: ["Python", "Cellular Automata", "Data Visualization"],
    githubUrl: "https://github.com/Renusridarla/v0-pest-spread-simulation",
    liveUrl: "https://github.com/Renusridarla/v0-pest-spread-simulation",
    image: "/projects/pest-simulation.jpg",
    badge: "Computational Simulation"
  }
];

export const INTERNSHIP = {
  role: "Web Development Intern",
  company: "Vault of Codes",
  period: "June – July 2025",
  responsibilities: [
    "Developed responsive web projects using HTML, CSS, JavaScript and Local Storage.",
    "Built interactive web applications to strengthen front-end development skills.",
    "Implemented client-side data storage using Local Storage.",
    "Designed responsive and user-friendly interfaces with cross-device compatibility."
  ]
};

export const ACHIEVEMENTS = {
  stats: [
    { value: 300, suffix: "+", label: "LeetCode Problems Solved", iconName: "Code2" },
    { value: 2, suffix: "-Star", label: "CodeChef Rating", iconName: "Award" },
    { value: 120, suffix: "+", label: "Google Cloud Skill Boost Arcade Badges", iconName: "ShieldCheck" }
  ],
  hackathonsNote: "Participated in multiple internal college-level hackathons and coding events."
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Python Essentials & Networking",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Core Python programming, network security principles, and socket fundamentals."
  },
  {
    title: "Web Full Stack Developer & AI-ML Fundamentals",
    issuer: "Eduskills",
    date: "2024",
    description: "Full-stack web application development architecture and artificial intelligence foundational concepts."
  }
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    platform: "GitHub",
    username: "Renusridarla",
    url: "https://github.com/Renusridarla",
    iconName: "Github",
    highlight: "Repositories & Open Source Code",
    color: "from-purple-600 to-indigo-600"
  },
  {
    platform: "LinkedIn",
    username: "renusri-darla",
    url: "https://www.linkedin.com/in/renusri-darla-a2a1682a2/",
    iconName: "Linkedin",
    highlight: "Professional Network & Connect",
    color: "from-blue-600 to-violet-600"
  },
  {
    platform: "LeetCode",
    username: "Renusri",
    url: "https://leetcode.com/u/Renusri/",
    iconName: "Terminal",
    highlight: "300+ Problems Solved",
    color: "from-amber-500 to-purple-600"
  },
  {
    platform: "CodeChef",
    username: "renu 2318",
    url: "https://www.codechef.com/users/renu2318",
    iconName: "Zap",
    highlight: "2-Star Rating Competitive Coder",
    color: "from-purple-500 to-pink-600"
  }
];
