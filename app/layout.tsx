import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hashir-portfolio-brown.vercel.app";

export const metadata: Metadata = {
  title: "Hashir Aziz — AI Automation Engineer",
  description: "Portfolio of Hashir Aziz — AI Automation Engineer specialising in LLMs, RAG pipelines, Voice AI, and agentic systems. Previously at Telenor Pakistan.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Hashir Aziz — AI Automation Engineer",
    description: "Building production-grade AI systems — LLM agents, voice bots, RAG pipelines.",
    url: SITE_URL,
    siteName: "Hashir Aziz Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hashir Aziz — AI Automation Engineer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashir Aziz — AI Automation Engineer",
    description: "Building production-grade AI systems — LLM agents, voice bots, RAG pipelines.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}