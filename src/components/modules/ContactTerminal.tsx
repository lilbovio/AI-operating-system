"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Link, Mail, Download, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

type TerminalLine = {
  type: "system" | "prompt" | "input";
  text: string;
};

const bootLines: TerminalLine[] = [
  { type: "system", text: "Communication terminal initialized." },
  { type: "system", text: `Operator: ${profile.name}` },
  { type: "system", text: `Status: Available for opportunities` },
  { type: "prompt", text: "Select a channel to connect:" },
];

export function ContactTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const hasBootedRef = useRef(false);

  useEffect(() => {
    if (hasBootedRef.current) {
      setLines([...bootLines]);
      return;
    }
    hasBootedRef.current = true;

    let cancelled = false;
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const revealNext = () => {
      if (cancelled || index >= bootLines.length) return;
      const line = bootLines[index];
      if (line) {
        setLines((prev) => [...prev, line]);
      }
      index++;
      timeoutId = setTimeout(revealNext, 400);
    };

    timeoutId = setTimeout(revealNext, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const responses: Record<string, string> = {
      linkedin: `Opening LinkedIn → ${profile.linkedin}`,
      github: `Opening GitHub → ${profile.github}`,
      email: `Composing email → ${profile.email}`,
      resume: "Initiating resume download...",
    };

    setLines((prev) => [
      ...prev,
      { type: "input", text: cmd },
      {
        type: "system",
        text: responses[cmd] || `Unknown command: ${cmd}. Try: linkedin, github, email, resume`,
      },
    ]);
    setInputValue("");

    if (cmd === "linkedin") window.open(profile.linkedin, "_blank");
    if (cmd === "github") window.open(profile.github, "_blank");
    if (cmd === "email") window.open(`mailto:${profile.email}`, "_blank");
    if (cmd === "resume") window.open(profile.resumeUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 pb-32 lg:pb-24">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Module 06"
          title="Communication Terminal"
          description="Establish a connection. All channels are open."
        />

        <motion.div
          className="rounded-2xl border border-white/[0.08] bg-void overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.06] bg-graphite/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
            </div>
            <span className="font-mono text-xs text-white/30">
              comm-terminal — bash
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="p-5 h-64 overflow-y-auto font-mono text-sm space-y-1.5"
          >
            {lines.map((line, i) => {
              if (!line?.type) return null;
              return (
              <div key={`${line.type}-${line.text}-${i}`}>
                {line.type === "input" ? (
                  <p className="text-cyan">
                    <span className="text-electric">$</span> {line.text}
                  </p>
                ) : line.type === "prompt" ? (
                  <p className="text-white/70">{line.text}</p>
                ) : (
                  <p className="text-white/40">
                    <span className="text-emerald-400/60">[OK]</span> {line.text}
                  </p>
                )}
              </div>
              );
            })}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-5 py-3 border-t border-white/[0.06] bg-graphite/30">
            <span className="text-electric font-mono text-sm">$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue.trim()) {
                  handleCommand(inputValue.trim().toLowerCase());
                }
              }}
              placeholder="Type a command..."
              className="flex-1 bg-transparent text-white font-mono text-sm outline-none placeholder:text-white/20"
              aria-label="Terminal command input"
            />
            <button
              onClick={() => inputValue.trim() && handleCommand(inputValue.trim().toLowerCase())}
              className="text-white/30 hover:text-electric transition-colors"
              aria-label="Send command"
            >
              <Send size={14} />
            </button>
          </div>
        </motion.div>

        {/* Quick action buttons */}
        <div className="flex flex-wrap gap-3 mt-6 justify-center">
          <Button
            variant="secondary"
            href={profile.linkedin}
            icon={<Link size={14} />}
          >
            LinkedIn
          </Button>
          <Button
            variant="secondary"
            href={profile.github}
            icon={<Code size={14} />}
          >
            GitHub
          </Button>
          <Button
            variant="secondary"
            href={`mailto:${profile.email}`}
            icon={<Mail size={14} />}
          >
            Email
          </Button>
          <Button
            variant="secondary"
            href={profile.resumeUrl}
            icon={<Download size={14} />}
          >
            Resume
          </Button>
        </div>

        <p className="text-center mt-12 font-mono text-[10px] text-white/20 tracking-wider">
          {profile.systemId} — All systems operational
        </p>
      </div>
    </section>
  );
}
