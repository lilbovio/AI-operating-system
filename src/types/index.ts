export type ModuleId =
  | "identity"
  | "profile"
  | "projects"
  | "stack"
  | "skills"
  | "missions"
  | "contact";

export interface OSModule {
  id: ModuleId;
  label: string;
  shortLabel: string;
  icon: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  tagline: string;
  status: "deployed" | "development" | "concept";
  category: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  impact: string[];
  github?: string;
  demo?: string;
  accent: string;
}

export interface TechNode {
  id: string;
  name: string;
  category: TechCategory;
  connections: string[];
  proficiency: "core" | "proficient" | "learning";
}

export type TechCategory =
  | "frontend"
  | "backend"
  | "databases"
  | "cloud"
  | "ai-ml"
  | "devops"
  | "tools";

export interface MissionEntry {
  id: string;
  date: string;
  type: "education" | "certification" | "hackathon" | "project" | "career";
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
}

export interface SkillEvidence {
  id: string;
  domain: string;
  evidence: string[];
  relatedProjects: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  positioning: string;
  currentFocus: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  location: string;
  systemId: string;
  bio: {
    headline: string;
    paragraphs: string[];
    attributes: { label: string; value: string }[];
  };
}
