"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/images/sphere.jpg", caption: "Project One" },
  { src: "/images/sphere.jpg", caption: "Project Two" },
  { src: "/images/sphere.jpg", caption: "Project Three" },
  { src: "/images/sphere.jpg", caption: "Project Four" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => clearInterval(t);
  }, []);

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

  return (
    <div
      style={{
        position: "relative",
        width: 280,
        height: 190,
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(59,130,246,0.22)",
        background: "rgba(6,15,35,0.8)",
        boxShadow:
          "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,160,255,0.06)",
        backdropFilter: "blur(10px)",
        flexShrink: 0,
      }}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: direction * 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -60, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            fill
            src={slides[current].src}
            alt={slides[current].caption}
            style={{ objectFit: "cover" }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(3,6,15,0.85) 0%, rgba(3,6,15,0.1) 50%, transparent 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 12,
          right: 12,
          zIndex: 10,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={current + "-cap"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
            style={{
              color: "rgba(200,220,255,0.85)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {slides[current].caption}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "rgba(6,15,35,0.65)",
          border: "1px solid rgba(59,130,246,0.22)",
          borderRadius: 6,
          color: "rgba(148,180,255,0.8)",
          width: 26,
          height: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "0.75rem",
          backdropFilter: "blur(6px)",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(29,78,216,0.4)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(6,15,35,0.65)")}
      >
        ‹
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "rgba(6,15,35,0.65)",
          border: "1px solid rgba(59,130,246,0.22)",
          borderRadius: 6,
          color: "rgba(148,180,255,0.8)",
          width: 26,
          height: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "0.75rem",
          backdropFilter: "blur(6px)",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(29,78,216,0.4)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(6,15,35,0.65)")}
      >
        ›
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 5,
          zIndex: 20,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: i === current ? 18 : 5,
              height: 5,
              borderRadius: 3,
              border: "none",
              background:
                i === current
                  ? "rgba(99,160,255,0.9)"
                  : "rgba(99,160,255,0.3)",
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
          background:
            "linear-gradient(90deg, transparent, rgba(99,160,255,0.4), transparent)",
          zIndex: 10,
        }}
      />
    </div>
  );
}