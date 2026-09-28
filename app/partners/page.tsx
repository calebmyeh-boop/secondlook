import { PARTNERS } from "../data";

export const metadata = { title: "Partners — Second Look" };

export default function PartnersPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          Partners
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Our work starts in Omaha.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: "var(--muted)" }}>
          These Omaha organizations help us collect glasses, run donation drives, and get pairs where they&apos;re needed.
        </p>
      </section>

      <section className="border-y px-6 py-20" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="mx-auto max-w-5xl">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((p, i) => (
              <li key={i} className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                <p className="font-semibold">{p.name}</p>
                {p.note && <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{p.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
