"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { techNodes, techCategories } from "@/data/techStack";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { TechCategory } from "@/types";

interface NodePosition {
  id: string;
  x: number;
  y: number;
  name: string;
  category: TechCategory;
  proficiency: string;
}

export function TechEcosystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<TechCategory | "all">("all");
  const nodesRef = useRef<NodePosition[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const initNodes = useCallback((width: number, height: number) => {
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.35;

    nodesRef.current = techNodes.map((node, i) => {
      const angle = (i / techNodes.length) * Math.PI * 2 - Math.PI / 2;
      const jitter = (Math.sin(i * 3.7) * 0.3 + 0.7) * radius;
      return {
        id: node.id,
        x: cx + Math.cos(angle) * jitter,
        y: cy + Math.sin(angle) * jitter,
        name: node.name,
        category: node.category,
        proficiency: node.proficiency,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      initNodes(rect.width, rect.height);
    };

    const draw = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const nodes = nodesRef.current;
      const nodeMap = new Map(nodes.map((n) => [n.id, n]));

      // Draw connections
      techNodes.forEach((techNode) => {
        const from = nodeMap.get(techNode.id);
        if (!from) return;

        const fromVisible =
          activeCategory === "all" || techNode.category === activeCategory;

        techNode.connections.forEach((connId) => {
          const to = nodeMap.get(connId);
          if (!to) return;

          const toTech = techNodes.find((n) => n.id === connId);
          const toVisible =
            activeCategory === "all" || toTech?.category === activeCategory;

          if (!fromVisible && !toVisible) return;

          const isHovered =
            hoveredNode === techNode.id || hoveredNode === connId;

          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = isHovered
            ? "rgba(0, 102, 255, 0.4)"
            : "rgba(255, 255, 255, 0.04)";
          ctx.lineWidth = isHovered ? 1.5 : 0.5;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const techNode = techNodes.find((n) => n.id === node.id);
        if (!techNode) return;

        const isVisible =
          activeCategory === "all" || techNode.category === activeCategory;
        const isHovered = hoveredNode === node.id;
        const cat = techCategories.find((c) => c.id === node.category);

        const baseOpacity = isVisible ? 1 : 0.15;
        const radius = isHovered ? 6 : 4;

        // Glow
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 16, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            16
          );
          gradient.addColorStop(0, `${cat?.color || "#0066FF"}40`);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? cat?.color || "#0066FF"
          : `${cat?.color || "#0066FF"}${Math.round(baseOpacity * 180).toString(16).padStart(2, "0")}`;
        ctx.fill();

        if (isHovered || isVisible) {
          ctx.font = "11px 'Geist Mono', monospace";
          ctx.fillStyle = isHovered
            ? "rgba(255, 255, 255, 0.9)"
            : `rgba(255, 255, 255, ${baseOpacity * 0.5})`;
          ctx.textAlign = "center";
          ctx.fillText(node.name, node.x, node.y - 12);
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      let found: string | null = null;
      for (const node of nodesRef.current) {
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < 12) {
          found = node.id;
          break;
        }
      }
      setHoveredNode(found);
      canvas.style.cursor = found ? "pointer" : "default";
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hoveredNode, activeCategory, initNodes]);

  return (
    <section id="stack" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Module 03"
          title="Technology Ecosystem"
          description="Interactive knowledge graph mapping the technology stack and interdependencies."
        />

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors ${
              activeCategory === "all"
                ? "bg-electric/10 text-electric border-electric/20"
                : "bg-white/5 text-white/40 border-white/[0.06] hover:text-white/60"
            }`}
          >
            All
          </button>
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors ${
                activeCategory === cat.id
                  ? "text-white border-white/20"
                  : "bg-white/5 text-white/40 border-white/[0.06] hover:text-white/60"
              }`}
              style={
                activeCategory === cat.id
                  ? { background: `${cat.color}15`, borderColor: `${cat.color}30`, color: cat.color }
                  : undefined
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          ref={containerRef}
          className="relative h-[400px] md:h-[500px] rounded-2xl border border-white/[0.06] bg-graphite/30 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <canvas ref={canvasRef} className="absolute inset-0" />
          {hoveredNode && (
            <div className="absolute bottom-4 left-4 px-3 py-2 rounded-lg bg-graphite/90 border border-white/[0.08] backdrop-blur-md">
              <p className="font-mono text-xs text-white/60">
                {techNodes.find((n) => n.id === hoveredNode)?.name}
                <span className="text-white/30 ml-2">
                  {techNodes.find((n) => n.id === hoveredNode)?.proficiency}
                </span>
              </p>
            </div>
          )}
        </motion.div>

        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          {techCategories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: cat.color }}
              />
              <span className="font-mono text-[10px] text-white/30">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
