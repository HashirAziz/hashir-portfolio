"use client";

// Real client feedback from Fiverr (freelance design & branding work)
// Each client gets a consistent accent color for their avatar circle
const CLIENT_FEEDBACK = [
  {
    quote:
      "Hashir did an amazing job with my website palette and logo. He listens carefully to what you want to achieve and puts his creativity to work. He provides detailed information on why his choices work, and it's evident that he's put a lot of thought and care into his work. He's professional, friendly and great to work with. I can definitely recommend his services.",
    name: "medialoc",
    country: "United Kingdom",
    flag: "🇬🇧",
    stars: 5,
    color: "#a78bfa",
  },
  {
    quote:
      "I really enjoyed working with Hashir! He went above and beyond for me. He was quick and very responsive to every idea I had. He helped me fill in a lot of blanks and brought real clarity to the direction of the project. Communication was smooth throughout, and the final delivery exceeded what I expected. I love it, thanks!",
    name: "khaylasmith",
    country: "United States",
    flag: "🇺🇸",
    stars: 5,
    color: "#f59e0b",
  },
  {
    quote:
      "Hashir was very patient, kind and accommodating throughout the entire project. He takes the time to explain his work clearly whenever you have questions, and he genuinely goes above and beyond what's expected. Very polite, easy to communicate with, and reliable from start to finish.",
    name: "bradll03",
    country: "United States",
    flag: "🇺🇸",
    stars: 5,
    color: "#22d3ee",
  },
  {
    quote:
      "Hashir did excellent work and in a very short turnaround time. Communication was clear, instructions were followed precisely, and the quality was consistently high. Would definitely like to work again with him and highly recommend his services to anyone looking for a dependable freelancer.",
    name: "irfansultan94",
    country: "Qatar",
    flag: "🇶🇦",
    stars: 5,
    color: "#f87171",
  },
  {
    quote:
      "Great to work with. Understood my instructions clearly and delivered everything in a timely manner. The whole process was smooth from the initial brief to the final delivery, and he was responsive whenever I had follow-up questions.",
    name: "phila8370",
    country: "United States",
    flag: "🇺🇸",
    stars: 5,
    color: "#fb923c",
  },
  {
    quote:
      "Easy communication from start to finish. Hashir is responsive, talented, and takes feedback seriously — he genuinely incorporates it rather than just nodding along. Would work with him again without hesitation.",
    name: "nisalz",
    country: "Singapore",
    flag: "🇸🇬",
    stars: 5,
    color: "#4ade80",
  },
];

const FIVERR_STATS = [
  { label: "Client Countries", value: "10+" },
  { label: "5-Star Reviews", value: "90%+" },
  { label: "Completed Orders", value: "20+" },
];

function StarRow({ stars }: { stars: number }) {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: "0.75rem" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < stars ? "var(--accent)" : "none"}
          stroke={i < stars ? "var(--accent)" : "var(--border2)"}
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function FiverrBadge() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "rgba(29,191,115,0.1)",
        border: "1px solid rgba(29,191,115,0.3)",
        borderRadius: 8,
        padding: "0.3rem 0.65rem",
      }}
    >
      <span
        style={{
          fontSize: "0.78rem",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: "#fff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        fiverr
        <span style={{ color: "#1dbf73" }}>.</span>
      </span>
      <span
        style={{
          fontSize: "0.6rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
          color: "#1dbf73",
          borderLeft: "1px solid rgba(29,191,115,0.3)",
          paddingLeft: "0.5rem",
        }}
      >
        VERIFIED
      </span>
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
    </svg>
  );
}

function FeedbackCard({ t }: { t: typeof CLIENT_FEEDBACK[0] }) {
  const initial = t.name.charAt(0).toUpperCase();

  return (
    <div
      style={{
        background: "var(--bg)",
        border: "1px solid var(--border2)",
        borderRadius: 20,
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
          <div style={{ color: "var(--accent)", opacity: 0.5 }}>
            <QuoteIcon />
          </div>
          <FiverrBadge />
        </div>

        <StarRow stars={t.stars} />

        <p
          style={{
            color: "var(--text2)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          {t.quote}
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: `${t.color}22`,
            border: `1.5px solid ${t.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: t.color,
            fontWeight: 900,
            fontSize: "1.15rem",
            flexShrink: 0,
          }}
        >
          {initial}
        </div>
        <div>
          <p style={{ fontWeight: 800, fontSize: "0.92rem", color: "var(--text)" }}>{t.name}</p>
          <p style={{ color: "var(--text3)", fontSize: "0.78rem" }}>
            {t.flag} {t.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="grid-bg" style={{ padding: "7rem 2rem", backgroundColor: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.6rem" }}>WHAT CLIENTS SAY</p>
          <h2 style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
            Client Feedback
          </h2>
          <p style={{ color: "var(--text2)", fontSize: "0.92rem", maxWidth: 620, margin: "0 auto" }}>
            Real, verified reviews from international clients I&apos;ve worked with as a freelancer —
            reflecting how I communicate, deliver, and collaborate on every project.
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {FIVERR_STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--accent)", letterSpacing: "-0.02em" }}>
                {s.value}
              </p>
              <p style={{ color: "var(--text3)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="feedback-grid">
          {CLIENT_FEEDBACK.map((t, i) => (
            <FeedbackCard key={i} t={t} />
          ))}
        </div>

        {/* AI/Automation testimonials note */}
        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
            border: "1px dashed var(--border2)",
            borderRadius: 16,
            padding: "1.75rem",
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p style={{ fontWeight: 800, fontSize: "0.95rem", marginBottom: "0.5rem", color: "var(--text)" }}>
            AI &amp; Automation Project Testimonials
          </p>
          <p style={{ color: "var(--text3)", fontSize: "0.85rem", lineHeight: 1.6 }}>
            I&apos;m actively taking on AI automation, LLM, RAG, and voice AI projects.
            Client testimonials for this domain will be added here as projects are completed —
            check back soon, or{" "}
            <a href="#contact" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>
              get in touch
            </a>{" "}
            to be one of the first.
          </p>
        </div>

      </div>

      <style>{`
        .feedback-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .feedback-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .feedback-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}