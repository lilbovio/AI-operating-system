"use client";

import { useEffect, useRef, useState } from "react";
import type { ModuleId } from "@/types";

export function useActiveSection(
  sectionIds: ModuleId[],
  overrideSection?: ModuleId | null,
  onScrollResume?: () => void,
  ready: boolean = true
) {
  const [activeSection, setActiveSection] = useState<ModuleId>(sectionIds[0]);
  // When true, the IntersectionObserver won't update activeSection so a
  // programmatic scroll (triggered by a nav click) doesn't fight the override.
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Apply the override immediately when the caller sets it.
  useEffect(() => {
    if (overrideSection == null) return;

    setActiveSection(overrideSection);

    // Pause scroll-detection for 1 s to let the smooth-scroll settle.
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      onScrollResume?.();
    }, 1000);
  }, [overrideSection, onScrollResume]);

  useEffect(() => {
    if (!ready) return;
    
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isPausedRef.current) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ready]);

  return activeSection;
}
