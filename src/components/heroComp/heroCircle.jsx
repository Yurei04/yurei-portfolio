"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const smallCircles = [
  { src: "/images/sphere.jpg", label: "Branding", href: "/work/branding" },
  { src: "/images/sphere.jpg", label: "UI/UX",    href: "/work/uiux"     },
  { src: "/images/sphere.jpg", label: "Dev",      href: "/work/dev"      },
  { src: "/images/sphere.jpg", label: "AI",       href: "/work/ai"       },
];

export default function HeroCircles() {
  const [centerHovered, setCenterHovered] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Small circles — LEFT side */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {smallCircles.slice(0, 2).map((item, i) => (
          <SmallCircle key={i} item={item} i={i} hovered={hovered} setHovered={setHovered} delay={0.5 + i * 0.1} />
        ))}
      </div>

      {/* Big center circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onHoverStart={() => setCenterHovered(true)}
        onHoverEnd={() => setCenterHovered(false)}
        whileHover={{ scale: 1.04 }}
        style={{ position: "relative", flexShrink: 0 }}
      >
        <Link href="/work" style={{ textDecoration: "none", display: "block" }}>
          {/* Glow ring */}
          <motion.div
            animate={{
              boxShadow: centerHovered
                ? "0 0 0 8px rgba(59,130,246,0.14), 0 0 60px 20px rgba(29,78,216,0.3)"
                : "0 0 0 4px rgba(59,130,246,0.07), 0 0 30px 8px rgba(29,78,216,0.12)",
            }}
            transition={{ duration: 0.4 }}
            style={{
              width: 320,
              height: 320,
              borderRadius: "50%",
              overflow: "hidden",
              border: centerHovered
                ? "2px solid rgba(99,160,255,0.7)"
                : "2px solid rgba(59,130,246,0.3)",
              position: "relative",
              cursor: "pointer",
              transition: "border-color 0.3s",
            }}
          >
            <Image
              fill
              src="/images/sphere.jpg"
              alt="Portfolio"
              style={{ objectFit: "cover" }}
            />

            {/* Dark overlay */}
            <motion.div
              animate={{ opacity: centerHovered ? 0.55 : 0.3 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(29,78,216,0.45), rgba(3,6,15,0.6))",
              }}
            />

            {/* Hover label */}
            <motion.div
              animate={{ opacity: centerHovered ? 1 : 0, y: centerHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                View Work
              </span>
              <span style={{ color: "rgba(148,180,255,0.9)", fontSize: "1.2rem" }}>→</span>
            </motion.div>
          </motion.div>
        </Link>

        {/* Center label below */}
        <motion.p
          animate={{ color: centerHovered ? "rgba(168,200,255,0.9)" : "rgba(148,180,255,0.5)" }}
          transition={{ duration: 0.3 }}
          style={{
            textAlign: "center",
            marginTop: 10,
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          Portfolio
        </motion.p>
      </motion.div>

      {/* Small circles — RIGHT side */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {smallCircles.slice(2, 4).map((item, i) => (
          <SmallCircle key={i + 2} item={item} i={i + 2} hovered={hovered} setHovered={setHovered} delay={0.6 + i * 0.1} />
        ))}
      </div>
    </div>
  );
}

function SmallCircle({ item, i, hovered, setHovered, delay }) {
  const isHov = hovered === i;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(i)}
      onHoverEnd={() => setHovered(null)}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
    >
      <Link href={item.href} style={{ textDecoration: "none", display: "block" }}>
        <motion.div
          animate={{
            boxShadow: isHov
              ? "0 0 0 3px rgba(59,130,246,0.18), 0 0 20px 6px rgba(29,78,216,0.35)"
              : "0 0 0 2px rgba(59,130,246,0.08)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: 102,
            height: 102,
            borderRadius: "50%",
            overflow: "hidden",
            border: isHov
              ? "1.5px solid rgba(99,160,255,0.7)"
              : "1.5px solid rgba(59,130,246,0.25)",
            position: "relative",
            cursor: "pointer",
            transition: "border-color 0.3s",
          }}
        >
          <Image fill src={item.src} alt={item.label} style={{ objectFit: "cover" }} />

          {/* Tint overlay */}
          <motion.div
            animate={{ opacity: isHov ? 0.15 : 0.45 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(29,78,216,0.5), rgba(3,6,15,0.55))",
            }}
          />
        </motion.div>
      </Link>

      {/* Label */}
      <motion.span
        animate={{
          opacity: isHov ? 1 : 0.5,
          color: isHov ? "rgba(180,210,255,0.95)" : "rgba(148,180,255,0.5)",
        }}
        transition={{ duration: 0.25 }}
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          fontFamily: "'DM Mono', monospace",
          whiteSpace: "nowrap",
        }}
      >
        {item.label}
      </motion.span>
    </motion.div>
  );
}