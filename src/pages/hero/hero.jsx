"use client";

import HeroNav from "@/components/heroComp/heroNav";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay, ease: "easeOut" },
});

export default function HeroPage() {
  return (
    <div
      className="w-full h-screen flex flex-col overflow-hidden relative"
      style={{
        background:
          "linear-gradient(135deg, #03060f 0%, #060d1f 40%, #081428 70%, #0a1a33 100%)",
        fontFamily: "'Playfair Display', Georgia, serif",
      }}
    >
      {/* Subtle blue grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,90,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,90,200,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-100px",
        }}
      />

      {/* ── Top-left: Name + Titles ── */}
      <motion.div
        {...fadeUp(0.1)}
        className="absolute top-0 left-0 m-8 flex flex-col gap-1"
      >
        <span
          style={{
            color: "#e8f0ff",
            fontSize: "1.35rem",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          James Yuri Avila
        </span>
        <div
          style={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingLeft: 16,
            borderLeft: "2px solid rgba(59,130,246,0.5)",
          }}
        >
          <span
            style={{
              color: "rgba(148,180,255,0.75)",
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Full Stack Developer
          </span>
          <span
            style={{
              color: "rgba(148,180,255,0.75)",
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            AI Developer
          </span>
        </div>
      </motion.div>

      {/* ── Top-right: Nav ── */}
      <motion.div {...fadeIn(0.4)} className="absolute top-0 right-0 m-6">
        <HeroNav />
      </motion.div>

      {/* ── Bottom section ── */}
      <div className="absolute bottom-0 left-0 right-0 m-6">
        {/* Big heading */}
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "linear-gradient(135deg, #c8d8ff 0%, #6ea0ff 50%, #3b6fd4 100%)",
            marginBottom: "0.6rem",
          }}
        >
          MY
          <br />
          PORTFOLIO
        </motion.h1>

        {/* ── SEPARATOR LINE ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left center" }}
        >
          <div
            style={{
              height: "1.5px",
              width: "100%",
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.85) 0%, rgba(99,160,255,0.4) 60%, transparent 100%)",
              marginBottom: "0.7rem",
            }}
          />
        </motion.div>

        {/* Subtitle row */}
        <motion.div
          {...fadeUp(0.8)}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 4,
          }}
        >
          <span
            style={{
              color: "rgba(148,180,255,0.6)",
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              fontStyle: "italic",
            }}
          >
            Yurei Yuri
          </span>
        </motion.div>
      </div>

      {/* ── Animated corner accent ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.05 }}
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 220,
          height: 220,
          borderRight: "1px solid rgba(59,130,246,0.15)",
          borderBottom: "1px solid rgba(59,130,246,0.15)",
          borderBottomLeftRadius: 220,
        }}
      />
    </div>
  );
}