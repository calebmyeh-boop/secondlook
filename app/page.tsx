import {
  MISSION,
  HOW_IT_WORKS,
  PARTNERS,
  TEAM,
  CONTACT_EMAIL,
} from "./data";

const NAV = [
  { href: "#mission", label: "Mission" },
  { href: "#how", label: "How it works" },
  { href: "#partners", label: "Partners" },
  { href: "#people", label: "People" },
];

function Logo() {
  // Placeholder mark — swap for Nathan's logo (drop an SVG/PNG in /public
  // and replace this with <Image src="/logo.svg" ... />).
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
  const locations = Array.from(new Set(TEAM.map((p) => p.location)));

  return (
    <div className="flex flex-1 flex-col">
      {/* ---------------------------------------------------------------- Nav */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top">
            <Logo />
          </a>
          <div className="hidden gap-8 text-sm text-muted sm:flex">
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
              href="#how"
              className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-card transition-colors hover:bg-sage-dark"
            >
              See how it works
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

        {/* ----------------------------------------------------- How it works */}
        <section id="how" className="mx-auto w-full max-w-5xl px-6 py-20">
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
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
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

        {/* ----------------------------------------------------------- People */}
        <section id="people" className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-sm font-medium uppercase tracking-widest text-clay-dark">
            The people behind Second Look
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            From volunteers in Omaha to the clinic staff running distribution on
            the ground — this work depends on all of them.
          </p>

          <div className="mt-12 space-y-12">
            {locations.map((loc) => (
              <div key={loc}>
                <h3 className="text-lg font-semibold">{loc}</h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {TEAM.filter((p) => p.location === loc).map((p, i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <p className="font-semibold">{p.name}</p>
                      <p className="mt-1 text-sm text-muted">{p.role}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

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
