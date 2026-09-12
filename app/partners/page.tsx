import { PARTNERS } from "../data";

export const metadata = { title: "Partners — Second Look" };

export default function PartnersPage() {
  return (
    <div>
      <section
        className="px-6 py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #fef3c0 0%, #fdf9f4 100%)" }}
      >
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "var(--clay)", color: "white" }}>
            Partners
          </span>
          <h1 className="text-5xl font-black leading-tight sm:text-6xl" style={{ color: "var(--foreground)" }}>
            Our work starts in Omaha.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8" style={{ color: "var(--muted)" }}>
            These Omaha organizations help us collect glasses, run donation drives, and get pairs where they&apos;re needed.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 p-7"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <div
                className="h-12 w-12 rounded-full mb-4"
                style={{ background: i % 3 === 0 ? "var(--sage)" : i % 3 === 1 ? "var(--clay)" : "var(--teal)" }}
              />
              <p className="text-lg font-bold">{p.name}</p>
              {p.note && <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>{p.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: "var(--sage)", color: "white" }}>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-black mb-4">Want to partner with us?</h2>
          <p className="text-white/80 text-lg mb-8">
            We welcome partnerships with optometry offices, community organizations, schools, and businesses who want to collect or donate glasses.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full px-8 py-4 text-base font-bold"
            style={{ background: "var(--yellow)", color: "var(--foreground)" }}
          >
            Get in touch →
          </a>
        </div>
      </section>
    </div>
  );
}
