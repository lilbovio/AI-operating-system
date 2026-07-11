"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  size: number;
}

export function DataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let isVisible = true;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const init = () => {
      particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        speed: 0.3 + Math.random() * 0.8,
        opacity: 0.1 + Math.random() * 0.3,
        size: 1 + Math.random() * 2,
      }));
    };

    const draw = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.offsetHeight + 10;
          p.x = Math.random() * canvas.offsetWidth;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    resize();
    init();
    draw();
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      aria-hidden="true"
    />
  );
}
