import { ABOUT } from "../data";

export const metadata = { title: "About — Second Look" };

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #fef3c0 0%, #fdf9f4 100%)" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-12 lg:items-center">
          <div className="flex-1">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "var(--clay)", color: "white" }}>
              About us
            </span>
            <h1 className="text-5xl font-black leading-tight sm:text-6xl" style={{ color: "var(--foreground)" }}>
              {ABOUT.heading}
            </h1>
          </div>
          {/* Cartoon glasses decoration */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="260" height="120">
              {/* Big cartoon glasses */}
              <rect x="10" y="20" width="100" height="70" rx="35" fill="#fef3c0" stroke="#1a1612" strokeWidth="4" />
              <rect x="150" y="20" width="100" height="70" rx="35" fill="#fef3c0" stroke="#1a1612" strokeWidth="4" />
              <path d="M110 50 Q130 38 150 50" stroke="#1a1612" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M10 48 Q-12 48 -15 70" stroke="#1a1612" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M260 48 Q272 48 275 70" stroke="#1a1612" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Stars */}
              <circle cx="55" cy="55" r="10" fill="white" opacity="0.7" />
              <circle cx="78" cy="42" r="6" fill="white" opacity="0.5" />
              <circle cx="195" cy="55" r="10" fill="white" opacity="0.7" />
              <circle cx="218" cy="42" r="6" fill="white" opacity="0.5" />
              {/* Sparkles */}
              <path d="M130 10 L132 4 L134 10 L140 12 L134 14 L132 20 L130 14 L124 12Z" fill="var(--clay)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          {ABOUT.body.map((para, i) => (
            <p key={i} className="text-xl leading-9" style={{ color: i === 0 ? "var(--foreground)" : "var(--muted)" }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20" style={{ background: "var(--sage)", color: "white" }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black mb-12">Our journey</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { year: "2024", label: "Founded", desc: "Second Look launched in Omaha with a mission to connect donated glasses with low-resource clinics." },
              { year: "2025", label: "Sierra Leone launch", desc: "Partnered with clinics in Sierra Leone and trained local workers on our custom inventory system." },
              { year: "Future", label: "Growing", desc: "Expanding to more countries and building the infrastructure for communities to sustain their own vision care." },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.1)" }}>
                <p className="text-3xl font-black text-white/50">{t.year}</p>
                <p className="mt-2 text-lg font-bold">{t.label}</p>
                <p className="mt-2 text-white/75 leading-7">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
