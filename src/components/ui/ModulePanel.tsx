"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface ModulePanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ModulePanel({ children, className, delay = 0 }: ModulePanelProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-white/[0.06] bg-graphite/50 backdrop-blur-xl",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      custom={delay}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
