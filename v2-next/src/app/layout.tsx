import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://toddclarkston.me"),
  title: "Todd Clarkston | Lead Software Architect & Full Stack Engineer",
  description:
    "Professional portfolio of Todd Clarkston — Lead Software Architect and Principal Consultant at WireServers, Full Stack Engineer with 20+ years building enterprise-grade software for Fortune 500 companies.",
  openGraph: {
    title: "Todd Clarkston | Lead Software Architect & Full Stack Engineer",
    description:
      "Lead Software Architect and Full Stack Engineer with 20+ years building enterprise-grade software, now shipping AI products on Azure.",
    url: "https://toddclarkston.me",
    type: "website",
    images: [{ url: "/images/TC-44.jpg", alt: "Portrait of Todd Clarkston" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
