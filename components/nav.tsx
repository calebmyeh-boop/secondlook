"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/app/data";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/about", label: "About" },
  { href: "/impact", label: "Impact" },
  { href: "/locations", label: "Locations" },
  { href: "/people", label: "People" },
  { href: "/partners", label: "Partners" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-full"
        style={{ background: "var(--sage)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="12" r="5" stroke="white" strokeWidth="2.2" />
          <circle cx="19" cy="12" r="4" stroke="white" strokeWidth="2.2" />
          <path d="M13 12h2" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
        Second Look
      </span>
    </span>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-20 border-b backdrop-blur"
      style={{ borderColor: "var(--border)", background: "rgba(253,249,244,0.92)" }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden gap-1 text-sm lg:flex">
          {NAV.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 font-medium transition-colors"
                style={{
                  color: active ? "var(--sage-dark)" : "var(--muted)",
                  background: active ? "var(--yellow-light)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90 lg:block"
          style={{ background: "var(--sage)" }}
        >
          Get involved
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t px-6 py-4 lg:hidden" style={{ borderColor: "var(--border)" }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-full px-5 py-2 text-sm font-bold text-white"
            style={{ background: "var(--sage)" }}
          >
            Get involved
          </Link>
        </div>
      )}
    </header>
  );
}
