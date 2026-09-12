import { IMPACT } from "../data";

export const metadata = { title: "Impact — Second Look" };

const STAT_COLORS = ["var(--sage)", "var(--clay)", "var(--teal)", "var(--pink)"];

export default function ImpactPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fdf9f4 100%)" }}
      >
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "var(--pink)", color: "white" }}>
            Our impact
          </span>
          <h1 className="text-5xl font-black leading-tight sm:text-6xl" style={{ color: "var(--foreground)" }}>
            Progress you can see.
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8" style={{ color: "var(--muted)" }}>
            Every number below represents a real person who can now see more clearly. We track our progress publicly so our team, our donors, and our community can follow along.
          </p>
        </div>
      </section>

      {/* Big stats */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.stats.map((s, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 text-center text-white"
              style={{ background: STAT_COLORS[i % STAT_COLORS.length] }}
            >
              <p className="text-6xl font-black">{s.value}</p>
              <p className="mt-3 text-lg font-semibold opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
        {IMPACT.note && (
          <p className="mt-8 text-center text-sm" style={{ color: "var(--muted)" }}>{IMPACT.note}</p>
        )}
      </section>

      {/* What the numbers mean */}
      <section className="px-6 py-20" style={{ background: "var(--foreground)" }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-white mb-12">What these numbers mean</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: "👓", title: "Each donated pair", body: "Is measured, cataloged by prescription in our inventory system, and matched precisely to a patient in need — not just handed out randomly." },
              { icon: "🏥", title: "Each patient helped", body: "Receives glasses that match their actual prescription, improving their ability to read, work, and live their daily life." },
              { icon: "📱", title: "Our inventory system", body: "Trained clinic workers in Sierra Leone use a custom digital inventory system to manage stock and match patients — running the whole system themselves." },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.07)" }}>
                <span className="text-4xl">{c.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-white/70 leading-7">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
