"use client";

const EDU = [
  {
    period: "Feb 2022 – Jan 2026",
    institution: "National University of Modern Languages (NUML)",
    degree: "BS Artificial Intelligence",
    desc: "BS Artificial Intelligence Graduate  with a CGPA of 3.2. Deep expertise in ML, DL, NLP, and Computer Vision. FYP: FeedbackFlow — AI-powered university transport system with RAG, sentiment analysis, STT, and Flutter mobile app.",
  },
  {
    period: "2019 – 2021",
    institution: "IMCB F7/3 Islamabad",
    degree: "Intermediate Pre-Engineering",
    desc: "Completed Intermediate with a Pre-Engineering focus, building a strong foundation in mathematics, physics, and sciences.",
  },
];

export default function Education() {
  return (
    <section id="education" className="grid-bg" style={{ padding:"7rem 2rem", background:"var(--bg2)" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p className="section-label" style={{ marginBottom:"0.6rem" }}>BACKGROUND</p>
          <h2 style={{ fontSize:"clamp(2.5rem,6vw,5rem)", fontWeight:900, letterSpacing:"-0.04em" }}>Education</h2>
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          {EDU.map((e, i) => (
            <div key={e.institution} style={{ display:"grid", gridTemplateColumns:"220px 1fr", gap:"2rem" }}>
              <div style={{ paddingTop:"0.5rem", textAlign:"right" }}>
                <p style={{ color:"var(--text3)", fontSize:"0.78rem", fontWeight:700, lineHeight:1.6 }}>{e.period}</p>
              </div>
              <div style={{ display:"flex", gap:"1.5rem", paddingBottom: i < EDU.length-1 ? "2.5rem" : 0 }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                  <div style={{ width:10, height:10, borderRadius:"50%", background:"var(--accent)", border:"2px solid var(--bg2)", flexShrink:0, marginTop:"0.5rem" }} />
                  {i < EDU.length-1 && <div style={{ width:2, flex:1, background:"var(--accent)", opacity:0.35, marginTop:"0.5rem", borderRadius:2 }} />}
                </div>
                <div style={{ flex:1, background:"var(--bg)", border:"1px solid var(--border)", borderRadius:14, padding:"1.5rem 1.75rem", borderLeft:"3px solid var(--accent)" }}>
                  <h3 style={{ fontSize:"1.05rem", fontWeight:800, marginBottom:"0.15rem" }}>{e.institution}</h3>
                  <p style={{ color:"var(--accent)", fontSize:"0.85rem", fontWeight:700, marginBottom:"0.75rem" }}>{e.degree}</p>
                  <p style={{ color:"var(--text2)", fontSize:"0.87rem", lineHeight:1.7 }}>{e.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media(max-width:768px){
          #education > div > div > div { grid-template-columns:1fr !important; }
          #education > div > div > div > div:first-child { display:none; }
        }
      `}</style>
    </section>
  );
}
