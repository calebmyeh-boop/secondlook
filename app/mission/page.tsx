import { MISSION, HOW_IT_WORKS } from "../data";

export const metadata = { title: "Mission — Second Look" };

export default function MissionPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #ccfbf1 0%, #fdf9f4 100%)" }}
      >
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "var(--teal)", color: "white" }}>
            Our mission
          </span>
          <h1 className="text-5xl font-black leading-tight max-w-3xl sm:text-6xl" style={{ color: "var(--foreground)" }}>
            Vision care that stays in the community.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 font-medium" style={{ color: "var(--sage-dark)" }}>
            {MISSION}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--clay)" }}>
            How it works
          </p>
          <h2 className="text-4xl font-black mb-14" style={{ color: "var(--foreground)" }}>
            From donation to distribution.
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="relative">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-white font-black text-lg mb-5"
                  style={{ background: i === 0 ? "var(--sage)" : i === 1 ? "var(--clay)" : "var(--teal)" }}
                >
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="leading-7" style={{ color: "var(--muted)" }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20" style={{ background: "var(--foreground)" }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12">What we believe</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Local ownership", body: "Communities know what they need. We equip local workers with tools and training, then step back." },
              { title: "Sustainability over dependency", body: "Our goal is to leave lasting infrastructure — not create reliance on outside help." },
              { title: "Dignity in access", body: "Access to vision care is a right. Every donated pair is matched by prescription, not given at random." },
              { title: "Credit where it's due", body: "The workers on the ground are the heroes. We celebrate and credit them publicly." },
            ].map((v, i) => (
              <div key={i} className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.07)" }}>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/70 leading-7">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
