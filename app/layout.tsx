import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mina-ishikawa-portfolio.vercel.app"),
  title: "石川 美菜 | Fullstack Engineer",
  description:
    "Japan-based Fullstack Engineer portfolio. Production-grade SaaS development with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "石川美菜",
    "Ishikawa Mina",
    "Fullstack Engineer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Japan",
  ],
  openGraph: {
    title: "石川 美菜 | Fullstack Engineer",
    description:
      "Production-grade SaaS development portfolio for Japanese IT recruiters.",
    url: "https://mina-ishikawa-portfolio.vercel.app",
    siteName: "Ishikawa Mina Portfolio",
    locale: "ja_JP",
    type: "website",
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
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${notoSansJp.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
