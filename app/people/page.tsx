import { TEAM } from "../data";

export const metadata = { title: "People — Second Look" };

export default function PeoplePage() {
  const slTeam = TEAM.filter((p) => p.location === "Sierra Leone");
  const usTeam = TEAM.filter((p) => p.location === "United States");
  const other = TEAM.filter((p) => p.location !== "Sierra Leone" && p.location !== "United States");

  return (
    <div>
      {/* Header */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fef3c0 100%)" }}
      >
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "var(--pink)", color: "white" }}>
            The people
          </span>
          <h1 className="text-5xl font-black leading-tight sm:text-6xl" style={{ color: "var(--foreground)" }}>
            The workers are the heroes.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8" style={{ color: "var(--muted)" }}>
            From clinic staff in Sierra Leone who run distribution every day, to the Omaha team who makes it possible — Second Look only works because of these people.
          </p>
        </div>
      </section>

      {/* Sierra Leone workers — HIGHLIGHTED */}
      {slTeam.length > 0 && (
        <section className="px-6 py-20" style={{ background: "var(--sage)" }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4" style={{ background: "var(--yellow)", color: "var(--foreground)" }}>
                🌟 Spotlight
              </span>
              <h2 className="text-3xl font-black text-white">Sierra Leone Clinic Workers</h2>
              <p className="mt-3 text-white/80 max-w-xl text-lg">
                These are the people on the ground making it happen every single day. They were trained on our custom inventory system and now run glasses distribution entirely independently.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {slTeam.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)" }}
                >
                  {/* Cartoon face placeholder */}
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center text-2xl font-black mb-4"
                    style={{ background: "var(--yellow)", color: "var(--foreground)" }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <p className="text-lg font-bold text-white">{p.name}</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>{p.role}</p>
                  {p.bio && (
                    <p className="mt-3 text-sm leading-6" style={{ color: "rgba(255,255,255,0.8)" }}>{p.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* US Team */}
      {usTeam.length > 0 && (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-black mb-2" style={{ color: "var(--foreground)" }}>United States — Omaha Team</h2>
            <p className="mb-10" style={{ color: "var(--muted)" }}>The team behind the scenes that makes Second Look run.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {usTeam.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl border-2 p-6"
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}
                >
                  <div
                    className="h-14 w-14 rounded-full flex items-center justify-center text-xl font-black mb-4 text-white"
                    style={{ background: "var(--clay)" }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <p className="text-lg font-bold">{p.name}</p>
                  <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{p.role}</p>
                  {p.bio && (
                    <p className="mt-3 text-sm leading-6" style={{ color: "var(--muted)" }}>{p.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other locations */}
      {other.length > 0 && (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            {Array.from(new Set(other.map((p) => p.location))).map((loc) => (
              <div key={loc} className="mb-12">
                <h2 className="text-2xl font-black mb-6">{loc}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {other.filter((p) => p.location === loc).map((p, i) => (
                    <div key={i} className="rounded-2xl border-2 p-6" style={{ borderColor: "var(--border)" }}>
                      <p className="font-bold">{p.name}</p>
                      <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{p.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
