"use client";
import { useState, useEffect } from "react";

const links = [
  { num: "01", label: "Home",       href: "#home" },
  { num: "02", label: "About",      href: "#about" },
  { num: "03", label: "Projects",   href: "#projects" },
  { num: "04", label: "Experience", href: "#experience" },
  { num: "05", label: "Education",  href: "#education" },
  { num: "06", label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: "0.9rem 2rem",
      background: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.3s",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Logo */}
      <a href="#home" style={{ textDecoration:"none", fontWeight:900, fontSize:"1.1rem", letterSpacing:"-0.03em", color:"var(--text)" }}>
        Hashir<span style={{ color:"var(--accent)" }}>.</span>
      </a>

      {/* Desktop links */}
      <div className="hide-sm" style={{ display:"flex", gap:"0.1rem" }}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link">
            <span className="nav-num">{l.num}</span>{l.label}
          </a>
        ))}
      </div>

      {/* Right: theme toggle + connect */}
      <div className="hide-sm" style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
        <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
          {dark ? "☀️" : "🌙"}
        </button>
        <a href="#contact" className="btn-primary" style={{ padding:"0.45rem 1.1rem", fontSize:"0.78rem" }}>
          Connect ↗
        </a>
      </div>

      {/* Mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{ background:"none", border:"1px solid var(--border2)", color:"var(--text2)", padding:"0.4rem 0.75rem", borderRadius:8, cursor:"pointer", display:"none" }}
        className="mobile-btn">
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div style={{
          position:"fixed", top:"56px", left:0, right:0,
          background:"var(--bg)", backdropFilter:"blur(20px)",
          borderBottom:"1px solid var(--border)", padding:"1.5rem 2rem",
          display:"flex", flexDirection:"column", gap:"0.75rem",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ color:"var(--text2)", textDecoration:"none", fontSize:"0.95rem", fontWeight:500 }}>
              <span style={{ color:"var(--accent)", fontSize:"0.7rem", marginRight:6 }}>{l.num}</span>{l.label}
            </a>
          ))}
          <div style={{ display:"flex", gap:"0.5rem", marginTop:"0.5rem" }}>
            <button onClick={toggleTheme} className="theme-toggle">{dark ? "☀️" : "🌙"}</button>
            <a href="#contact" className="btn-primary" style={{ flex:1, justifyContent:"center" }}>Connect ↗</a>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .hide-sm{display:none!important} .mobile-btn{display:block!important} }
        html.light nav { background: ${scrolled ? "rgba(250,247,244,0.92)" : "transparent"} !important; }
      `}</style>
    </nav>
  );
}
