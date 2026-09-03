// ---------------------------------------------------------------------------
// Site content. Edit the values here to update the website — no need to touch
// the layout code in page.tsx.
// ---------------------------------------------------------------------------

export const MISSION =
  "We facilitate eyeglass donation to low-resource communities and equip local workers with an inventory system to manage the donated glasses and their own stock — enabling clinics to independently sustain vision care within their own communities.";

export const HOW_IT_WORKS = [
  {
    title: "Collect & donate glasses",
    body: "We gather donated prescription and reading glasses from communities in Omaha and channel them to partner clinics in low-resource settings.",
  },
  {
    title: "Equip local workers",
    body: "Clinic staff get a simple inventory system to catalog every pair by prescription, match patients to the right glasses, and track what they have on hand.",
  },
  {
    title: "Sustain distribution locally",
    body: "With tools and training in place, clinics run distribution themselves — no outside logistics required — and keep serving their communities long-term.",
  },
];

// Omaha-area partners. Add or edit entries as partnerships grow.
export const PARTNERS: { name: string; note?: string }[] = [
  { name: "Partner organization", note: "Short description of the partnership" },
  { name: "Partner organization", note: "Short description of the partnership" },
  { name: "Partner organization", note: "Short description of the partnership" },
];

// People who make Second Look work. `role` is free text; `location` groups them.
export const TEAM: { name: string; role: string; location: string }[] = [
  { name: "Team member", role: "Role / title", location: "United States" },
  { name: "Team member", role: "Role / title", location: "United States" },
  { name: "Staff member", role: "Clinic role", location: "Sierra Leone" },
  { name: "Staff member", role: "Clinic role", location: "Sierra Leone" },
];

export const CONTACT_EMAIL = "hello@secondlook.org";
