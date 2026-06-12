"use client";

import { motion } from "framer-motion";
import { missionLog } from "@/data/timeline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

const typeLabels: Record<string, string> = {
  education: "EDU",
  certification: "CERT",
  hackathon: "HACK",
  project: "PROJ",
  career: "CAREER",
};

const statusVariant: Record<string, "success" | "warning" | "info"> = {
  completed: "success",
  "in-progress": "warning",
  upcoming: "info",
};

export function MissionLog() {
  return (
    <section id="missions" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Module 05"
          title="Mission Log"
          description="Chronological record of education, projects, hackathons, certifications, and career progression."
        />

        <div className="relative">
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-electric/30 via-white/10 to-transparent" />

          <div className="space-y-1">
            {missionLog.map((entry, i) => (
              <motion.div
                key={entry.id}
                className="relative flex gap-4 md:gap-6 pl-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i * 0.5}
              >
                <div className="relative z-10 flex items-start pt-5">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl border flex items-center justify-center shrink-0 ${
                      entry.status === "in-progress"
                        ? "border-electric/30 bg-electric/10"
                        : entry.status === "upcoming"
                          ? "border-white/10 bg-white/5"
                          : "border-white/[0.08] bg-graphite/50"
                    }`}
                  >
                    <span className="font-mono text-[9px] text-white/40">
                      {typeLabels[entry.type]}
                    </span>
                  </div>
                </div>

                <div className="flex-1 py-4 border-b border-white/[0.04] last:border-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-white/30">
                      {formatDate(entry.date)}
                    </span>
                    <Badge variant={statusVariant[entry.status]}>
                      {entry.status}
                    </Badge>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
