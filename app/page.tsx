import Link from "next/link";
import { IMPACT } from "./data";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="w-full px-6 pt-20 pb-16 sm:pt-28 sm:pb-24" style={{ background: "#dbeafe" }}>
        <div className="fade-in mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          Vision care that stays in the community
        </p>
        <h1 className="max-w-5xl font-semibold leading-tight tracking-tight">
          <strong style={{ display: "block", fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: 1, whiteSpace: "nowrap", fontFamily: "var(--font-dm-serif)", fontWeight: 400 }}>Second Look</strong>
          <span className="text-2xl sm:text-3xl font-normal" style={{ color: "var(--muted)" }}>Donated glasses, delivered by the people who know their community best.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: "var(--muted)" }}>
          Second Look connects eyeglass donations from Omaha with clinics in low-resource communities — and gives local workers the tools to run distribution on their own.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
            style={{ background: "var(--sage)" }}
          >
            See how it works
          </Link>
          <Link
            href="/people"
            className="rounded-full border px-6 py-3 text-sm font-medium transition-colors"
            style={{ borderColor: "var(--border)" }}
          >
            Meet the people
          </Link>
        </div>
        </div>
      </section>

      {/* Impact strip */}
      <section className="border-y px-6 py-16" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="mx-auto max-w-5xl grid grid-cols-2 gap-8 sm:grid-cols-4">
          {IMPACT.stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-semibold tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          How it works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            { num: "01", title: "Collect donations", body: "Prescription and reading glasses donated by communities in Omaha." },
            { num: "02", title: "Ship to clinics", body: "Glasses go to partner clinics in Sierra Leone and beyond." },
            { num: "03", title: "Train local workers", body: "Clinic staff are trained on our inventory system and run distribution independently." },
          ].map((step) => (
            <div key={step.num} className="flex flex-col">
              <span className="font-mono text-sm" style={{ color: "var(--sage)" }}>{step.num}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-7" style={{ color: "var(--muted)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t px-6 py-20 text-white" style={{ borderColor: "var(--border)", background: "var(--sage)" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Have glasses to donate, or want to partner with us?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full px-6 py-3 text-sm font-medium"
            style={{ background: "var(--card)", color: "var(--foreground)" }}
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
