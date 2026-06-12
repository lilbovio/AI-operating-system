"use client";

import { motion } from "framer-motion";
import { skillEvidence } from "@/data/skills";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ModulePanel } from "@/components/ui/ModulePanel";
import { fadeUp } from "@/lib/animations";

export function SkillsModule() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Module 04"
          title="Demonstrated Capabilities"
          description="Skills evidenced through real projects, technologies, and measurable outcomes — not self-assessed ratings."
        />

        <div className="space-y-6">
          {skillEvidence.map((skill, i) => (
            <ModulePanel key={skill.id} delay={i}>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/3">
                    <p className="font-mono text-[10px] text-electric tracking-widest uppercase mb-2">
                      Domain {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.domain}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skill.relatedProjects.map((projId) => {
                        const proj = projects.find((p) => p.id === projId);
                        return proj ? (
                          <span
                            key={projId}
                            className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/[0.06]"
                          >
                            {proj.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-3">
                    {skill.evidence.map((item, j) => (
                      <motion.div
                        key={j}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                      >
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-electric/60 shrink-0" />
                        <p className="text-sm text-white/60 leading-relaxed">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ModulePanel>
          ))}
        </div>
      </div>
    </section>
  );
}
