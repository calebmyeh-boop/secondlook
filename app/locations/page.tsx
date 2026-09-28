import { LOCATIONS } from "../data";

export const metadata = { title: "Locations — Second Look" };

export default function LocationsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="fade-in mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          Where we work
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Starting in Sierra Leone.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: "var(--muted)" }}>
          Every location has trained local workers running glasses distribution independently using our inventory system.
        </p>
      </section>

      <section className="border-y px-6 py-20" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="rounded-xl border p-6" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-xl font-semibold">{loc.country}</p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>{loc.city}</p>
                </div>
                {loc.active && (
                  <span className="rounded-full px-3 py-1 text-xs font-medium text-white" style={{ background: "var(--sage)" }}>
                    Active
                  </span>
                )}
              </div>
              <p className="leading-7" style={{ color: "var(--muted)" }}>{loc.description}</p>
            </div>
          ))}
          <div className="rounded-xl border border-dashed p-6 flex items-center justify-center text-center" style={{ borderColor: "var(--border)" }}>
            <div>
              <p className="font-semibold">More countries coming</p>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>We are actively growing our program.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
