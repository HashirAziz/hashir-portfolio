"use client";

const SKILL_GROUPS = [
  {
    title: "AI & ML",
    dot: true,
    skills: ["GPT-4o / OpenAI","LangChain","LangGraph","RAG Pipelines","FAISS","Vertex AI","Dialogflow CX","Whisper STT","Hugging Face","TensorFlow","PyTorch","N8N", "Zapier","Power Automate", "Roboflow"],
  },
  {
    title: "Languages",
    skills: ["Python","Java","SQL","Dart",],
  },
  {
    title: "Frameworks & Cloud",
    skills: ["FastAPI","Flask","Streamlit","Supabase","Docker","Railway","Vercel","Google Cloud","ServiceNow","PostgreSQL"],
  },
  {
    title: "Computer Vision & Data",
    skills: ["OpenCV","MediaPipe","YOLOv11","Pandas","NumPy","Plotly","Scikit-learn","Matplotlib","Seaborn"],
  },
  {
    title: "Currently Learning",
    dot: true,
    skills: ["LLM Fine-tuning","Workflow Automation","LLMOps","Agentic RAG"],
  },
];

// 2-col + 3-col grid 
const TOP_ROW = [SKILL_GROUPS[0], SKILL_GROUPS[1]]; // AI&ML + Languages
const BOT_ROW = [SKILL_GROUPS[2], SKILL_GROUPS[3], SKILL_GROUPS[4]]; // Frameworks + CV + Learning

export default function About() {
  return (
    <section id="about" className="grid-bg" style={{ padding:"7rem 2rem", background:"var(--bg)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>

        {/* Centered heading */}
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p className="section-label" style={{ marginBottom:"0.6rem" }}>WHO I AM</p>
          <h2 style={{ fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:900, letterSpacing:"-0.03em" }}>About</h2>
        </div>

        {/* Photo left + bio right */}
        <div style={{ display:"grid", gridTemplateColumns:"320px 1fr", gap:"4rem", alignItems:"start", marginBottom:"5rem" }}>

          {/* Photo with orange border */}
          <div style={{
            borderRadius:18,
            border:"2px solid var(--accent)",
            overflow:"hidden",
            aspectRatio:"4/5",
            background:"var(--bg3)",
          }}>
            <img
              src="/hashir.jpg"
              alt="Hashir Aziz"
              style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"Center" }}
            />
          </div>

          {/* Bio */}
          <div style={{ paddingTop:"1rem" }}>
            <h3 style={{ fontSize:"1.5rem", fontWeight:800, marginBottom:"1.25rem", letterSpacing:"-0.02em" }}>
              Hi, I am{" "}
              <span style={{ color:"var(--accent)" }}>Hashir Aziz</span>.
            </h3>
            <p style={{ color:"var(--text2)", lineHeight:1.85, marginBottom:"1rem", fontSize:"0.97rem" }}>
              <strong style={{ color:"var(--text)" }}>BS Artificial Intelligence</strong> Graduate from {" "}
              <strong style={{ color:"var(--text)" }}>NUML Islamabad (CGPA 3.2)</strong>,
              I am passionate about building intelligent systems and solving complex, real-world challenges using AI.
            </p>
            <p style={{ color:"var(--text2)", lineHeight:1.85, marginBottom:"1rem", fontSize:"0.97rem" }}>
              My core focus lies in engineering <strong style={{ color:"var(--text)" }}>LLM agents</strong>, developing
              end-to-end <strong style={{ color:"var(--text)" }}>RAG pipelines</strong>, building production-grade
              <strong style={{ color:"var(--text)" }}> voice bots</strong>, and architecting full-stack AI applications
              that deliver meaningful real-world impact.
            </p>
            <p style={{ color:"var(--text2)", lineHeight:1.85, fontSize:"0.97rem" }}>
              Previously at <strong style={{ color:"var(--text)" }}>Telenor Pakistan/Norway</strong> where I built Tiara 2.0
              (production IVR voicebot), AskBot, and ServiceNow automation. Currently freelancing on Fiverr (Level 2)
              while pursuing full-time AI Engineer roles.
            </p>
          </div>
        </div>

        {/* Skills section — centered */}
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <p className="section-label" style={{ marginBottom:"0.6rem" }}>WHAT I USE</p>
          <h2 style={{ fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:900, letterSpacing:"-0.03em" }}>Expertise in Tools</h2>
        </div>

        {/* Top row: AI&ML (big) + Languages */}
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"1.25rem", marginBottom:"1.25rem" }}>
          {TOP_ROW.map(g => (
            <div key={g.title} className="skill-card">
              <div className="skill-card-label">
                {g.title}
                {g.dot && <span className="pulse" style={{ width:7, height:7, borderRadius:"50%", background:"var(--accent)", display:"inline-block" }} />}
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                {g.skills.map(s => <span key={s} className="skill-pill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"1.25rem" }}>
          {BOT_ROW.map(g => (
            <div key={g.title} className="skill-card" style={g.dot ? { border:"1px dashed var(--border2)" } : {}}>
              <div className="skill-card-label">
                {g.title}
                {g.dot && <span className="pulse" style={{ width:7, height:7, borderRadius:"50%", background:"var(--accent)", display:"inline-block" }} />}
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                {g.skills.map(s => <span key={s} className="skill-pill" style={g.dot ? { opacity:0.6 } : {}}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media(max-width:768px){
          #about > div > div:nth-child(2){ grid-template-columns:1fr !important; }
          #about > div > div:nth-child(4), #about > div > div:nth-child(5){ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}