"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/images/sphere.jpg",
    title: "Project One",
    description: "A full-stack web application with real-time data sync and AI-powered recommendations.",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    href: "/projects/project-one",
  },
  {
    src: "/images/sphere.jpg",
    title: "Project Two",
    description: "Scalable microservices architecture deployed on the edge with sub-50ms latency.",
    tags: ["Node.js", "Docker", "Redis"],
    href: "/projects/project-two",
  },
  {
    src: "/images/sphere.jpg",
    title: "Project Three",
    description: "LLM-powered document intelligence platform with vector search and RAG pipeline.",
    tags: ["Python", "LangChain", "Pinecone"],
    href: "/projects/project-three",
  },
  {
    src: "/images/sphere.jpg",
    title: "Project Four",
    description: "Cross-platform mobile app with offline-first sync and local ML inference.",
    tags: ["React Native", "SQLite", "TFLite"],
    href: "/projects/project-four",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: "relative",
        width: 300,
        height: 400,
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(59,130,246,0.22)",
        background: "rgba(4,10,28,0.92)",
        boxShadow:
          "0 16px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(99,160,255,0.06)",
        backdropFilter: "blur(12px)",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Image area ── */}
      <div style={{ position: "relative", height: 180, flexShrink: 0, overflow: "hidden" }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction * 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -80, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              fill
              src={slide.src}
              alt={slide.title}
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(4,10,28,0.95) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide counter badge */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 10,
            background: "rgba(4,10,28,0.7)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: 20,
            padding: "2px 8px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            color: "rgba(148,180,255,0.7)",
            letterSpacing: "0.1em",
            backdropFilter: "blur(6px)",
          }}
        >
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>

        {/* Prev / Next arrows */}
        {[{ fn: prev, side: "left", icon: "‹" }, { fn: next, side: "right", icon: "›" }].map(
          ({ fn, side, icon }) => (
            <button
              key={side}
              onClick={fn}
              style={{
                position: "absolute",
                [side]: 8,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                background: "rgba(4,10,28,0.65)",
                border: "1px solid rgba(59,130,246,0.22)",
                borderRadius: 6,
                color: "rgba(148,180,255,0.8)",
                width: 26,
                height: 26,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "0.9rem",
                backdropFilter: "blur(6px)",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(29,78,216,0.5)";
                e.currentTarget.style.borderColor = "rgba(99,160,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(4,10,28,0.65)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.22)";
              }}
            >
              {icon}
            </button>
          )
        )}
      </div>

      {/* ── Content area ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "14px 16px 14px",
          gap: 8,
          position: "relative",
        }}
      >
        {/* Thin separator */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 16,
            right: 16,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)",
          }}
        />

        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={current + "-title"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            style={{
              margin: 0,
              color: "rgba(220,235,255,0.95)",
              fontSize: "0.95rem",
              fontWeight: 600,
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "0.01em",
            }}
          >
            {slide.title}
          </motion.h3>
        </AnimatePresence>

        {/* Tags */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-tags"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 5 }}
          >
            {slide.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.08em",
                  color: "rgba(99,160,255,0.85)",
                  background: "rgba(30,70,180,0.15)",
                  border: "1px solid rgba(59,130,246,0.22)",
                  borderRadius: 4,
                  padding: "2px 7px",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current + "-desc"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            style={{
              margin: 0,
              color: "rgba(148,180,255,0.65)",
              fontSize: "0.72rem",
              lineHeight: 1.55,
              fontFamily: "'DM Mono', monospace",
              flex: 1,
            }}
          >
            {slide.description}
          </motion.p>
        </AnimatePresence>

        {/* CTA Link */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-cta"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.12 }}
          >
            <Link
              href={slide.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(99,160,255,0.9)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(59,130,246,0.3)",
                paddingBottom: 1,
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(180,210,255,1)";
                e.currentTarget.style.borderBottomColor = "rgba(99,160,255,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(99,160,255,0.9)";
                e.currentTarget.style.borderBottomColor = "rgba(59,130,246,0.3)";
              }}
            >
              View Project
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Dot indicators ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          paddingBottom: 12,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: i === current ? 20 : 5,
              height: 5,
              borderRadius: 3,
              border: "none",
              background: i === current ? "rgba(99,160,255,0.9)" : "rgba(99,160,255,0.25)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
              boxShadow: i === current ? "0 0 8px rgba(99,160,255,0.6)" : "none",
            }}
          />
        ))}
      </div>

      {/* Top shimmer line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(99,160,255,0.5), transparent)",
          zIndex: 10,
        }}
      />
    </div>
  );
}