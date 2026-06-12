"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn("mb-12", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <p className="font-mono text-xs tracking-widest uppercase text-electric mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-white/50 max-w-2xl text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
