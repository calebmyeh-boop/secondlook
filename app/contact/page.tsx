import { CONTACT_EMAIL } from "../data";

export const metadata = { title: "Contact — Second Look" };

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--clay-dark)" }}>
          Get involved
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8" style={{ color: "var(--muted)" }}>
          Whether you want to donate glasses, partner with us, volunteer, or just learn more — we&apos;d love to hear from you.
        </p>
      </section>

      <section className="border-y px-6 py-20" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="mx-auto max-w-5xl grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-6">Ways to get involved</h2>
            <ul className="space-y-4">
              {[
                { title: "Donate glasses", body: "Have prescription or reading glasses to donate? Reach out and we'll arrange pickup or dropoff." },
                { title: "Partner with us", body: "Optometry offices, schools, businesses — we welcome partnerships for collection drives." },
                { title: "Volunteer", body: "Help with sorting, cataloging, events, or fundraising in Omaha." },
                { title: "Spread the word", body: "Follow our work and share it with people who might want to help." },
              ].map((item, i) => (
                <li key={i} className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-6" style={{ color: "var(--muted)" }}>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold mb-3">Send us an email</h2>
            <p className="mb-6 text-sm leading-6" style={{ color: "var(--muted)" }}>We read every message and respond personally.</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--sage)" }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
