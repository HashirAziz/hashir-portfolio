"use client";
import { useState } from "react";

const PROJECTS = [
  {
    date: "2026",
    title: "ECHOSEE",
    subtitle: "Multi-Agent Voice AI Platform",
    badge: "CASE STUDY",
    category: "MULTI-AGENT AI",
    cardBg: "#1a1a1a",
    titleColor: "#f5f0eb",
    accentColor: "#f97316",
    textColor: "#fff",
    desc: "Multi-agent voice & lip-reading platform with LangGraph orchestration. Integrates Whisper STT, Edge TTS, OpenCV lip reading, librosa sound detection, and FAISS RAG. Built on NVIDIA GTX 1660 Ti with Streamlit glassmorphism UI.",
    tags: ["LANGGRAPH","WHISPER STT","OPENCV","FAISS","EDGE TTS","PYTHON","STREAMLIT"],
    image: "/projects/echosee.png",
    github: "https://github.com/HashirAziz",
    demo: null,
  },
  {
    date: "2026",
    title: "POLICY RAG SYSTEM",
    subtitle: "Voice-Enabled RAG with pgvector",
    badge: "CASE STUDY",
    category: "RAG · VOICE UI",
    cardBg: "#1a1a1a",
    titleColor: "#f5f0eb",
    accentColor: "#f97316",
    textColor: "#fff",
    desc: "Production RAG system using FastAPI, OpenAI embeddings, GPT-4o-mini, and Supabase pgvector. Features a voice-enabled chat UI using the Web Speech API. Deployed live on Vercel.",
    tags: ["FASTAPI","OPENAI","SUPABASE","PGVECTOR","NEXT.JS","WEB SPEECH API"],
    image: "/projects/policy-rag.png",
    github: "https://github.com/HashirAziz",
    demo: "https://policy-rag-system-two.vercel.app",
  },
  {
    date: "2025",
    title: "TIARA 2.0",
    subtitle: "Production IVR Voicebot — Telenor Pakistan",
    badge: "PRODUCTION",
    category: "VOICE BOT · IVR",
    cardBg: "#1a1a1a",
    titleColor: "#f5f0eb",
    accentColor: "#f97316",
    textColor: "#fff",
    desc: "Production-scale IVR voicebot for Telenor Pakistan on Vertex AI & Dialogflow CX. Handles real customer calls at scale. Integrated with UJET, Microsoft Teams, and ServiceNow.",
    tags: ["VERTEX AI","DIALOGFLOW CX","GOOGLE CLOUD","UJET","SERVICENOW","POWER AUTOMATE"],
    image: "/projects/tiara.png",
    github: null,
    demo: null,
  },

  {
    date: "2026",
    title: "AI DATA ANALYST",
    subtitle: "Chat With Your CSV — Natural Language Data Analysis",
    badge: "AI/ML",
    category: "DATA ANALYTICS · LLM",
    cardBg: "#0f172a",
    titleColor: "#f5f0eb",
    accentColor: "#3b82f6",
    textColor: "#fff",
    desc: "AI-powered data analysis platform that lets users chat with CSV files using natural language. Generates instant insights, advanced visualizations (heatmaps, sunburst, Sankey diagrams), and automated reports powered by OpenAI GPT-4o.",
    tags: ["OPENAI GPT-4O","STREAMLIT","PANDAS","PLOTLY","PYTHON","DATA VISUALIZATION"],
    image: "/projects/ai-data-analyst.png",
    github: "https://github.com/HashirAziz/ai-data-analyst",
    demo: null,
  },

  {
    date: "2025",
    title: "TRIAGEBOT",
    subtitle: "AI Helpdesk Intake Agent",
    badge: "CASE STUDY",
    category: "HELPDESK AI",
    cardBg: "#0f2027",
    titleColor: "#2dd4bf",
    accentColor: "#2dd4bf",
    textColor: "#fff",
    desc: "AI helpdesk intake and triage agent built with FastAPI & GPT-4o-mini. Keyword routing, urgency scoring, sentiment detection, SLA assignment, and ReportLab case study PDF. Deployed on Railway.",
    tags: ["FASTAPI","GPT-4O-MINI","RAILWAY","PYTHON","NLP","REPORTLAB"],
    image: "/projects/triagebot.png",
    github: "https://github.com/HashirAziz",
    demo: null,
  },
  {
    date: "2026",
    title: "OPENAPI SPEC CRAWLER",
    subtitle: "Production-Grade API Cataloguer",
    badge: "CASE STUDY",
    category: "DEVTOOLS · CI/CD",
    cardBg: "#1a0a2e",
    titleColor: "#c084fc",
    accentColor: "#c084fc",
    textColor: "#fff",
    desc: "Python crawler that live-catalogued 594 real OpenAPI specs. 10-module architecture, GitHub Actions CI/CD. Built for APIMatic screening — 80/80 tests passing.",
    tags: ["PYTHON","GITHUB ACTIONS","OPENAPI","FASTAPI","CI/CD","PYTEST"],
    image: "/projects/openapi-crawler.png",
    github: "https://github.com/HashirAziz/Production-OpenAPI-spec-crawler-system-design",
    demo: null,
  },
  {
    date: "2026",
    title: "DRIVER SAFETY MONITOR",
    subtitle: "Real-Time CV Safety System",
    badge: "CASE STUDY",
    category: "COMPUTER VISION",
    cardBg: "#0a1a0a",
    titleColor: "#4ade80",
    accentColor: "#4ade80",
    textColor: "#fff",
    desc: "Real-time drowsiness & phone-use detection with MediaPipe + OpenCV. Workplace safety monitoring with live alerts. Demo recorded for LinkedIn.",
    tags: ["OPENCV","MEDIAPIPE","PYTHON","COMPUTER VISION","REAL-TIME","STREAMLIT"],
    image: "/projects/driver-safety.png",
    github: "https://github.com/HashirAziz",
    demo: null,
  },
  {
    date: "2025",
    title: "FIVERR SEO OPTIMIZER",
    subtitle: "AI-Powered Gig Ranking Recovery Automation",
    badge: "AUTOMATION",
    category: "AI AGENTS · AUTOMATION",
    cardBg: "#1a1a1a",
    titleColor: "#f5f0eb",
    accentColor: "#ef4444",
    textColor: "#fff",
    desc: "Automated workflow that revives underperforming Fiverr gigs through AI-driven SEO optimization. Extracts live gig data via Firecrawl, validates responses with conditional logic, and uses OpenAI AI Agent to rewrite titles, descriptions, and tags with strict schema enforcement. Generates before/after comparison reports and delivers optimization recommendations via Gmail. Built to recover search rankings and boost gig visibility.",
    tags: ["N8N","FIRECRAWL","OPENAI API","AI AGENT","GMAIL","SEO AUTOMATION"],
    image: "/projects/fiverr-seo-optimizer.png",
    github: null,
    demo: null,
  },
  {
    date: "2026",
    title: "E-COMMERCE AI ASSISTANT",
    subtitle: "Multi-Platform Chatbot with RAG & Multi-Model AI",
    badge: "AUTOMATION",
    category: "CHATBOT · N8N · RAG",
    cardBg: "#0a1628",
    titleColor: "#f5f0eb",
    accentColor: "#ec4899",
    textColor: "#fff",
    desc: "Intelligent e-commerce assistant serving Shopify and WooCommerce platforms simultaneously. Leverages OpenAI GPT-4o, Google Gemini, and RAG-based knowledge retrieval to handle customer inquiries at scale. Integrated with UJET for customer communication, ServiceNow for order management, and Microsoft Teams for internal collaboration. Routes queries to appropriate agents (General Queries Agent, Shopify Agent, WooCommerce Agent) with Pinecone Vector Store for semantic search.",
    tags: ["N8N","GPT-4O","GEMINI","RAG","PINECONE","SHOPIFY","WOOCOMMERCE","SERVICENOW"],
    image: "/projects/ecommerce-assistant.png",
    github: null,
    demo: null,
  },
];

function ProjectCard({ p }: { p: typeof PROJECTS[0] }) {
  const isLight = p.cardBg === "#f97316" || p.cardBg === "#fff" || p.cardBg === "#f5f0eb";
  const descColor = isLight ? "rgba(0,0,0,0.65)" : "rgba(200,190,185,0.7)";
  const borderColor = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)";
  const tagBg = isLight ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.3)";
  const tagColor = p.accentColor === "#fff"
    ? (isLight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.6)")
    : p.accentColor;
  const tagBorder = p.accentColor === "#fff"
    ? (isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)")
    : p.accentColor + "25";
  const linkColor = isLight ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.8)";
  const linkBorder = isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.12)";
  const linkBg = isLight ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.3)";

  return (
    <div style={{
      background: p.cardBg,
      borderRadius: 20,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      border: `1px solid ${borderColor}`,
      transition: "transform 0.25s, box-shadow 0.25s",
      width: "100%",
      boxSizing: "border-box",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div style={{ padding:"1.5rem 1.5rem 1rem", flex:1 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
          <div style={{ width:3, height:20, borderRadius:2, background: p.accentColor, opacity:0.7 }} />
          <span style={{
            fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.12em",
            color: tagColor, border:`1px solid ${tagBorder}`,
            padding:"0.2rem 0.6rem", borderRadius:6,
          }}>{p.date}</span>
        </div>

        <h3 style={{
          fontSize:"clamp(1.2rem,2vw,1.55rem)", fontWeight:900,
          color: p.titleColor, letterSpacing:"-0.02em",
          lineHeight:1.1, marginBottom:"0.3rem",
          wordBreak: "break-word",
        }}>{p.title}</h3>

        <p style={{
          fontSize:"0.78rem", fontWeight:600,
          color: descColor, letterSpacing:"0.01em",
          marginBottom:"0.5rem", lineHeight:1.4,
        }}>{p.subtitle}</p>

        <p style={{ fontSize:"0.72rem", fontWeight:700, color: p.accentColor === "#fff" ? (isLight ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.7)") : p.accentColor, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"1rem" }}>
          {p.badge}
        </p>

        <div style={{
          width:"100%", height:130, borderRadius:12, overflow:"hidden",
          marginBottom:"1rem",
          border:`1px solid ${p.accentColor === "#fff" ? (isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)") : p.accentColor + "20"}`,
          position:"relative", background:"rgba(0,0,0,0.2)",
        }}>
          <img
            src={p.image} alt={p.title}
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }}
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <div style={{
            position:"absolute", bottom:"0.75rem", right:"0.75rem",
            background:"rgba(0,0,0,0.6)", backdropFilter:"blur(8px)",
            border:`1px solid ${p.accentColor === "#fff" ? "rgba(255,255,255,0.15)" : p.accentColor + "30"}`,
            color: p.accentColor === "#fff" ? "rgba(255,255,255,0.8)" : p.accentColor,
            fontSize:"0.62rem", fontWeight:800, letterSpacing:"0.1em",
            padding:"0.2rem 0.55rem", borderRadius:6,
          }}>{p.category}</div>
        </div>

        <p style={{ color: descColor, fontSize:"0.83rem", lineHeight:1.65, marginBottom:"1rem" }}>{p.desc}</p>

        <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem", marginBottom:"1.25rem" }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.06em",
              padding:"0.22rem 0.55rem", borderRadius:5,
              background: tagBg, border:`1px solid ${tagBorder}`, color: tagColor,
            }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ borderTop:`1px solid ${borderColor}`, padding:"1rem 1.5rem", display:"flex", gap:"0.65rem" }}>
        {p.github ? (
          <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
            background: linkBg, border:`1px solid ${linkBorder}`,
            color: linkColor, fontSize:"0.78rem", fontWeight:700,
            padding:"0.4rem 1rem", borderRadius:100,
            textDecoration:"none", display:"inline-flex", alignItems:"center", gap:4,
            transition:"all 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = p.accentColor)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = linkBorder)}
          >GitHub ↗</a>
        ) : (
          <span style={{ color: isLight ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.25)", fontSize:"0.75rem", alignSelf:"center" }}>Proprietary</span>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{
            background: p.accentColor === "#fff" ? "rgba(255,255,255,0.2)" : p.accentColor,
            color: p.accentColor === "#fff" ? "#fff" : "#000",
            fontSize:"0.78rem", fontWeight:800,
            padding:"0.4rem 1rem", borderRadius:100,
            textDecoration:"none", display:"inline-flex", alignItems:"center", gap:4,
          }}>Live Demo ↗</a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="grid-bg" style={{ padding:"7rem 2rem", backgroundColor:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="section-label" style={{ marginBottom:"0.6rem" }}>MY PORTFOLIO</p>
          <h2 style={{ fontSize:"clamp(2rem,5vw,4rem)", fontWeight:900, letterSpacing:"-0.03em", marginBottom:"0.75rem" }}>
            Featured Works
          </h2>
          <p style={{ color:"var(--text2)", fontSize:"0.92rem", maxWidth:560, margin:"0 auto" }}>
            Production AI systems, agentic pipelines, voice bots, and intelligent tools — built and shipped.
          </p>
        </div>

        <div className="projects-grid">
          {visible.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>

        {/* Buttons */}
        <div style={{ marginTop:"2.5rem", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.75rem" }}>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              style={{
                minWidth: 220,
                padding: "0.75rem 2rem",
                borderRadius: 100,
                border: "1px solid var(--border2)",
                background: "transparent",
                color: "var(--text)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border2)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
              }}
            >
              VIEW MORE
            </button>
          )}
          <a
            href="https://github.com/HashirAziz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              minWidth: 220,
              padding: "0.75rem 2rem",
              borderRadius: 100,
              border: "1px solid var(--border2)",
              background: "transparent",
              color: "var(--text)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border2)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
            }}
          >
            ⌥ VIEW ALL PROJECTS ON GITHUB
          </a>
        </div>

      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}