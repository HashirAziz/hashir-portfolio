import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hashir-portfolio-brown.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Hashir Aziz — AI Automation Engineer | LLM, RAG & Voice AI Developer",
    template: "%s | Hashir Aziz",
  },
  description:
    "Hashir Aziz is an AI Automation Engineer building production-grade LLM agents, RAG pipelines, voice bots, and agentic automation systems (n8n, LangGraph, OpenAI, Dialogflow CX). Previously at Telenor Pakistan.",
  keywords: [
    "Hashir Aziz",
    "AI Automation Engineer",
    "AI Engineer Pakistan",
    "LLM Developer",
    "RAG Pipeline Developer",
    "Voice AI Engineer",
    "n8n Automation Expert",
    "LangGraph Developer",
    "Dialogflow CX Developer",
    "OpenAI GPT-4o Developer",
    "Generative AI Engineer Islamabad",
    "AI Chatbot Developer",
    "AI Freelancer Pakistan",
  ],
  authors: [{ name: "Hashir Aziz", url: SITE_URL }],
  creator: "Hashir Aziz",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hashir Aziz — AI Automation Engineer | LLM, RAG & Voice AI Developer",
    description:
      "Building production-grade AI systems — LLM agents, RAG pipelines, voice bots, and n8n automation workflows. Previously at Telenor Pakistan.",
    url: SITE_URL,
    siteName: "Hashir Aziz Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hashir Aziz — AI Automation Engineer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashir Aziz — AI Automation Engineer",
    description:
      "Building production-grade AI systems — LLM agents, voice bots, RAG pipelines, and n8n automation.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hashir Aziz",
  jobTitle: "AI Automation Engineer",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  sameAs: [
    "https://github.com/HashirAziz",
    "https://linkedin.com/in/hashir-aziz-15h249",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  knowsAbout: [
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Voice AI",
    "n8n Automation",
    "LangGraph",
    "Dialogflow CX",
    "OpenAI API",
    "Python",
    "Next.js",
  ],
  alumniOf: "NUML Islamabad",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Independent AI Engineer",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}