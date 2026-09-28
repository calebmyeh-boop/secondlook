import { AWARDS } from "../data";

export const metadata = { title: "Awards & Recognition — Second Look" };

export default function AwardsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          Awards & recognition
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Recognized for impact.
        </h1>
      </section>

      <section className="border-y px-6 py-20" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="mx-auto max-w-5xl">
          {AWARDS.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>Awards coming soon.</p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AWARDS.map((a, i) => (
                <li key={i} className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                  <p className="font-semibold">{a.title}</p>
                  <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{a.organization} · {a.year}</p>
                  {a.note && <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>{a.note}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
