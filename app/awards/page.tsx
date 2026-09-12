import { AWARDS } from "../data";

export const metadata = { title: "Awards & Recognition — Second Look" };

export default function AwardsPage() {
  return (
    <div>
      <section
        className="px-6 py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #fef3c0 0%, #fdf9f4 100%)" }}
      >
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "var(--yellow)", color: "var(--foreground)" }}>
            Awards & recognition
          </span>
          <h1 className="text-5xl font-black leading-tight sm:text-6xl" style={{ color: "var(--foreground)" }}>
            Recognized for impact.
          </h1>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {AWARDS.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed p-12 text-center" style={{ borderColor: "var(--border)" }}>
              <span className="text-5xl">🏆</span>
              <p className="mt-4 text-xl font-bold" style={{ color: "var(--muted)" }}>Awards coming soon</p>
              <p className="mt-2" style={{ color: "var(--muted)" }}>Check back as Second Look grows.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AWARDS.map((a, i) => (
                <div
                  key={i}
                  className="rounded-2xl border-2 p-7"
                  style={{ borderColor: "var(--yellow)", background: "var(--yellow-light)" }}
                >
                  <span className="text-3xl">🏆</span>
                  <p className="mt-4 text-lg font-bold">{a.title}</p>
                  <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{a.organization} · {a.year}</p>
                  {a.note && <p className="mt-3 text-sm leading-6" style={{ color: "var(--muted)" }}>{a.note}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
