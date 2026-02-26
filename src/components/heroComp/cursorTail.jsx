"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A soft orb that follows the cursor with a spring lag,
// plus a trail of fading particles drawn on a canvas.
export default function CursorTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);

  // Spring-lagged cursor orb
  const rawX = useMotionValue(-999);
  const rawY = useMotionValue(-999);
  const x = useSpring(rawX, { stiffness: 120, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      // Spawn particle at cursor
      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 0.55,
        radius: Math.random() * 3 + 1.5,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      });

      // Cap trail length
      if (particles.current.length > 48) particles.current.shift();
    };

    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.alpha > 0.01);

      particles.current.forEach((p, idx) => {
        const progress = idx / particles.current.length;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * progress, 0, Math.PI * 2);

        // Blue → lighter blue gradient per particle
        const r = Math.round(29 + progress * 70);
        const g = Math.round(78 + progress * 100);
        const b = Math.round(216 + progress * 39);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha * progress})`;
        ctx.fill();

        // Drift & fade
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.88;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      {/* Spring-lagged orb */}
      <motion.div
        style={{
          x,
          y,
          position: "fixed",
          top: 0,
          left: 0,
          translateX: "-50%",
          translateY: "-50%",
          width: 28,
          height: 28,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          background:
            "radial-gradient(circle, rgba(147,197,253,0.22) 0%, rgba(59,130,246,0.08) 60%, transparent 100%)",
          boxShadow:
            "0 0 0 1px rgba(99,160,255,0.25), 0 0 16px 4px rgba(29,78,216,0.25)",
          mixBlendMode: "screen",
        }}
      />

      {/* Hide default cursor site-wide when this mounts */}
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}