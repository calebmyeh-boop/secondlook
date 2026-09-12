// ---------------------------------------------------------------------------
// Site content. Edit the values here to update the website — no need to touch
// the layout code in page.tsx.
// ---------------------------------------------------------------------------

export const CONTACT_EMAIL = "hello@secondlook.org"; // ← update with your real email

export const MISSION =
  "We facilitate eyeglass donation to low-resource communities and equip local workers with an inventory system to manage the donated glasses and their own stock — enabling clinics to independently sustain vision care within their own communities.";

export const ABOUT = {
  heading: "About Second Look",
  body: [
    "Second Look is a nonprofit based in Omaha, Nebraska, that collects donated prescription and reading glasses and connects them with clinics in low-resource communities around the world.",
    "Our flagship program began in Sierra Leone, where we partnered with local clinic staff and trained them to use a custom-built inventory system designed specifically for managing donated glasses. Workers can catalog every pair by prescription, match patients to the right lenses, and track inventory on their own — no outside help required.",
    "Our goal is simple: leave lasting infrastructure, not dependency. By training and equipping local workers with the right tools, we help communities sustain their own vision care long after we're gone.",
  ],
};

export const HOW_IT_WORKS = [
  {
    title: "Collect & donate glasses",
    body: "We gather donated prescription and reading glasses from communities in Omaha and channel them to partner clinics in low-resource settings.",
  },
  {
    title: "Train local workers",
    body: "Clinic staff are trained to use a custom inventory system built for donated glasses — cataloging every pair by prescription, matching patients, and managing stock independently.",
  },
  {
    title: "Sustain distribution locally",
    body: "With tools and training in place, clinics run distribution themselves — no outside logistics required — and keep serving their communities long-term.",
  },
];

export const IMPACT = {
  stats: [
    { value: "500+", label: "Glasses donated" },      // ← update with real number
    { value: "300+", label: "Patients matched" },      // ← update with real number
    { value: "1", label: "Country served" },
    { value: "2024", label: "Year founded" },          // ← update if different
  ],
  note: "Numbers updated as of 2025. More to come.",
};

export const LOCATIONS: {
  country: string;
  city: string;
  description: string;
  active: boolean;
}[] = [
  {
    country: "Sierra Leone",
    city: "Freetown",                                  // ← update city if different
    description:
      "Our first deployment. Local clinic workers were trained on our inventory system and now run glasses distribution independently, matching donated pairs to patients by prescription.",
    active: true,
  },
  // Add more locations here as the program expands
];

// Omaha-area partners. Add or edit entries as partnerships grow.
export const PARTNERS: { name: string; note?: string }[] = [
  { name: "Partner organization", note: "Short description of the partnership" },
  { name: "Partner organization", note: "Short description of the partnership" },
  { name: "Partner organization", note: "Short description of the partnership" },
];

// People who make Second Look work.
// `role` is free text; `location` groups them on the page.
// `bio` is optional — a one-line note shown on their card.
// `highlight` marks workers who should be specially credited.
export const TEAM: {
  name: string;
  role: string;
  location: string;
  bio?: string;
  highlight?: boolean;
}[] = [
  // United States team
  { name: "Team member", role: "Founder", location: "United States" },
  { name: "Team member", role: "Role / title", location: "United States" },

  // Sierra Leone workers — add real names and roles here
  {
    name: "Staff member",
    role: "Inventory lead",
    location: "Sierra Leone",
    bio: "Trained on the Second Look inventory system and leads glasses distribution at the clinic.",
    highlight: true,
  },
  {
    name: "Staff member",
    role: "Clinic worker",
    location: "Sierra Leone",
    bio: "Matches patients to donated glasses using the Second Look system.",
    highlight: true,
  },
];

export const AWARDS: {
  title: string;
  organization: string;
  year: string | number;
  note?: string;
}[] = [
  // Add awards, recognitions, or press mentions here. Example:
  // { title: "Community Impact Award", organization: "Omaha Community Foundation", year: 2025 },
];
