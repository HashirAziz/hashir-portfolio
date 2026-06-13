"use client";
import { useState } from "react";

// SVG icons — exact brand icons
function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <polyline points="2,4 12,13 22,4"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);

  const send = () => {
    if (!form.name || !form.email || !form.message) return;
    const mailto = `mailto:hashiraziz999@gmail.com?subject=Portfolio Enquiry from ${form.name}&body=${encodeURIComponent(form.message+"\n\nFrom: "+form.name+"\nEmail: "+form.email)}`;
    window.open(mailto,"_blank");
    setSent(true); setTimeout(()=>setSent(false),3000);
  };

  return (
    <section id="contact" className="grid-bg" style={{ padding:"7rem 2rem", background:"var(--bg)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>

        {/* HUGE heading */}
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <h2 style={{
            fontSize:"clamp(2.5rem,7vw,6rem)",
            fontWeight:900,
            letterSpacing:"-0.04em",
            lineHeight:1.0,
            textTransform:"uppercase",
            marginBottom:"1rem",
          }}>
            <span style={{ color:"var(--text)" }}>INTERESTED IN</span>
            <br />
            <span style={{ color:"var(--text)" }}>WORKING </span>
            <span style={{ color:"var(--accent)" }}>TOGETHER?</span>
          </h2>
          <p style={{ color:"var(--text2)", fontSize:"1rem", fontWeight:500 }}>
            Let&apos;s build something intelligent.
          </p>
        </div>

        {/* 3 horizontal contact cards */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"1.25rem", maxWidth:900, margin:"0 auto 3rem" }}>

          {/* Email Me */}
          <a href="mailto:hashiraziz999@gmail.com" className="contact-card" style={{ textDecoration:"none", color:"inherit" }}>
            <div style={{
              width:42, height:42, borderRadius:10,
              background:"rgba(249,115,22,0.12)", border:"1px solid rgba(249,115,22,0.25)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"var(--accent)", marginBottom:"0.5rem",
            }}>
              <EmailIcon />
            </div>
            <p style={{ fontWeight:800, fontSize:"1rem" }}>Email Me</p>
            <p style={{ color:"var(--text2)", fontSize:"0.82rem" }}>hashiraziz999@gmail.com</p>
            <p style={{ color:"var(--accent)", fontSize:"0.8rem", fontWeight:700, marginTop:"0.5rem" }}>Send email ↗</p>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/hashir-aziz-15h249" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration:"none", color:"inherit" }}>
            <div style={{
              width:42, height:42, borderRadius:10,
              background:"rgba(249,115,22,0.12)", border:"1px solid rgba(249,115,22,0.25)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"var(--accent)", marginBottom:"0.5rem",
            }}>
              <LinkedInIcon />
            </div>
            <p style={{ fontWeight:800, fontSize:"1rem" }}>LinkedIn</p>
            <p style={{ color:"var(--text2)", fontSize:"0.82rem" }}>Let&apos;s connect professionally</p>
            <p style={{ color:"var(--accent)", fontSize:"0.8rem", fontWeight:700, marginTop:"0.5rem" }}>View profile ↗</p>
          </a>

          {/* Get in Touch (form toggle) */}
          <div className="contact-card" onClick={() => setShowForm(!showForm)} style={{ cursor:"pointer" }}>
            <div style={{
              width:42, height:42, borderRadius:10,
              background:"rgba(249,115,22,0.12)", border:"1px solid rgba(249,115,22,0.25)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"var(--accent)", marginBottom:"0.5rem",
            }}>
              <MessageIcon />
            </div>
            <p style={{ fontWeight:800, fontSize:"1rem" }}>Get in Touch</p>
            <p style={{ color:"var(--text2)", fontSize:"0.82rem" }}>Drop a message via form</p>
            <p style={{ color:"var(--accent)", fontSize:"0.8rem", fontWeight:700, marginTop:"0.5rem" }}>
              {showForm ? "Close form ↑" : "Open form ↗"}
            </p>
          </div>
        </div>

        {/* Collapsible form */}
        {showForm && (
          <div style={{
            maxWidth:560, margin:"0 auto",
            background:"var(--bg2)", border:"1px solid var(--border2)",
            borderRadius:18, padding:"2rem",
            animation:"fadeUp 0.3s ease both",
          }}>
            <h3 style={{ fontWeight:800, fontSize:"1rem", marginBottom:"1.5rem" }}>Send a message</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {[{label:"Name",key:"name",type:"text",ph:"Your name"},{label:"Email",key:"email",type:"email",ph:"your@email.com"}].map(f=>(
                <div key={f.key}>
                  <label style={{ display:"block", color:"var(--text3)", fontSize:"0.72rem", fontWeight:700, marginBottom:"0.4rem", letterSpacing:"0.08em", textTransform:"uppercase" }}>{f.label}</label>
                  <input type={f.type} placeholder={f.ph} value={form[f.key as keyof typeof form]}
                    onChange={e=>setForm({...form,[f.key]:e.target.value})}
                    style={{ width:"100%", padding:"0.7rem 0.9rem", background:"var(--bg3)", border:"1px solid var(--border2)", borderRadius:8, color:"var(--text)", fontSize:"0.88rem", outline:"none", fontFamily:"inherit", transition:"border-color 0.2s" }}
                    onFocus={e=>(e.target.style.borderColor="var(--accent)")}
                    onBlur={e=>(e.target.style.borderColor="var(--border2)")}
                  />
                </div>
              ))}
              <div>
                <label style={{ display:"block", color:"var(--text3)", fontSize:"0.72rem", fontWeight:700, marginBottom:"0.4rem", letterSpacing:"0.08em", textTransform:"uppercase" }}>Message</label>
                <textarea rows={4} placeholder="Tell me about your project or role..." value={form.message}
                  onChange={e=>setForm({...form,message:e.target.value})}
                  style={{ width:"100%", padding:"0.7rem 0.9rem", background:"var(--bg3)", border:"1px solid var(--border2)", borderRadius:8, color:"var(--text)", fontSize:"0.88rem", outline:"none", resize:"vertical", fontFamily:"inherit", transition:"border-color 0.2s" }}
                  onFocus={e=>(e.target.style.borderColor="var(--accent)")}
                  onBlur={e=>(e.target.style.borderColor="var(--border2)")}
                />
              </div>
              <button onClick={send} className="btn-primary" style={{ justifyContent:"center" }}>
                {sent ? "✓ OPENING MAIL APP..." : "SEND MESSAGE →"}
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop:"5rem", textAlign:"center", borderTop:"1px solid var(--border)", paddingTop:"2.5rem" }}>
          <p style={{ fontWeight:900, fontSize:"2rem", letterSpacing:"-0.03em", marginBottom:"0.75rem" }}>
            Hashir<span style={{ color:"var(--accent)" }}>.</span>
          </p>
          <p style={{ color:"var(--text2)", fontSize:"0.85rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem", marginBottom:"1.5rem" }}>
            ✉ hashiraziz999@gmail.com
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:"1.5rem" }}>
            {[
              {label:"GitHub", href:"https://github.com/HashirAziz"},
              {label:"LinkedIn", href:"https://linkedin.com/in/hashir-aziz-15h249"},
            ].map(l=>(
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ color:"var(--text3)", fontSize:"0.85rem", fontWeight:600, textDecoration:"none", transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--accent)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--text3)")}
              >{l.label}</a>
            ))}
          </div>
          <p style={{ color:"var(--text3)", fontSize:"0.75rem", marginTop:"1.5rem" }}>
            © {new Date().getFullYear()} Hashir Aziz · AI Automation Engineer · Islamabad, PK
          </p>
        </div>

      </div>

      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:768px){
          #contact > div > div:nth-child(2){ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}