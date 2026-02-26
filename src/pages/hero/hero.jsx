"use client";

import HeroCarousel from "@/components/heroComp/heroCarousel";
import HeroCircles from "@/components/heroComp/heroCircle";
import ClockStatus from "@/components/heroComp/clockStatus";
import ExperienceTimeline from "@/components/expComp/experienceTimeline";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroPage() {
  const [nameHovered, setNameHovered] = useState(false);
  const [portfolioHovered, setPortfolioHovered] = useState(false);
  const [yureiHovered, setYureiHovered] = useState(false);

  return (
    <div
      className="w-full min-h-screen flex flex-col overflow-x-hidden relative"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      {/* ── Mesh gradient background ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 10% 90%, rgba(17,51,153,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 10%, rgba(10,35,110,0.45) 0%, transparent 55%),
            radial-gradient(ellipse 55% 65% at 50% 45%, rgba(8,22,80,0.3) 0%, transparent 65%),
            linear-gradient(135deg, #02040e 0%, #05091a 35%, #070f24 65%, #030710 100%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(40,100,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(40,100,255,0.035) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── Top-right column: Carousel + Experience Timeline ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 m-6 flex flex-col items-end gap-4"
        style={{ maxHeight: "calc(100vh - 48px)", overflowY: "auto", overflowX: "visible" }}
      >
        {/* Scrollbar hide */}
        <style>{`
          .right-col::-webkit-scrollbar { display: none; }
          .right-col { scrollbar-width: none; }
        `}</style>
        <div
          className="right-col flex flex-col items-end gap-4"
          style={{ maxHeight: "calc(100vh - 48px)", overflowY: "auto", paddingRight: 2 }}
        >
          <HeroCarousel />
          <ExperienceTimeline />
        </div>
      </motion.div>

      {/* ── Top-left: Name + Titles + Clock/Status ── */}
      <motion.div
        {...fadeUp(0.1)}
        className="absolute top-0 left-0 m-8 flex flex-col gap-1 cursor-default"
        onMouseEnter={() => setNameHovered(true)}
        onMouseLeave={() => setNameHovered(false)}
      >
        <motion.span
          animate={{
            color: nameHovered ? "#a0c4ff" : "#e8f0ff",
            textShadow: nameHovered
              ? "0 0 24px rgba(99,160,255,0.6)"
              : "0 0 0px transparent",
          }}
          transition={{ duration: 0.3 }}
          style={{ fontSize: "1.35rem", fontWeight: 600, letterSpacing: "0.01em" }}
        >
          James Yuri R. Avila
        </motion.span>

        <motion.div
          animate={{
            borderLeftColor: nameHovered
              ? "rgba(99,160,255,0.8)"
              : "rgba(59,130,246,0.5)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingLeft: 16,
            borderLeft: "2px solid rgba(59,130,246,0.5)",
          }}
        >
          {["Full Stack Developer", "AI Developer"].map((t, i) => (
            <span
              key={i}
              style={{
                color: nameHovered
                  ? "rgba(180,210,255,0.9)"
                  : "rgba(148,180,255,0.75)",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
                transition: "color 0.3s",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Clock + status */}
        <div style={{ marginTop: 14 }}>
          <ClockStatus />
        </div>
      </motion.div>

      {/* ── Bottom section ── */}
      <div className="absolute bottom-0 left-0 right-0 mx-6 mb-6">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setPortfolioHovered(true)}
          onMouseLeave={() => setPortfolioHovered(false)}
          style={{
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundImage: portfolioHovered
              ? "linear-gradient(135deg, #ffffff 0%, #a8c8ff 40%, #6ea0ff 100%)"
              : "linear-gradient(135deg, #c8d8ff 0%, #6ea0ff 50%, #3b6fd4 100%)",
            marginBottom: "0.55rem",
            cursor: "default",
            filter: portfolioHovered
              ? "drop-shadow(0 0 30px rgba(99,160,255,0.35))"
              : "none",
            transition: "filter 0.4s",
          }}
        >
          Full Stack
          <br />
          AI DEVELOPER
        </motion.h1>

        {/* Inline separator + handle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 16, paddingBottom: 4 }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: 1,
              transformOrigin: "left center",
              height: "1.5px",
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.9) 0%, rgba(99,160,255,0.35) 80%, transparent 100%)",
            }}
          />

          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            onMouseEnter={() => setYureiHovered(true)}
            onMouseLeave={() => setYureiHovered(false)}
            style={{
              color: yureiHovered
                ? "rgba(180,210,255,0.85)"
                : "rgba(148,180,255,0.6)",
              fontSize: "clamp(0.95rem, 2vw, 1.4rem)",
              fontWeight: 400,
              letterSpacing: "0.05em",
              fontStyle: "italic",
              whiteSpace: "nowrap",
              cursor: "default",
              textShadow: yureiHovered ? "0 0 18px rgba(99,160,255,0.5)" : "none",
              transition: "color 0.3s, text-shadow 0.3s",
            }}
          >
            @YureiYuri
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}