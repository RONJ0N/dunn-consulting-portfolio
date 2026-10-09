import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ChatWidgetEmbed } from "@/components/ChatWidgetEmbed";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — AI Websites & Automation for Local Businesses`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "AI automation",
    "local business websites",
    "AI chatbot",
    "missed call text back",
    "AI voice receptionist",
    "web consulting",
  ],
  openGraph: {
    title: `${SITE.name} — AI Websites & Automation for Local Businesses`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — AI Websites & Automation for Local Businesses`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  slogan: SITE.tagline,
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: [
    "AI automation",
    "AI chatbots",
    "Missed call text-back",
    "AI voice receptionists",
    "Local business websites",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-accent px-4 py-2 font-medium text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" && <Analytics />}
        <ChatWidgetEmbed />
      </body>
    </html>
  );
}
