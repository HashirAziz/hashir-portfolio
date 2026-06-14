"use client";
import { useEffect, useState } from "react";

const ROLES = [
  "AI AUTOMATION ENGINEER.",
  "AI/ML ENGINEER.",
  
];

const TICKER = [
  "PYTHON","LANGCHAIN","LANGGRAPH","FASTAPI","OPENAI","GPT-4O","VERTEX AI",
  "DIALOGFLOW CX","WHISPER","RAG","FAISS","SUPABASE","NEXT.JS","DOCKER",
  "RAILWAY","STREAMLIT","OPENCV","MEDIAPIPE","N8N","SERVICENOW",
];

function CircularBadge() {
  const text = "AI AUTOMATION ENGINEER • NUML ISLAMABAD • SINCE 2022 • EXCELLENCE • ";
  const r = 72;
  const size = r * 2 + 24;
  const cx = size / 2;
  const cy = size / 2;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg
        width={size} height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "absolute", inset: 0 }}
        className="spin-slow"
      >
        <defs>
          <path
            id="textCircle"
            d={`M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
          />
        </defs>
        {/* Single subtle inner ring only */}
        <circle cx={cx} cy={cy} r={r - 4} fill="none" stroke="rgba(249,115,22,0.25)" strokeWidth="1" strokeDasharray="3 4" />
        {/* Visible orange spinning text */}
        <text style={{ fontSize: "10.5px", fontWeight: 800, letterSpacing: "0.16em", fill: "#f97316", fontFamily: "system-ui" }}>
          <textPath href="#textCircle">{text}</textPath>
        </text>
      </svg>
      {/* Center: star + short quote */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 4, textAlign: "center",
      }}>
        <span style={{ color: "#f97316", fontSize: "1.1rem", lineHeight: 1 }}>★</span>
        <span style={{
          color: "var(--text2)", fontSize: "0.6rem", fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          lineHeight: 1.3, maxWidth: 70, textAlign: "center",
        }}>Build.<br />Deploy.<br />Impact.</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) {
        t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 52);
      } else {
        t = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(prev => prev.slice(0, -1)), 26);
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  const words = displayed.split(" ");
  const accentPart = words.length > 1 ? words.slice(0, -1).join(" ") + " " : "";
  const whitePart = words[words.length - 1] || "";

  return (
    <section id="home" className="grid-bg" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
    }}>

      {/* Circular badge top right */}
      <div className="hide-sm" style={{ position: "absolute", top: "5rem", right: "3rem", zIndex: 2 }}>
        <CircularBadge />
      </div>

      {/* 10+ Projects pill */}
      <div className="hide-sm" style={{
        position: "absolute", top: "14rem", right: "1.5rem", zIndex: 2,
        background: "var(--bg2)", border: "1px solid var(--border2)",
        borderRadius: 100, padding: "0.4rem 1rem",
        display: "flex", alignItems: "center", gap: 6,
        fontSize: "0.78rem", fontWeight: 700, color: "var(--text2)",
      }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
        20+ Projects
      </div>

      {/* Main content */}
      <div style={{
        flex: 1, display: "flex", alignItems: "center",
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
        width: "100%", paddingTop: "6rem",
      }}>

        {/* LEFT */}
        <div style={{ flex: 1, maxWidth: 720 }}>

          {/* OPEN FOR WORK */}
          <div className="fade-up-1" style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "2rem",
            background: "var(--bg3)", border: "1px solid rgba(74,222,128,0.3)",
            padding: "0.4rem 1.1rem", borderRadius: 100,
          }}>
            <span className="open-dot" />
            <span style={{
              color: "#4ade80", fontSize: "0.8rem", fontWeight: 900,
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}>Open for work</span>
          </div>

          {/* HI I AM — white dotted outlined */}
          <div className="fade-up-1" style={{
            fontSize: "clamp(2.2rem,7vw,5.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: "0.2rem",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.35)",
          }}>
            HI I AM
          </div>

          {/* Typewriter */}
          <div className="fade-up-2" style={{
            fontSize: "clamp(2.8rem,7vw,5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            minHeight: "2.2em",
          }}>
            <span style={{ color: "var(--accent)" }}>{accentPart}</span>
            <span style={{ color: "var(--text)" }}>{whitePart}</span>
            <span className="blink" style={{ color: "var(--accent)", fontWeight: 300, fontSize: "0.8em" }}>|</span>
          </div>

          {/* Resume pill */}
          <div className="fade-up-3" style={{ marginBottom: "1.75rem" }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-shine-btn">
              <span className="resume-shine-overlay" />
              VIEW RESUME ↗
            </a>
          </div>

          {/* Tagline */}
          <p className="fade-up-4" style={{ color: "var(--text2)", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: 520 }}>
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>{" "}
            <strong style={{ color: "var(--text)", fontWeight: 700 }}>AI Automation Engineer & Full-Stack AI Builder.</strong>{" "}
            <strong style={{ color: "var(--text)" }}></strong>.
          </p>
        </div>

        {/* RIGHT: photo */}
        <div className="fade-up-3 hide-sm" style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          marginLeft: "3rem", flexShrink: 0, position: "relative",
        }}>
          {/* Label + dotted arrow */}
          <div style={{ position: "relative", alignSelf: "flex-end", marginRight: "1rem", marginBottom: "0.5rem" }}>
            <p style={{
              color: "#ffffff", fontSize: "0.82rem", fontWeight: 600,
              letterSpacing: "0.03em", fontStyle: "italic", whiteSpace: "nowrap",
            }}>
              Hi! I Am Hashir
            </p>
            <svg width="70" height="45" viewBox="0 0 70 45" fill="none"
              style={{ position: "absolute", left: "10%", top: "100%", opacity: 0.7 }}>
              <path d="M 60 4 Q 30 4 12 32" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 3" fill="none" strokeLinecap="round" />
              <path d="M 8 30 L 13 38 L 20 32" stroke="#f97316" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Rectangular photo */}
          <div style={{
            width: 200, height: 255, borderRadius: 18,
            border: "2.5px solid var(--accent)",
            overflow: "hidden", background: "var(--bg3)",
            marginTop: "2.5rem",
            boxShadow: "0 0 0 5px var(--bg), 0 0 0 7px rgba(249,115,22,0.35), 0 20px 50px rgba(0,0,0,0.5)",
          }}>
            <img
              src="/hashir.jpg"
              alt="Hashir Aziz"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 6, padding: "1.5rem",
        color: "var(--text3)", fontSize: "0.65rem",
        letterSpacing: "0.18em", textTransform: "uppercase",
      }}>
        <span>SCROLL</span>
        <div style={{ fontSize: "1rem", color: "var(--accent)" }}>↓</div>
      </div>

      {/* Ticker */}
      <div style={{
        borderTop: "1px solid var(--border)", background: "var(--bg2)",
        padding: "0.7rem 0", overflow: "hidden",
      }}>
        <div className="ticker-track-slow">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} style={{
              color: "#ffffff", fontSize: "0.78rem", fontWeight: 800,
              letterSpacing: "0.12em", padding: "0 2rem",
              display: "inline-flex", alignItems: "center", gap: "2rem",
            }}>
              {item}
              <span style={{ color: "var(--accent)", opacity: 0.7, fontSize: "0.45rem" }}>●</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .open-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #4ade80; display: inline-block;
          animation: slow-blink 2.5s ease-in-out infinite;
        }
        @keyframes slow-blink {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #4ade80; }
          50% { opacity: 0.25; box-shadow: none; }
        }
        .resume-shine-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.2rem;
          border-radius: 100px;
          font-weight: 900;
          font-size: 0.88rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #f97316 0%, #dc2626 60%, #f97316 100%);
          background-size: 200% 200%;
          box-shadow: 0 4px 24px rgba(249,115,22,0.45), inset 0 1px 0 rgba(255,255,255,0.15);
          animation: shine-move 3s ease-in-out infinite;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .resume-shine-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(249,115,22,0.65);
        }
        .resume-shine-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%);
          animation: shine-sweep 3s ease-in-out infinite;
          border-radius: inherit;
        }
        @keyframes shine-sweep {
          0% { transform: translateX(-100%); }
          60%, 100% { transform: translateX(150%); }
        }
        @keyframes shine-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .ticker-track-slow {
          display: inline-flex;
          white-space: nowrap;
          animation: ticker-slow 40s linear infinite;
        }
        @keyframes ticker-slow {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media(max-width: 768px) {
          .hide-sm { display: none !important; }
        }
      `}</style>
    </section>
  );
}