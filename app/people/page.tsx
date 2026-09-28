import { TEAM } from "../data";

export const metadata = { title: "People — Second Look" };

export default function PeoplePage() {
  const locations = Array.from(new Set(TEAM.map((p) => p.location)));

  return (
    <div className="flex flex-1 flex-col">
      <section className="fade-in mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          The people
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          The workers are the heroes.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: "var(--muted)" }}>
          From clinic staff in Sierra Leone who run distribution every day, to the Omaha team who makes it possible.
        </p>
      </section>

      <section className="border-y px-6 py-20" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="mx-auto max-w-5xl space-y-12">
          {locations.map((loc) => (
            <div key={loc}>
              <h2 className="text-lg font-semibold mb-4">{loc}</h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {TEAM.filter((p) => p.location === loc).map((p, i) => (
                  <li key={i} className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                    <p className="font-semibold">{p.name}</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{p.role}</p>
                    {p.bio && <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>{p.bio}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
