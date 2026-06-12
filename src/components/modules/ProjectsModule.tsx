"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ProjectDetail } from "./ProjectDetail";
import type { Project } from "@/types";
import { fadeUp } from "@/lib/animations";

export function ProjectsModule() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Module 02"
          title="Deployed Applications"
          description="Products and systems running within the operating environment. Select an application to inspect."
        />

        <div className="space-y-3">
          {projects.map((project, i) => {
            const statusVariant =
              project.status === "deployed"
                ? "success"
                : project.status === "development"
                  ? "warning"
                  : "info";

            return (
              <motion.button
                key={project.id}
                onClick={() => setSelected(project)}
                className="group w-full text-left relative rounded-xl border border-white/[0.06] bg-graphite/30 hover:bg-graphite/60 backdrop-blur-sm transition-all duration-300 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ x: 4 }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: project.accent }}
                />

                <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6">
                  <div
                    className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl border border-white/[0.06] shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}20, transparent)`,
                    }}
                  >
                    <Circle
                      size={16}
                      style={{ color: project.accent }}
                      fill={project.accent}
                      fillOpacity={0.3}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-electric transition-colors truncate">
                        {project.name}
                      </h3>
                      <Badge variant={statusVariant} className="shrink-0">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-white/40 truncate">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-white/25"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="font-mono text-[10px] text-white/25">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-white/20 group-hover:text-electric transition-colors shrink-0"
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {selected && (
        <ProjectDetail project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
