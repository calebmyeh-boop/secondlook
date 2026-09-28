import { ABOUT, HOW_IT_WORKS } from "../data";

export const metadata = { title: "About — Second Look" };

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="fade-in mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          About us
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {ABOUT.heading}
        </h1>
      </section>

      <section className="border-y px-6 py-20" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="mx-auto max-w-5xl space-y-6">
          {ABOUT.body.map((para, i) => (
            <p key={i} className="max-w-3xl text-lg leading-9" style={{ color: i === 0 ? "var(--foreground)" : "var(--muted)" }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          How it works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-mono text-sm" style={{ color: "var(--sage)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-7" style={{ color: "var(--muted)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
