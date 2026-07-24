export type Project = {
  id: number;
  title: string;
  duration: string;
  description: string;
  tech: string[];
  role: string;
  category: string;
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Heart Forest: AR/VR Educational Game",
    duration: "June 2025 – October 2025",
    description:
      "Developed an educational AR/VR game designed to create an engaging and interactive learning experience through storytelling and immersive technology.",
    tech: ["Unity 3D", "Artivive", "Canva"],
    role: "Designed game characters & storyline, coordinated with the VR team to integrate character models, applied AR technology within the game, designed presentation slides and presented the project.",
    category: "AR/VR",
    links: [{ label: "View Presentation", url: "https://canva.link/0a8ujdr8i9a9v0e" }],
  },
  {
    id: 2,
    title: "MSU EV BUS: User Experience Design",
    duration: "November 2024 – March 2025",
    description:
      "Designed the user experience for the MSU EV BUS application by identifying user needs and improving the overall system flow.",
    tech: ["Figma", "Canva"],
    role: "Conducted user data collection, analyzed user requirements and system design, designed presentation slides.",
    category: "UI/UX",
    links: [
      { label: "View Canva Slide", url: "https://canva.link/hrt2hhukigx2tyj" },
      { label: "View Figma Prototype", url: "https://www.figma.com/proto/CTNZqeJi9uxi552a6Sviob" },
    ],
  },
  {
    id: 3,
    title: "Smart ICU: Length of Stay (LOS) & Vital Sign Analysis",
    duration: "November 2025 – March 2026",
    description:
      "Analyzed factors affecting ICU Length of Stay (LOS) and changes in patients' vital signs to support data-driven healthcare decisions.",
    tech: ["Python", "R", "Canva"],
    role: "Performed data analysis, interpreted analytical results, prepared presentation materials.",
    category: "Data Analytics",
    links: [{ label: "View Presentation", url: "https://canva.link/doekgp527ahlmim" }],
  },
  {
    id: 4,
    title: "Flaunt Fit",
    duration: "November 2024 – March 2025",
    description:
      "Developed a business information system for an online fashion platform following the Software Development Life Cycle (SDLC).",
    tech: ["Oracle PL/SQL", "Draw.io", "Canva"],
    role: "Project Manager — Coordinated project planning and teamwork, managed project progress and communication.",
    category: "Business System",
    links: [{ label: "View Presentation", url: "https://canva.link/7ro7d3brlth3cq1" }],
  },
  {
    id: 5,
    title: "Emotional Waste Bin: Sound Therapy Installation",
    duration: "June 2025 – October 2025",
    description:
      "Developed an interactive art installation using sound as a medium for emotional expression and stress relief.",
    tech: ["Canva"],
    role: "Designed project concepts, analyzed project data, designed presentation materials.",
    category: "Design",
    links: [{ label: "View Presentation", url: "https://canva.link/ysu79xw5gtkp04w" }],
  },
  {
    id: 6,
    title: "AI Sales & Customer Analytics System for SMEs",
    duration: "November 2025 – March 2026",
    description:
      "Designed an AI-powered solution to support sales management and customer data analysis for small and medium-sized enterprises (SMEs).",
    tech: ["n8n", "Canva"],
    role: "Designed presentation slides, presented the project.",
    category: "Business Analysis",
    links: [{ label: "View Presentation", url: "https://canva.link/4iy4jp5p5bzy2br" }],
  },
  {
    id: 7,
    title: "Electric Vehicle Growth Forecasting Using Machine Learning",
    duration: "June 2025 – October 2025",
    description:
      "Conducted research to forecast electric vehicle adoption using machine learning models and historical economic data.",
    tech: ["Altair AI Studio", "Excel", "Canva"],
    role: "Collected and analyzed datasets, reviewed related research papers, built and evaluated forecasting models, presented research findings.",
    category: "Data Analytics",
    links: [{ label: "View Presentation", url: "https://canva.link/cy975v4yjt1vnel" }],
  },
  {
    id: 8,
    title: "ICU Operational & Clinical Analytics Dashboard",
    duration: "November 2025 – March 2026",
    description:
      "Developed an interactive dashboard to visualize operational and clinical ICU data, supporting healthcare decision-making.",
    tech: ["Microsoft Power BI", "Canva"],
    role: "Designed dashboards, created presentation materials, presented project outcomes.",
    category: "Data Analytics",
    links: [{ label: "View Presentation", url: "https://canva.link/kjzjhznsfid59hf" }],
  },
  {
    id: 9,
    title: "Business Information System for Order History Management",
    duration: "June 2025 – October 2025",
    description:
      "Designed and developed a business information system for managing customer order history using Oracle PL/SQL.",
    tech: ["Oracle PL/SQL", "Draw.io", "Canva"],
    role: "Collaborated across all phases of the project — database design, development, testing, and presentation.",
    category: "Business System",
    links: [{ label: "View Presentation", url: "https://canva.link/mc7x1kyssna5g9j" }],
  },
];

export const skillCategories = {
  "Business Analysis": [
    "Requirements Gathering",
    "Business Process Analysis",
    "Stakeholder Communication",
    "Business Intelligence (BI)",
  ],
  "Data Analytics": ["SQL", "Python", "R", "Microsoft Power BI", "Microsoft Excel", "Altair AI Studio"],
  Database: ["Oracle PL/SQL"],
  "UI/UX": ["Figma", "Draw.io"],
  Productivity: ["Microsoft Office", "Canva"],
} as const;
