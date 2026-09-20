import Link from "next/link";
import { IMPACT } from "./data";

/* ---------- Cartoon SVG illustrations ---------- */

function CartoonGlasses() {
  return (
    <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs">
      {/* Left lens */}
      <rect x="10" y="20" width="70" height="45" rx="22" fill="#fef3c0" stroke="#1a1612" strokeWidth="4" />
      {/* Right lens */}
      <rect x="120" y="20" width="70" height="45" rx="22" fill="#fef3c0" stroke="#1a1612" strokeWidth="4" />
      {/* Bridge */}
      <path d="M80 38 Q100 30 120 38" stroke="#1a1612" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Left arm */}
      <path d="M10 35 Q-5 35 -8 50" stroke="#1a1612" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Right arm */}
      <path d="M190 35 Q205 35 208 50" stroke="#1a1612" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Shine dots left */}
      <circle cx="35" cy="35" r="5" fill="white" opacity="0.7" />
      <circle cx="48" cy="30" r="3" fill="white" opacity="0.5" />
      {/* Shine dots right */}
      <circle cx="145" cy="35" r="5" fill="white" opacity="0.7" />
      <circle cx="158" cy="30" r="3" fill="white" opacity="0.5" />
    </svg>
  );
}

function CartoonFace({ color = "#f5c842" }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="130">
      {/* Head */}
      <ellipse cx="60" cy="62" rx="48" ry="52" fill={color} stroke="#1a1612" strokeWidth="3" />
      {/* Hair */}
      <path d="M20 45 Q30 15 60 12 Q90 15 100 45" fill="#1a1612" />
      {/* Left eye with glasses */}
      <rect x="22" y="52" width="30" height="22" rx="11" fill="white" stroke="#1a1612" strokeWidth="2.5" />
      <rect x="68" y="52" width="30" height="22" rx="11" fill="white" stroke="#1a1612" strokeWidth="2.5" />
      {/* Bridge */}
      <path d="M52 61 Q60 57 68 61" stroke="#1a1612" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Pupils */}
      <circle cx="37" cy="63" r="6" fill="#1a1612" />
      <circle cx="83" cy="63" r="6" fill="#1a1612" />
      <circle cx="39" cy="61" r="2" fill="white" />
      <circle cx="85" cy="61" r="2" fill="white" />
      {/* Smile */}
      <path d="M42 90 Q60 104 78 90" stroke="#1a1612" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <ellipse cx="28" cy="82" rx="8" ry="5" fill="#e85b8a" opacity="0.4" />
      <ellipse cx="92" cy="82" rx="8" ry="5" fill="#e85b8a" opacity="0.4" />
    </svg>
  );
}

function CartoonGlobeWithGlasses() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="160" height="160">
      {/* Globe */}
      <circle cx="80" cy="80" r="65" fill="#2aa8a0" stroke="#1a1612" strokeWidth="3" />
      <ellipse cx="80" cy="80" rx="35" ry="65" fill="none" stroke="#1a1612" strokeWidth="2" opacity="0.4" />
      <line x1="15" y1="80" x2="145" y2="80" stroke="#1a1612" strokeWidth="2" opacity="0.4" />
      <path d="M25 50 Q80 35 135 50" stroke="#1a1612" strokeWidth="2" opacity="0.4" fill="none" />
      <path d="M25 110 Q80 125 135 110" stroke="#1a1612" strokeWidth="2" opacity="0.4" fill="none" />
      {/* Tiny glasses on globe */}
      <rect x="42" y="70" width="28" height="18" rx="9" fill="#fef3c0" stroke="#1a1612" strokeWidth="2" />
      <rect x="90" y="70" width="28" height="18" rx="9" fill="#fef3c0" stroke="#1a1612" strokeWidth="2" />
      <path d="M70 78 Q80 74 90 78" stroke="#1a1612" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CartoonHeart() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
      <path d="M40 65 C40 65 8 48 8 28 C8 18 18 10 30 14 C34 16 38 20 40 24 C42 20 46 16 50 14 C62 10 72 18 72 28 C72 48 40 65 40 65Z" fill="#e85b8a" stroke="#1a1612" strokeWidth="2.5" />
      {/* Tiny glasses inside heart */}
      <rect x="22" y="30" width="14" height="9" rx="4.5" fill="white" stroke="#1a1612" strokeWidth="1.5" />
      <rect x="44" y="30" width="14" height="9" rx="4.5" fill="white" stroke="#1a1612" strokeWidth="1.5" />
      <path d="M36 34 Q40 32 44 34" stroke="#1a1612" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28"
        style={{ background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #e3f2fd 100%)" }}
      >
        {/* Floating cartoon accents */}
        <div className="pointer-events-none absolute top-8 right-8 opacity-30 sm:opacity-60 hidden sm:block">
          <CartoonGlasses />
        </div>
        <div className="pointer-events-none absolute bottom-10 right-24 opacity-20 sm:opacity-40 hidden sm:block rotate-12">
          <CartoonGlasses />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
                style={{ background: "var(--sage)", color: "white" }}
              >
                Vision care that stays in the community
              </span>
              <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
                <span style={{ color: "var(--sage-dark)", fontSize: "clamp(3.5rem, 10vw, 7rem)" }}>Second Look:</span>
                <br />
                <span style={{ color: "var(--foreground)" }}>
                  Donated glasses, delivered by the people who know their community best.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8" style={{ color: "var(--muted)" }}>
                We connect eyeglass donations from Omaha with clinics in Sierra Leone — and train local workers to run distribution entirely on their own.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="rounded-full px-7 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: "var(--sage)" }}
                >
                  Our story
                </Link>
                <Link
                  href="/people"
                  className="rounded-full border-2 px-7 py-3.5 text-base font-bold transition-colors hover:opacity-80"
                  style={{ borderColor: "var(--foreground)", color: "var(--foreground)" }}
                >
                  Meet the people
                </Link>
              </div>
            </div>

            {/* Cartoon panel */}
            <div className="flex-shrink-0 flex flex-col items-center gap-6">
              <div className="flex gap-4 items-end">
                <CartoonFace color="#f5c842" />
                <CartoonFace color="#2aa8a0" />
                <CartoonFace color="#e07b39" />
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                Every pair finds the right eyes 👓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact numbers strip ── */}
      <section
        className="px-6 py-12"
        style={{ background: "var(--sage)", color: "white" }}
      >
        <div className="mx-auto max-w-6xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {IMPACT.stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black">{s.value}</p>
              <p className="mt-1 text-sm font-medium opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What we do cards ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--clay)" }}>
            What we do
          </p>
          <h2 className="text-4xl font-black mb-12" style={{ color: "var(--foreground)" }}>
            Simple idea. Real impact.
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { emoji: "🥽", title: "Collect donations", body: "Prescription and reading glasses donated by communities in Omaha.", color: "#fef3c0" },
              { emoji: "🌍", title: "Ship to clinics", body: "Glasses go to partner clinics in Sierra Leone and beyond.", color: "#ccfbf1" },
              { emoji: "🤝", title: "Train local workers", body: "Clinic staff are trained on our inventory system and run distribution independently.", color: "#fce7f3" },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 border-2"
                style={{ background: card.color, borderColor: "var(--border)" }}
              >
                <span className="text-4xl">{card.emoji}</span>
                <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
                <p className="mt-2 leading-7" style={{ color: "var(--muted)" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore pages strip ── */}
      <section className="px-6 py-16" style={{ background: "var(--foreground)", color: "white" }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black mb-8">Explore Second Look</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/mission", label: "Our Mission", desc: "Why we do this work", color: "var(--sage)" },
              { href: "/impact", label: "Impact", desc: "Numbers that matter", color: "var(--clay)" },
              { href: "/locations", label: "Locations", desc: "Where we work", color: "var(--teal)" },
              { href: "/people", label: "People", desc: "The team & workers", color: "var(--pink)" },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{ background: card.color }}
              >
                <p className="text-lg font-bold text-white">{card.label}</p>
                <p className="mt-1 text-sm text-white/80">{card.desc}</p>
                <span className="mt-4 block text-white font-bold">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-6">
          <CartoonHeart />
          <h2 className="text-4xl font-black max-w-xl" style={{ color: "var(--foreground)" }}>
            Have glasses to donate?
          </h2>
          <p className="text-lg max-w-md" style={{ color: "var(--muted)" }}>
            Every donated pair could change someone's ability to see, work, and live fully.
          </p>
          <Link
            href="/contact"
            className="rounded-full px-8 py-4 text-base font-bold text-white"
            style={{ background: "var(--clay)" }}
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
