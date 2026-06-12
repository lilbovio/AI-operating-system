import type { SkillEvidence } from "@/types";

export const skillEvidence: SkillEvidence[] = [
  {
    id: "fullstack",
    domain: "Full-Stack Engineering",
    evidence: [
      "Built and deployed OnboardIQ — full SaaS with auth, dashboards, and analytics",
      "POS System with real-time sync, offline resilience, and payment processing",
      "End-to-end ownership: database schema → API → UI → deployment",
    ],
    relatedProjects: ["onboardiq", "pos-system"],
  },
  {
    id: "ai-systems",
    domain: "AI & Machine Learning",
    evidence: [
      "NeuralBridge — 1st place hackathon AI accessibility assistant",
      "LLM integration, computer vision pipelines, and NLP processing",
      "CortexOS research — multi-agent orchestration architecture",
    ],
    relatedProjects: ["hackathon-ai", "future-ai"],
  },
  {
    id: "system-design",
    domain: "System Design & Architecture",
    evidence: [
      "Designed scalable onboarding workflows with background job processing",
      "Offline-first POS with WebSocket sync and conflict resolution",
      "Cloud deployment with CI/CD, monitoring, and containerization",
    ],
    relatedProjects: ["onboardiq", "pos-system"],
  },
  {
    id: "product",
    domain: "Product Engineering",
    evidence: [
      "User-centered design with role-based dashboards and adaptive UX",
      "Iterative development with measurable impact metrics",
      "Problem-first approach — ship MVPs, gather feedback, iterate",
    ],
    relatedProjects: ["onboardiq", "hackathon-ai"],
  },
  {
    id: "devops",
    domain: "DevOps & Infrastructure",
    evidence: [
      "Docker containerization and cloud deployment pipelines",
      "GitHub Actions CI/CD with automated testing and staging",
      "Database optimization and production monitoring setup",
    ],
    relatedProjects: ["onboardiq", "pos-system"],
  },
];

export const osModules = [
  {
    id: "identity" as const,
    label: "Identity Core",
    shortLabel: "Identity",
    icon: "Cpu",
    description: "Neural core & operator identity",
  },
  {
    id: "profile" as const,
    label: "System Profile",
    shortLabel: "Profile",
    icon: "User",
    description: "Intelligence report & background",
  },
  {
    id: "projects" as const,
    label: "Applications",
    shortLabel: "Projects",
    icon: "AppWindow",
    description: "Deployed products & systems",
  },
  {
    id: "stack" as const,
    label: "Tech Ecosystem",
    shortLabel: "Stack",
    icon: "Network",
    description: "Technology knowledge graph",
  },
  {
    id: "skills" as const,
    label: "Capabilities",
    shortLabel: "Skills",
    icon: "Zap",
    description: "Demonstrated competencies",
  },
  {
    id: "missions" as const,
    label: "Mission Log",
    shortLabel: "Missions",
    icon: "ScrollText",
    description: "Timeline & achievements",
  },
  {
    id: "contact" as const,
    label: "Comm Terminal",
    shortLabel: "Contact",
    icon: "Terminal",
    description: "Establish connection",
  },
];
