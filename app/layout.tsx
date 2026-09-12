import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/nav";
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
  title: "Second Look — Eyeglass donation for low-resource communities",
  description:
    "Second Look facilitates eyeglass donation to low-resource communities and equips local workers with an inventory system, enabling clinics to independently sustain distribution within their own communities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
