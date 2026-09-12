import {
  ABOUT,
  AWARDS,
  CONTACT_EMAIL,
  HOW_IT_WORKS,
  IMPACT,
  LOCATIONS,
  MISSION,
  PARTNERS,
  TEAM,
} from "./data";

const NAV = [
  { href: "#mission", label: "Mission" },
  { href: "#about", label: "About" },
  { href: "#how", label: "How it works" },
  { href: "#impact", label: "Impact" },
  { href: "#locations", label: "Locations" },
  { href: "#people", label: "People" },
  { href: "#partners", label: "Partners" },
  ...(AWARDS.length > 0 ? [{ href: "#awards", label: "Awards" }] : []),
];

function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-full bg-sage text-card"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="19" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M14 12h1" stroke="currentColor" strokeWidth="2" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight">Second Look</span>
    </span>
  );
}

export default function Home() {
  const usTeam = TEAM.filter((p) => p.location !== "Sierra Leone");
  const slTeam = TEAM.filter((p) => p.location === "Sierra Leone");
  const otherLocations = Array.from(
    new Set(
      TEAM.filter((p) => p.location !== "United States" && p.location !== "Sierra Leone").map(
        (p) => p.location
      )
    )
  );

  return (
    <div className="flex flex-1 flex-col">
      {/* ---------------------------------------------------------------- Nav */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top">
            <Logo />
          </a>
          <div className="hidden gap-6 text-sm text-muted sm:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get involved
          </a>
        </nav>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        {/* ------------------------------------------------------------- Hero */}
        <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-clay-dark">
            Vision care that stays in the community
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Donated glasses, delivered by the people who know their community
            best.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Second Look connects eyeglass donations from Omaha with clinics in
            low-resource communities — and gives local workers the tools to run
            distribution on their own.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-card transition-colors hover:bg-sage-dark"
            >
              Our story
            </a>
            <a
              href="#people"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
            >
              Meet the people
            </a>
          </div>
        </section>

        {/* ---------------------------------------------------------- Mission */}
        <section
          id="mission"
          className="border-y border-border bg-card px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
              Our mission
            </h2>
            <p className="mt-6 max-w-3xl text-2xl leading-10 font-medium sm:text-3xl">
              {MISSION}
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------------ About */}
        <section id="about" className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
            {ABOUT.heading}
          </h2>
          <div className="mt-6 max-w-3xl space-y-5">
            {ABOUT.body.map((para, i) => (
              <p key={i} className="text-lg leading-8 text-muted">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------- How it works */}
        <section
          id="how"
          className="border-y border-border bg-card px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
              How it works
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-sm font-mono text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted leading-7">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- Impact */}
        <section id="impact" className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
            Our impact
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            {IMPACT.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <p className="text-4xl font-semibold text-sage">{s.value}</p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          {IMPACT.note && (
            <p className="mt-6 text-sm text-muted">{IMPACT.note}</p>
          )}
        </section>

        {/* --------------------------------------------------------- Locations */}
        <section
          id="locations"
          className="border-y border-border bg-card px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
              Where we work
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              We started in Sierra Leone and are growing. Every location has
              trained local workers running distribution independently.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {LOCATIONS.map((loc, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-lg font-semibold">{loc.country}</p>
                      <p className="text-sm text-muted">{loc.city}</p>
                    </div>
                    {loc.active && (
                      <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-sage-dark">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {loc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- People */}
        <section id="people" className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
            The people behind Second Look
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            From volunteers in Omaha to the clinic workers running distribution
            on the ground — this work depends on all of them.
          </p>

          {/* Sierra Leone workers — highlighted */}
          {slTeam.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold">Sierra Leone — Clinic Workers</h3>
              <p className="mt-1 text-sm text-muted">
                These are the people on the ground making it happen every day.
              </p>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {slTeam.map((p, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-sage/40 bg-sage/10 p-5"
                  >
                    <p className="font-semibold">{p.name}</p>
                    <p className="mt-1 text-sm text-muted">{p.role}</p>
                    {p.bio && (
                      <p className="mt-2 text-sm leading-6 text-muted">{p.bio}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* US team */}
          {usTeam.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold">United States — Omaha Team</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {usTeam.map((p, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <p className="font-semibold">{p.name}</p>
                    <p className="mt-1 text-sm text-muted">{p.role}</p>
                    {p.bio && (
                      <p className="mt-2 text-sm leading-6 text-muted">{p.bio}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Other locations */}
          {otherLocations.map((loc) => (
            <div className="mt-12" key={loc}>
              <h3 className="text-lg font-semibold">{loc}</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {TEAM.filter((p) => p.location === loc).map((p, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <p className="font-semibold">{p.name}</p>
                    <p className="mt-1 text-sm text-muted">{p.role}</p>
                    {p.bio && (
                      <p className="mt-2 text-sm leading-6 text-muted">{p.bio}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* --------------------------------------------------------- Partners */}
        <section
          id="partners"
          className="border-y border-border bg-card px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
              Omaha partnerships
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              Our work starts at home. These Omaha organizations help us collect
              glasses, run drives, and get donations where they&apos;re needed.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PARTNERS.map((p, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <p className="font-semibold">{p.name}</p>
                  {p.note && (
                    <p className="mt-1 text-sm text-muted">{p.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------------- Awards */}
        {AWARDS.length > 0 && (
          <section id="awards" className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
              Awards & recognition
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AWARDS.map((a, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <p className="font-semibold">{a.title}</p>
                  <p className="mt-1 text-sm text-muted">
                    {a.organization} · {a.year}
                  </p>
                  {a.note && (
                    <p className="mt-2 text-sm text-muted">{a.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ------------------------------------------------------------- CTA */}
        <section className="border-t border-border bg-sage px-6 py-20 text-card">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Have glasses to donate, or want to partner with us?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-card/80">
              We&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-block rounded-full bg-card px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      {/* --------------------------------------------------------------- Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
          <Logo />
          <p>
            © {new Date().getFullYear()} Second Look. Facilitating eyeglass
            donation for low-resource communities.
          </p>
        </div>
      </footer>
    </div>
  );
}
