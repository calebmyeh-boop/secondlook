import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import React from "react";
import Nav from "@/components/nav";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Second Look — Eyeglass donation for low-resource communities",
  description:
    "Second Look facilitates eyeglass donation to low-resource communities and equips local workers with an inventory system, enabling clinics to independently sustain distribution within their own communities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <footer
          className="border-t px-6 py-8"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-sm sm:flex-row sm:items-center" style={{ color: "var(--muted)" }}>
            <span className="font-bold" style={{ color: "var(--foreground)" }}>Second Look</span>
            <p>© {new Date().getFullYear()} Second Look · Facilitating eyeglass donation for low-resource communities</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
