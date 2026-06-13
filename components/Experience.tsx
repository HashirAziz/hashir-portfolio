"use client";

const EXP = [
  {
    period: "2025",
    company: "Telenor Pakistan/Norway",
    role: "Artificial Intelligence Developer",
    bullets: [
      "Built Tiara 2.0 — production Vertex AI & Dialogflow CX IVR voicebot enabling human-like conversations at scale across Telenor's helpline.",
      "Developed AskBot (IT Service Desk assistant) integrated with UJET & Microsoft Teams for chat, SMS, and smart call routing.",
      "Configured ServiceNow for automated ticketing and used Power Automate to optimise workflows — saving significant manual effort.",
    ],
  },
  {
    period: "2024",
    company: "Bytewise Limited",
    role: "Machine / Deep Learning Intern",
    bullets: [
      "Completed 3-month intensive ML/DL program covering supervised, unsupervised, and deep learning pipelines.",
      "Applied Python, TensorFlow, Keras, and Scikit-learn to design, train, and evaluate models on real-world datasets.",
    ],
  },
  {
    period: "2024",
    company: "Digital Empowerment Network",
    role: "Machine / Deep Learning Intern",
    bullets: [
      "Applied ML/DL pipelines with hands-on model training, evaluation, and deployment workflows.",
      "Strengthened expertise in Python, data preprocessing, and building end-to-end AI applications.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="grid-bg" style={{ padding:"7rem 2rem", background:"var(--bg)" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>

        {/* Centered heading */}
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p className="section-label" style={{ marginBottom:"0.6rem" }}>BACKGROUND</p>
          <h2 style={{ fontSize:"clamp(2.5rem,6vw,5rem)", fontWeight:900, letterSpacing:"-0.04em" }}>Experience</h2>
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          {EXP.map((e, i) => (
            <div key={e.company} style={{ display:"grid", gridTemplateColumns:"160px 1fr", gap:"2rem" }}>

              {/* Date */}
              <div style={{ paddingTop:"0.5rem", textAlign:"right" }}>
                <p style={{ color:"var(--text3)", fontSize:"0.8rem", fontWeight:700, letterSpacing:"0.04em", lineHeight:1.5 }}>
                  {e.period}
                </p>
              </div>

              {/* Timeline + card */}
              <div style={{ display:"flex", gap:"1.5rem", paddingBottom: i < EXP.length-1 ? "2.5rem" : 0 }}>
                {/* Orange line + dot */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                  <div style={{
                    width:10, height:10, borderRadius:"50%",
                    background:"var(--accent)", border:"2px solid var(--bg)",
                    flexShrink:0, marginTop:"0.5rem",
                  }} />
                  {i < EXP.length-1 && (
                    <div style={{ width:2, flex:1, background:"var(--accent)", opacity:0.35, marginTop:"0.5rem", borderRadius:2 }} />
                  )}
                </div>

                {/* Card */}
                <div style={{
                  flex:1, background:"var(--bg2)", border:"1px solid var(--border)",
                  borderRadius:14, padding:"1.5rem 1.75rem",
                  borderLeft:"3px solid var(--accent)",
                }}>
                  <h3 style={{ fontSize:"1.05rem", fontWeight:800, marginBottom:"0.15rem" }}>{e.company}</h3>
                  <p style={{ color:"var(--accent)", fontSize:"0.85rem", fontWeight:700, marginBottom:"1rem" }}>{e.role}</p>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.5rem" }}>
                    {e.bullets.map((b,bi) => (
                      <li key={bi} style={{ color:"var(--text2)", fontSize:"0.87rem", lineHeight:1.65, display:"flex", gap:"0.5rem" }}>
                        <span style={{ color:"var(--accent)", flexShrink:0, marginTop:"0.1rem" }}>›</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media(max-width:768px){
          #experience > div > div > div { grid-template-columns:1fr !important; }
          #experience > div > div > div > div:first-child { display:none; }
        }
      `}</style>
    </section>
  );
}
