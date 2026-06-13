import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hashir Aziz — AI Automation Engineer",
  description: "Portfolio of Hashir Aziz — AI Automation Engineer specialising in LLMs, RAG pipelines, Voice AI, and agentic systems. Previously at Telenor Pakistan.",
  openGraph: {
    title: "Hashir Aziz — AI Automation Engineer",
    description: "Building production-grade AI systems — LLM agents, voice bots, RAG pipelines.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
