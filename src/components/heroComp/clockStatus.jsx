"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Status cycles — swap these to whatever suits you
const STATUS = "Available for work";

function useClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-PH", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Manila",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function ClockStatus() {
  const time = useClock();
  const [secPulse, setSecPulse] = useState(false);

  // Pulse glow every second
  useEffect(() => {
    const id = setInterval(() => {
      setSecPulse(true);
      setTimeout(() => setSecPulse(false), 400);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: 6,
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {/* Clock row */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Ticking dot */}
        <motion.div
          animate={{
            boxShadow: secPulse
              ? "0 0 0 3px rgba(59,130,246,0.2), 0 0 10px 3px rgba(29,78,216,0.5)"
              : "0 0 0 2px rgba(59,130,246,0.1)",
            background: secPulse
              ? "rgba(147,197,253,0.95)"
              : "rgba(99,160,255,0.7)",
          }}
          transition={{ duration: 0.25 }}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            flexShrink: 0,
          }}
        />

        {/* Time digits */}
        <AnimatePresence mode="wait">
          {time && (
            <motion.span
              key={time}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              style={{
                color: "rgba(148,180,255,0.75)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
              }}
            >
              {time}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Timezone badge */}
        <span
          style={{
            color: "rgba(99,140,220,0.5)",
            fontSize: "0.55rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          PHT
        </span>
      </div>

      {/* Status row */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Pulsing green availability dot */}
        <span style={{ position: "relative", width: 7, height: 7, flexShrink: 0 }}>
          <motion.span
            animate={{ scale: [1, 1.9, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "rgba(52,211,153,0.5)",
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "rgba(52,211,153,0.9)",
              boxShadow: "0 0 6px 2px rgba(52,211,153,0.4)",
            }}
          />
        </span>

        <span
          style={{
            color: "rgba(148,180,255,0.6)",
            fontSize: "0.58rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {STATUS}
        </span>
      </div>
    </motion.div>
  );
}