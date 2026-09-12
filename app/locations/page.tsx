import { LOCATIONS } from "../data";

export const metadata = { title: "Locations — Second Look" };

export default function LocationsPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #ccfbf1 0%, #fdf9f4 100%)" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-12 lg:items-center">
          <div className="flex-1">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "var(--teal)", color: "white" }}>
              Where we work
            </span>
            <h1 className="text-5xl font-black leading-tight sm:text-6xl" style={{ color: "var(--foreground)" }}>
              Starting in Sierra Leone.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8" style={{ color: "var(--muted)" }}>
              Every location has trained local workers running glasses distribution independently using our inventory system.
            </p>
          </div>
          {/* Cartoon globe */}
          <div className="flex-shrink-0 flex justify-center">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
              <circle cx="100" cy="100" r="85" fill="#2aa8a0" stroke="#1a1612" strokeWidth="3" />
              <ellipse cx="100" cy="100" rx="45" ry="85" fill="none" stroke="#1a1612" strokeWidth="2" opacity="0.4" />
              <line x1="15" y1="100" x2="185" y2="100" stroke="#1a1612" strokeWidth="2" opacity="0.4" />
              <path d="M30 65 Q100 45 170 65" stroke="#1a1612" strokeWidth="2" opacity="0.4" fill="none" />
              <path d="M30 135 Q100 155 170 135" stroke="#1a1612" strokeWidth="2" opacity="0.4" fill="none" />
              {/* Africa shape hint */}
              <ellipse cx="95" cy="105" rx="18" ry="26" fill="#fef3c0" stroke="#1a1612" strokeWidth="2" opacity="0.8" />
              {/* Pin */}
              <circle cx="95" cy="92" r="8" fill="#e85b8a" stroke="#1a1612" strokeWidth="2" />
              <path d="M95 100 L95 115" stroke="#e85b8a" strokeWidth="3" strokeLinecap="round" />
              {/* Glasses on globe */}
              <rect x="58" y="88" width="22" height="14" rx="7" fill="white" stroke="#1a1612" strokeWidth="1.5" />
              <rect x="120" y="88" width="22" height="14" rx="7" fill="white" stroke="#1a1612" strokeWidth="1.5" />
              <path d="M80 94 Q100 90 120 94" stroke="#1a1612" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* Location cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="rounded-3xl border-2 p-8"
              style={{ borderColor: loc.active ? "var(--teal)" : "var(--border)", background: loc.active ? "#f0fdfb" : "var(--card)" }}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div>
                  <p className="text-2xl font-black">{loc.country}</p>
                  <p className="text-base mt-1" style={{ color: "var(--muted)" }}>{loc.city}</p>
                </div>
                {loc.active && (
                  <span className="rounded-full px-4 py-1.5 text-sm font-bold" style={{ background: "var(--teal)", color: "white" }}>
                    ● Active
                  </span>
                )}
              </div>
              <p className="leading-7 text-lg" style={{ color: "var(--muted)" }}>{loc.description}</p>
            </div>
          ))}

          {/* Coming soon placeholder */}
          <div
            className="rounded-3xl border-2 border-dashed p-8 flex flex-col items-center justify-center text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-5xl mb-4">🌍</span>
            <p className="text-xl font-bold" style={{ color: "var(--muted)" }}>More countries coming</p>
            <p className="mt-2" style={{ color: "var(--muted)" }}>We are actively growing our program to additional locations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
