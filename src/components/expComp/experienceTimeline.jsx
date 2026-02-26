"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Acme Corp",
    period: "2023 — Present",
    description: "Led architecture of AI-powered SaaS platform serving 50k+ users. Designed microservices infra on AWS, reduced latency by 40%.",
    tags: ["Next.js", "Python", "AWS", "OpenAI"],
    type: "work",
  },
  {
    role: "AI Developer",
    company: "NeuralStack Labs",
    period: "2022 — 2023",
    description: "Built RAG pipelines and LLM fine-tuning workflows. Delivered enterprise chatbot products with LangChain and Pinecone.",
    tags: ["LangChain", "Pinecone", "FastAPI"],
    type: "work",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2021 — 2022",
    description: "Developed bespoke web experiences for design studios and startups. Focused on motion-rich, performant interfaces.",
    tags: ["React", "Framer Motion", "GSAP"],
    type: "work",
  },
  {
    role: "B.S. Computer Science",
    company: "University of Technology",
    period: "2017 — 2021",
    description: "Graduated with honors. Thesis on neural architecture search and efficient transformer variants.",
    tags: ["AI/ML", "Research"],
    type: "edu",
  },
];

export default function ExperienceTimeline() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      style={{
        width: 300,
        background: "rgba(4,10,28,0.88)",
        border: "1px solid rgba(59,130,246,0.18)",
        borderRadius: 16,
        backdropFilter: "blur(12px)",
        boxShadow: "0 16px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,160,255,0.04)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 16px 12px",
          borderBottom: "1px solid rgba(59,130,246,0.12)",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* Animated dot */}
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "rgba(99,160,255,0.85)",
            boxShadow: "0 0 8px rgba(99,160,255,0.6)",
            display: "inline-block",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }`}</style>

        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(148,180,255,0.65)",
          }}
        >
          Experience
        </span>
      </div>

      {/* Timeline */}
      <div style={{ padding: "16px 16px 16px 0", position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 27,
            top: 16,
            bottom: 16,
            width: 1,
            background:
              "linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(59,130,246,0.1) 90%, transparent)",
          }}
        />

        {experiences.map((exp, i) => {
          const isExpanded = expanded === i;
          const isEdu = exp.type === "edu";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: i < experiences.length - 1 ? 16 : 0,
                paddingLeft: 16,
              }}
            >
              {/* Node */}
              <div
                style={{
                  flexShrink: 0,
                  width: 22,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 2,
                }}
              >
                <div
                  style={{
                    width: isEdu ? 10 : 11,
                    height: isEdu ? 10 : 11,
                    borderRadius: isEdu ? 2 : "50%",
                    background: isEdu
                      ? "rgba(59,130,246,0.4)"
                      : "rgba(99,160,255,0.9)",
                    border: isEdu
                      ? "1px solid rgba(99,160,255,0.5)"
                      : "2px solid rgba(4,10,28,1)",
                    boxShadow: isEdu ? "none" : "0 0 10px rgba(99,160,255,0.5)",
                    transition: "transform 0.2s",
                    transform: isExpanded ? "scale(1.2)" : "scale(1)",
                  }}
                />
              </div>

              {/* Card */}
              <div
                onClick={() => setExpanded(isExpanded ? null : i)}
                style={{
                  flex: 1,
                  cursor: "pointer",
                  background: isExpanded
                    ? "rgba(20,50,140,0.18)"
                    : "rgba(10,20,55,0.35)",
                  border: `1px solid ${isExpanded ? "rgba(59,130,246,0.3)" : "rgba(59,130,246,0.1)"}`,
                  borderRadius: 10,
                  padding: "10px 12px",
                  transition: "background 0.25s, border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  if (!isExpanded) {
                    e.currentTarget.style.background = "rgba(15,35,100,0.3)";
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.22)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) {
                    e.currentTarget.style.background = "rgba(10,20,55,0.35)";
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.1)";
                  }
                }}
              >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        color: "rgba(210,230,255,0.9)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        lineHeight: 1.2,
                        marginBottom: 2,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {exp.role}
                    </div>
                    <div
                      style={{
                        color: "rgba(99,160,255,0.7)",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                    <span
                      style={{
                        color: "rgba(99,130,200,0.55)",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.06em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                    {/* Chevron */}
                    <motion.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="rgba(99,160,255,0.5)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                </div>

                {/* Expandable content */}
                <AnimateHeight isOpen={isExpanded}>
                  <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(59,130,246,0.12)" }}>
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "rgba(148,180,255,0.65)",
                        fontSize: "0.66rem",
                        fontFamily: "'DM Mono', monospace",
                        lineHeight: 1.6,
                      }}
                    >
                      {exp.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.55rem",
                            letterSpacing: "0.08em",
                            color: "rgba(99,160,255,0.8)",
                            background: "rgba(30,70,180,0.15)",
                            border: "1px solid rgba(59,130,246,0.2)",
                            borderRadius: 4,
                            padding: "2px 6px",
                            textTransform: "uppercase",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateHeight>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom shimmer */}
      <div
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)",
        }}
      />
    </div>
  );
}

// Smooth height animation helper
function AnimateHeight({ isOpen, children }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}