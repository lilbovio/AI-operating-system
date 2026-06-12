import type { TechCategory, TechNode } from "@/types";

export const techCategories: { id: TechCategory; label: string; color: string }[] = [
  { id: "frontend", label: "Frontend", color: "#0066FF" },
  { id: "backend", label: "Backend", color: "#00D4FF" },
  { id: "databases", label: "Databases", color: "#22D3EE" },
  { id: "cloud", label: "Cloud", color: "#60A5FA" },
  { id: "ai-ml", label: "AI/ML", color: "#38BDF8" },
  { id: "devops", label: "DevOps", color: "#94A3B8" },
  { id: "tools", label: "Tools", color: "#CBD5E1" },
];

export const techNodes: TechNode[] = [
  { id: "nextjs", name: "Next.js", category: "frontend", connections: ["react", "typescript", "vercel"], proficiency: "core" },
  { id: "react", name: "React", category: "frontend", connections: ["typescript", "tailwind"], proficiency: "core" },
  { id: "typescript", name: "TypeScript", category: "frontend", connections: ["nodejs", "nextjs"], proficiency: "core" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", connections: ["react", "nextjs"], proficiency: "core" },
  { id: "nodejs", name: "Node.js", category: "backend", connections: ["express", "typescript", "postgresql"], proficiency: "core" },
  { id: "express", name: "Express", category: "backend", connections: ["nodejs", "postgresql"], proficiency: "proficient" },
  { id: "python", name: "Python", category: "backend", connections: ["fastapi", "pytorch", "tensorflow"], proficiency: "proficient" },
  { id: "fastapi", name: "FastAPI", category: "backend", connections: ["python", "postgresql"], proficiency: "proficient" },
  { id: "postgresql", name: "PostgreSQL", category: "databases", connections: ["prisma", "nodejs"], proficiency: "core" },
  { id: "prisma", name: "Prisma", category: "databases", connections: ["postgresql", "nextjs"], proficiency: "proficient" },
  { id: "redis", name: "Redis", category: "databases", connections: ["nodejs", "docker"], proficiency: "learning" },
  { id: "aws", name: "AWS", category: "cloud", connections: ["docker", "kubernetes"], proficiency: "proficient" },
  { id: "vercel", name: "Vercel", category: "cloud", connections: ["nextjs", "docker"], proficiency: "core" },
  { id: "docker", name: "Docker", category: "devops", connections: ["kubernetes", "github-actions"], proficiency: "proficient" },
  { id: "kubernetes", name: "Kubernetes", category: "devops", connections: ["docker", "aws"], proficiency: "learning" },
  { id: "github-actions", name: "GitHub Actions", category: "devops", connections: ["docker", "vercel"], proficiency: "proficient" },
  { id: "pytorch", name: "PyTorch", category: "ai-ml", connections: ["python", "tensorflow"], proficiency: "learning" },
  { id: "tensorflow", name: "TensorFlow", category: "ai-ml", connections: ["python", "pytorch"], proficiency: "learning" },
  { id: "openai", name: "OpenAI API", category: "ai-ml", connections: ["python", "langchain"], proficiency: "proficient" },
  { id: "langchain", name: "LangChain", category: "ai-ml", connections: ["openai", "python"], proficiency: "learning" },
  { id: "git", name: "Git", category: "tools", connections: ["github-actions"], proficiency: "core" },
  { id: "figma", name: "Figma", category: "tools", connections: ["react", "tailwind"], proficiency: "proficient" },
];
