"use client";

import { useState, useCallback, useEffect } from "react";
import { BootSequence } from "./BootSequence";
import { StatusBar } from "./StatusBar";
import { OSNavigation } from "./OSNavigation";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { HeroSection } from "@/components/hero/HeroSection";
import { SystemProfile } from "@/components/modules/SystemProfile";
import { ProjectsModule } from "@/components/modules/ProjectsModule";
import { TechEcosystem } from "@/components/modules/TechEcosystem";
import { SkillsModule } from "@/components/modules/SkillsModule";
import { MissionLog } from "@/components/modules/MissionLog";
import { ContactTerminal } from "@/components/modules/ContactTerminal";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { ModuleId } from "@/types";

const sectionIds: ModuleId[] = [
  "identity",
  "profile",
  "projects",
  "stack",
  "skills",
  "missions",
  "contact",
];

export function OSShell() {
  const [booted, setBooted] = useState(false);
  const [showBoot, setShowBoot] = useState(true);
  const [clickedSection, setClickedSection] = useState<ModuleId | null>(null);
  const handleScrollResume = useCallback(() => setClickedSection(null), []);
  const activeSection = useActiveSection(sectionIds, clickedSection, handleScrollResume, booted);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("neural-os-booted");
    if (hasBooted) {
      setShowBoot(false);
      setBooted(true);
    }
  }, []);

  const handleBootComplete = useCallback(() => {
    sessionStorage.setItem("neural-os-booted", "true");
    setBooted(true);
    setShowBoot(false);
  }, []);

  const handleNavigate = useCallback((id: ModuleId) => {
    setClickedSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      {showBoot && <BootSequence onComplete={handleBootComplete} />}
      {booted && (
        <>
          <CursorGlow />
          <StatusBar />
          <OSNavigation
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
          <a
            href="#identity"
            className="sr-only focus:not-sr-only focus:fixed focus:top-10 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-electric focus:text-white focus:rounded-lg focus:text-sm"
          >
            Skip to content
          </a>
          <main className="relative z-10">
            <HeroSection onExploreProjects={() => handleNavigate("projects")} onConnect={() => handleNavigate("contact")} />
            <SystemProfile />
            <ProjectsModule />
            <TechEcosystem />
            <SkillsModule />
            <MissionLog />
            <ContactTerminal />
          </main>
        </>
      )}
    </>
  );
}
