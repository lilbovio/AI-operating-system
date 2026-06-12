"use client";

import { motion } from "framer-motion";
import { ArrowRight, Radio } from "lucide-react";
import dynamic from "next/dynamic";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { DataStream } from "./DataStream";

const NeuralCore = dynamic(
  () => import("./NeuralCore").then((m) => m.NeuralCore),
  { ssr: false, loading: () => <div className="absolute inset-0 -z-10" /> }
);

interface HeroSectionProps {
  onExploreProjects: () => void;
  onConnect: () => void;
}

export function HeroSection({ onExploreProjects, onConnect }: HeroSectionProps) {
  return (
    <section
      id="identity"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8"
    >
      <NeuralCore />
      <DataStream />

      <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} custom={0}>
          <Badge variant="info" className="mb-6">
            <Radio size={10} className="mr-1" />
            SYSTEM ONLINE
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-4"
        >
          {profile.name.split(" ").map((word, i) => (
            <span key={i}>
              {i > 0 && <br className="hidden sm:block" />}
              <span
                className={
                  i === 1
                    ? "bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent"
                    : ""
                }
              >
                {word}{" "}
              </span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          {profile.positioning}
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={3}
          className="font-mono text-sm text-white/30 mb-10"
        >
          {profile.currentFocus}
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onExploreProjects}
            icon={<ArrowRight size={16} />}
          >
            Explore Applications
          </Button>
          <Button variant="secondary" size="lg" onClick={onConnect}>
            Establish Connection
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={5}
          className="mt-16 flex items-center justify-center gap-8 text-white/20"
        >
          {["Products Built", "Systems Designed", "Problems Solved"].map(
            (label) => (
              <div key={label} className="text-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-electric/30 to-transparent mx-auto mb-2" />
                <span className="font-mono text-[10px] tracking-wider uppercase">
                  {label}
                </span>
              </div>
            )
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-electric/60" />
        </div>
      </motion.div>
    </section>
  );
}
