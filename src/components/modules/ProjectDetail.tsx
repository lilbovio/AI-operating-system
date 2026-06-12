"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code, Layers, Target, Zap } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  if (!project) return null;

  const statusVariant =
    project.status === "deployed"
      ? "success"
      : project.status === "development"
        ? "warning"
        : "info";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-void/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-2xl border border-white/[0.08] bg-graphite shadow-2xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          role="dialog"
          aria-label={`${project.name} details`}
        >
          {/* Window chrome */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-graphite/95 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                  aria-label="Close"
                />
                <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
              </div>
              <span className="font-mono text-xs text-white/40">
                {project.name} — Application View
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-white/40 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge variant={statusVariant}>{project.status}</Badge>
                <span className="font-mono text-xs text-white/30">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-white/50">{project.tagline}</p>
            </div>

            {/* Preview placeholder */}
            <div
              className="relative h-48 md:h-56 rounded-xl overflow-hidden border border-white/[0.06]"
              style={{
                background: `linear-gradient(135deg, ${project.accent}15, transparent 60%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Layers
                    size={32}
                    className="mx-auto mb-2 text-white/20"
                    style={{ color: project.accent }}
                  />
                  <p className="font-mono text-xs text-white/30">
                    Application Preview — Add screenshots here
                  </p>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}40, transparent)` }}
              />
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={14} className="text-electric" />
                  <h4 className="font-mono text-xs text-electric uppercase tracking-wider">
                    Problem
                  </h4>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={14} className="text-cyan" />
                  <h4 className="font-mono text-xs text-cyan uppercase tracking-wider">
                    Solution
                  </h4>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h4 className="font-mono text-xs text-white/30 uppercase tracking-wider mb-3">
                Architecture
              </h4>
              <div className="space-y-2">
                {project.architecture.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/50"
                  >
                    <span className="font-mono text-[10px] text-electric/50 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-xs text-white/30 uppercase tracking-wider mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 text-white/60 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div>
              <h4 className="font-mono text-xs text-white/30 uppercase tracking-wider mb-3">
                Impact
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.impact.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                  >
                    <div className="w-1 h-1 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.demo && (
                <Button
                  variant="primary"
                  href={project.demo}
                  icon={<ExternalLink size={14} />}
                >
                  Live Demo
                </Button>
              )}
              {project.github && (
                <Button
                  variant="secondary"
                  href={project.github}
                  icon={<Code size={14} />}
                >
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
