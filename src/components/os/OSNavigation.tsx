"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  User,
  AppWindow,
  Network,
  Zap,
  ScrollText,
  Terminal,
} from "lucide-react";
import { osModules } from "@/data/skills";
import type { ModuleId } from "@/types";
import { cn } from "@/lib/utils";

const iconMap = {
  Cpu,
  User,
  AppWindow,
  Network,
  Zap,
  ScrollText,
  Terminal,
};

interface OSNavigationProps {
  activeSection: ModuleId;
  onNavigate: (id: ModuleId) => void;
}

export function OSNavigation({ activeSection, onNavigate }: OSNavigationProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <motion.nav
        className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-1 p-2 rounded-2xl bg-graphite/60 backdrop-blur-xl border border-white/[0.06]"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        aria-label="Module navigation"
      >
        {osModules.map((mod) => {
          const Icon = iconMap[mod.icon as keyof typeof iconMap];
          const isActive = activeSection === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => onNavigate(mod.id)}
              className={cn(
                "group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                isActive
                  ? "bg-electric/10 text-electric"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
              )}
              aria-label={mod.label}
              aria-current={isActive ? "true" : undefined}
            >
              <Icon size={18} strokeWidth={1.5} />
              <span className="text-xs font-medium whitespace-nowrap">
                {mod.shortLabel}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-electric rounded-full"
                />
              )}
            </button>
          );
        })}
      </motion.nav>

      {/* Mobile bottom bar */}
      <motion.nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around px-2 py-2 bg-graphite/90 backdrop-blur-xl border-t border-white/[0.06]"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        aria-label="Module navigation"
      >
        {osModules.map((mod) => {
          const Icon = iconMap[mod.icon as keyof typeof iconMap];
          const isActive = activeSection === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => onNavigate(mod.id)}
              className={cn(
                "flex flex-col items-center gap-0.5 p-2 rounded-lg transition-colors",
                isActive ? "text-electric" : "text-white/40"
              )}
              aria-label={mod.label}
              aria-current={isActive ? "true" : undefined}
            >
              <Icon size={18} strokeWidth={1.5} />
              <span className="text-[9px] font-medium">{mod.shortLabel}</span>
            </button>
          );
        })}
      </motion.nav>
    </>
  );
}
