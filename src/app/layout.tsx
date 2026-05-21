import type { Metadata, Viewport } from "next";
import "./globals.css";
import { COUPLE } from "@/lib/constants";
import Providers from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: `Pernikahan  ${COUPLE.groom.fullName} & ${COUPLE.bride.fullName} — 15 Juni 2026`,
  description:
    "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.",
  keywords: ["wedding", "undangan", "pernikahan", "Berry Wibowo", "Chika Amelia Putri"],
  openGraph: {
    title: "Pernikahan Berry Wibowo & Chika Amelia Putri",
    description: "6 Juni 2026 — Kami mengundang Anda untuk berbagi kebahagiaan bersama.",
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
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

