"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let rafId: number;

    const handler = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(0,102,255,0.06), transparent 40%)`;
      });
    };

    window.addEventListener("mousemove", handler, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handler);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
