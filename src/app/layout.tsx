import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // for localhost testing set the URL to http://localhost:3000 and for production set to https://yourdomain.com
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Neural OS — Portfolio",
  description:
    "An AI Operating System portfolio showcasing software engineering, artificial intelligence projects, and product-building capabilities.",
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "Computer Science",
    "Portfolio",
  ],
  authors: [{ name: "Juan Pablo Bovio Vallejo" }],
  openGraph: {
    title: "Neural OS — Portfolio",
    description:
      "Building intelligent systems and production-grade software at the intersection of engineering and AI.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neural OS — Portfolio",
    description:
      "Building intelligent systems and production-grade software at the intersection of engineering and AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
