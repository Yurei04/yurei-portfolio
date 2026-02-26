"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const nav = [
  { image: "/images/sphere.jpg", link: "/work/branding", label: "Branding" },
  { image: "/images/sphere.jpg", link: "/work/uiux",     label: "UI/UX"    },
  { image: "/images/sphere.jpg", link: "/work/dev",      label: "Dev"      },
];

export default function HeroNav() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        padding: "14px 12px",
        borderRadius: 24,
        background: "rgba(5, 10, 28, 0.55)",
        border: "1px solid rgba(59,130,246,0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 40px rgba(3,6,15,0.6), inset 0 1px 0 rgba(99,160,255,0.06)",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {nav.map((item, i) => {
        const isHov = hovered === i;
        const isActive = active === i;
        const lit = isHov || isActive;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* Active left bar */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="activeBar"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  style={{
                    position: "absolute",
                    left: -12,
                    top: "30%",
                    translateY: "-50%",
                    width: 2,
                    height: 32,
                    borderRadius: 4,
                    background: "linear-gradient(180deg, rgba(148,180,255,0.9), rgba(59,130,246,0.6))",
                    boxShadow: "0 0 10px 3px rgba(59,130,246,0.45)",
                  }}
                />
              )}
            </AnimatePresence>

            <Link
              href={item.link}
              onClick={() => setActive(i)}
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 7,
                pointerEvents: "auto",
              }}
            >
              {/* Circle */}
              <motion.div
                animate={{
                  y: lit ? -3 : 0,
                  boxShadow: isActive
                    ? "0 0 0 2.5px rgba(99,160,255,0.55), 0 0 28px 10px rgba(29,78,216,0.45)"
                    : isHov
                    ? "0 0 0 2px rgba(99,160,255,0.35), 0 0 18px 6px rgba(29,78,216,0.3)"
                    : "0 0 0 1.5px rgba(59,130,246,0.12)",
                  borderColor: lit
                    ? "rgba(99,160,255,0.65)"
                    : "rgba(59,130,246,0.22)",
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  border: "2px solid rgba(59,130,246,0.22)",
                  flexShrink: 0,
                }}
              >
                <Image fill src={item.image} alt={item.label} style={{ objectFit: "cover" }} />

                {/* Dark tint — lifts on hover */}
                <motion.div
                  animate={{ opacity: lit ? 0.1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(29,78,216,0.5), rgba(3,6,15,0.65))",
                  }}
                />

                {/* Arrow */}
                <motion.div
                  animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 8 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(148,180,255,0.95)",
                      fontSize: "1.15rem",
                      lineHeight: 1,
                    }}
                  >
                    →
                  </span>
                </motion.div>
              </motion.div>

              {/* Label */}
              <motion.span
                animate={{
                  opacity: lit ? 1 : 0.4,
                  color: lit ? "rgba(180,210,255,0.95)" : "rgba(148,180,255,0.5)",
                  textShadow: lit ? "0 0 14px rgba(99,160,255,0.4)" : "none",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </motion.span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}