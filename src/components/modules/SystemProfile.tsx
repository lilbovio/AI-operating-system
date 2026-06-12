"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ModulePanel } from "@/components/ui/ModulePanel";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function SystemProfile() {
  return (
    <section id="profile" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Module 01"
          title="System Profile"
          description={profile.bio.headline}
        />

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 space-y-4">
            {profile.bio.paragraphs.map((para, i) => (
              <ModulePanel key={i} delay={i}>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[10px] text-white/20">
                      PARAGRAPH_{String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {para}
                  </p>
                </div>
              </ModulePanel>
            ))}
          </div>

          <div className="md:col-span-2">
            <ModulePanel delay={3}>
              <div className="p-6">
                <p className="font-mono text-[10px] text-electric tracking-widest uppercase mb-4">
                  System Attributes
                </p>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {profile.bio.attributes.map((attr) => (
                    <motion.div
                      key={attr.label}
                      variants={fadeUp}
                      className="border-b border-white/5 pb-3 last:border-0"
                    >
                      <p className="font-mono text-[10px] text-white/30 uppercase tracking-wider mb-1">
                        {attr.label}
                      </p>
                      <p className="text-white text-sm font-medium">
                        {attr.value}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ModulePanel>
          </div>
        </div>
      </div>
    </section>
  );
}
