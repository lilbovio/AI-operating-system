"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

const bootLines = [
  "Initializing Neural Core...",
  "Loading system modules...",
  "Establishing knowledge graph...",
  "Syncing project registry...",
  "Calibrating interface layers...",
  "Authentication: OPERATOR_VERIFIED",
  `System ready — ${profile.systemId}`,
];

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 280);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setDone(true), 600);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    if (done) {
      const timer = setTimeout(onComplete, 400);
      return () => clearTimeout(timer);
    }
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-md px-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-electric animate-pulse" />
              <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                System Boot
              </span>
            </div>
            <div className="space-y-2 font-mono text-sm">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    i === visibleLines - 1 ? "text-electric" : "text-white/40"
                  }
                >
                  <span className="text-white/20 mr-2">{">"}</span>
                  {line}
                </motion.p>
              ))}
              {visibleLines < bootLines.length && (
                <span className="inline-block w-2 h-4 bg-electric/80 animate-pulse" />
              )}
            </div>
            <div className="mt-8 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-electric"
                initial={{ width: "0%" }}
                animate={{
                  width: `${(visibleLines / bootLines.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
