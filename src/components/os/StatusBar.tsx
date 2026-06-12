"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-8 flex items-center justify-between px-4 md:px-6 bg-void/80 backdrop-blur-md border-b border-white/[0.04]"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <div className="flex items-center gap-4">
        <span className="font-mono text-[10px] text-white/30 tracking-wider">
          {profile.systemId}
        </span>
        <span className="hidden sm:inline font-mono text-[10px] text-emerald-400/70">
          ● ONLINE
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline font-mono text-[10px] text-white/30">
          {profile.location}
        </span>
        <span className="font-mono text-[10px] text-white/50">{time}</span>
      </div>
    </motion.div>
  );
}
