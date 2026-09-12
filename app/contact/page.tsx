import { CONTACT_EMAIL } from "../data";

export const metadata = { title: "Contact — Second Look" };

export default function ContactPage() {
  return (
    <div>
      <section
        className="px-6 py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #ccfbf1 0%, #fef3c0 100%)" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="flex-1">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "var(--sage)", color: "white" }}>
              Get involved
            </span>
            <h1 className="text-5xl font-black leading-tight sm:text-6xl" style={{ color: "var(--foreground)" }}>
              Let&apos;s talk.
            </h1>
            <p className="mt-6 max-w-lg text-xl leading-8" style={{ color: "var(--muted)" }}>
              Whether you want to donate glasses, partner with us, volunteer, or just learn more — we&apos;d love to hear from you.
            </p>
          </div>

          {/* Cartoon envelope */}
          <div className="flex-shrink-0 flex justify-center">
            <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="220" height="176">
              <rect x="10" y="30" width="180" height="120" rx="12" fill="#fef3c0" stroke="#1a1612" strokeWidth="3" />
              <path d="M10 42 L100 100 L190 42" stroke="#1a1612" strokeWidth="3" strokeLinejoin="round" fill="none" />
              {/* Glasses on envelope */}
              <rect x="62" y="112" width="28" height="18" rx="9" fill="white" stroke="#1a1612" strokeWidth="2" />
              <rect x="110" y="112" width="28" height="18" rx="9" fill="white" stroke="#1a1612" strokeWidth="2" />
              <path d="M90 120 Q100 116 110 120" stroke="#1a1612" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Stars */}
              <path d="M160 15 L162 9 L164 15 L170 17 L164 19 L162 25 L160 19 L154 17Z" fill="var(--clay)" />
              <path d="M28 18 L29.5 13 L31 18 L36 19.5 L31 21 L29.5 26 L28 21 L23 19.5Z" fill="var(--teal)" />
            </svg>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2">
          {/* Ways to reach us */}
          <div>
            <h2 className="text-3xl font-black mb-8" style={{ color: "var(--foreground)" }}>Ways to get involved</h2>
            <div className="space-y-5">
              {[
                { emoji: "🥽", title: "Donate glasses", body: "Have prescription or reading glasses to donate? Reach out and we'll arrange pickup or dropoff." },
                { emoji: "🤝", title: "Partner with us", body: "Optometry offices, schools, businesses — we welcome partnership to run collection drives." },
                { emoji: "💛", title: "Volunteer", body: "Help with sorting, cataloging, events, or fundraising in Omaha." },
                { emoji: "📣", title: "Spread the word", body: "Follow our work and share it with people who might want to help." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 rounded-2xl p-5 border-2" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6" style={{ color: "var(--muted)" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email CTA */}
          <div className="flex flex-col justify-center">
            <div className="rounded-3xl p-10 text-center" style={{ background: "var(--sage)" }}>
              <span className="text-5xl">✉️</span>
              <h3 className="mt-6 text-2xl font-black text-white">Send us an email</h3>
              <p className="mt-3 text-white/80 text-lg">We read every message and respond personally.</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-8 inline-block rounded-full px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
                style={{ background: "var(--yellow)", color: "var(--foreground)" }}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
