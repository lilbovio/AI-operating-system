import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "onboardiq",
    name: "OnboardIQ",
    tagline: "Intelligent employee onboarding platform",
    status: "deployed",
    category: "SaaS · HR Tech",
    problem:
      "Organizations lose productivity and engagement during employee onboarding due to fragmented processes, manual paperwork, and lack of personalized learning paths.",
    solution:
      "OnboardIQ is a full-stack onboarding platform that automates workflows, delivers adaptive training modules, and provides real-time progress analytics for HR teams and new hires.",
    architecture: [
      "Next.js frontend with role-based dashboards",
      "REST API with authentication & authorization",
      "PostgreSQL with optimized relational schema",
      "Background job processing for notifications",
      "Cloud deployment with CI/CD pipeline",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Docker",
    ],
    impact: [
      "Reduced onboarding setup time by 60%",
      "Automated 12+ manual HR workflows",
      "Built adaptive learning path engine",
      "Production deployment with monitoring",
    ],
    github: "https://github.com/yourusername/onboardiq",
    demo: "https://onboardiq-demo.vercel.app",
    accent: "#0066FF",
  },
  {
    id: "pos-system",
    name: "POS System",
    tagline: "Real-time point-of-sale for modern retail",
    status: "deployed",
    category: "Enterprise · FinTech",
    problem:
      "Small and mid-size retailers need a fast, reliable POS system that handles inventory, payments, and reporting without enterprise-level complexity or cost.",
    solution:
      "A cloud-connected POS system with real-time inventory sync, multi-payment support, receipt generation, and analytics dashboard — designed for speed and offline resilience.",
    architecture: [
      "React SPA with optimistic UI updates",
      "Express API with WebSocket real-time sync",
      "SQLite/PostgreSQL dual-mode persistence",
      "Thermal printer integration layer",
      "Role-based access for staff & managers",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "WebSockets",
      "Redis",
      "Electron",
    ],
    impact: [
      "Sub-200ms transaction processing",
      "Offline-first architecture for reliability",
      "Real-time inventory across terminals",
      "Daily sales analytics & reporting",
    ],
    github: "https://github.com/yourusername/pos-system",
    accent: "#00D4FF",
  },
  {
    id: "hackathon-ai",
    name: "NeuralBridge",
    tagline: "AI-powered accessibility assistant — Hackathon Winner",
    status: "deployed",
    category: "Hackathon · AI/ML",
    problem:
      "Visually impaired users struggle to navigate digital interfaces that lack intelligent, context-aware assistance in real time.",
    solution:
      "Built in 48 hours: an AI assistant that uses computer vision and NLP to describe UI elements, read content aloud, and provide voice-navigable interface controls.",
    architecture: [
      "Real-time screen analysis pipeline",
      "LLM-powered context understanding",
      "Voice synthesis & command recognition",
      "Browser extension + web app hybrid",
      "Edge-optimized inference layer",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "React",
      "WebRTC",
      "TensorFlow.js",
    ],
    impact: [
      "1st place — University AI Hackathon 2025",
      "Demoed to 200+ attendees",
      "Reduced navigation time by 40% in testing",
      "Open-sourced core accessibility module",
    ],
    github: "https://github.com/yourusername/neuralbridge",
    demo: "https://neuralbridge.dev",
    accent: "#22D3EE",
  },
  {
    id: "future-ai",
    name: "CortexOS",
    tagline: "Personal AI agent orchestration layer",
    status: "concept",
    category: "AI Systems · Future",
    problem:
      "Developers and power users juggle multiple AI tools without a unified interface for context, memory, and task orchestration across agents.",
    solution:
      "A conceptual AI operating layer that unifies agent communication, persistent memory, tool routing, and workflow automation into a single intelligent control plane.",
    architecture: [
      "Multi-agent orchestration engine",
      "Vector memory store with RAG pipeline",
      "Tool-use router with sandboxed execution",
      "Plugin architecture for extensibility",
      "Real-time streaming UI with observability",
    ],
    technologies: [
      "Python",
      "LangChain",
      "Pinecone",
      "Next.js",
      "WebSockets",
      "Docker",
      "Kubernetes",
    ],
    impact: [
      "Research phase — architecture designed",
      "Agent routing prototype in development",
      "Exploring multi-modal input pipelines",
      "Target: open-source AI control plane",
    ],
    accent: "#60A5FA",
  },
];
