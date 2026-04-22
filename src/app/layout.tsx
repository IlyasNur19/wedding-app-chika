import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Pernikahan Ahmad Fauzan & Siti Nurhaliza — 15 Juni 2026",
  description:
    "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.",
  keywords: ["wedding", "undangan", "pernikahan", "Ahmad Fauzan", "Siti Nurhaliza"],
  openGraph: {
    title: "Pernikahan Ahmad Fauzan & Siti Nurhaliza",
    description: "15 Juni 2026 — Kami mengundang Anda untuk berbagi kebahagiaan bersama.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

