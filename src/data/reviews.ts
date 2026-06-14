export type Review = {
  id: string;
  name: string;
  initials: string;
  role: string;
  time: string;
  rating: number;
  text: string;
  helpful: number;
  gradient: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Li Lin Sonia",
    initials: "LS",
    role: "Local Guide · 49 reviews · 110 photos",
    time: "4 months ago",
    rating: 5,
    text: "We had an amazing time there. The food is amazing. I love the way they have a menu for people who wanna share, and the prices are very affordable. Loved every bite of the food.",
    helpful: 12,
    gradient: "from-rose-500/30 to-amber-500/30",
  },
  {
    id: "r2",
    name: "Giramata Umulkheri",
    initials: "GU",
    role: "Local Guide · 7 reviews · 36 photos",
    time: "2 years ago",
    rating: 5,
    text: "I went to this place on Sunday and I really liked it. The chicken was amazing, and I've tried other places, but this one is special. I'm definitely going back for this chicken. The place is nice, and the staff are friendly and provide good service.",
    helpful: 9,
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    id: "r3",
    name: "Christopher Kumaran",
    initials: "CK",
    role: "Local Guide · 831 reviews · 1,561 photos",
    time: "6 months ago",
    rating: 3,
    text: "Good food. The atmosphere is lovely and the steak was cooked well. A genuinely beautiful place for an evening out in Kigali — just come ready to relax and enjoy the vibe.",
    helpful: 6,
    gradient: "from-sky-500/30 to-indigo-500/30",
  },
  {
    id: "r4",
    name: "Aline Uwase",
    initials: "AU",
    role: "Local Guide · 22 reviews",
    time: "3 weeks ago",
    rating: 5,
    text: "Booked a table for our anniversary and the team made it feel so special — candlelight, a little dessert surprise, and service that actually cared. The sharing platter is a must. We'll be regulars.",
    helpful: 4,
    gradient: "from-fuchsia-500/30 to-pink-500/30",
  },
  {
    id: "r5",
    name: "David Mutesi",
    initials: "DM",
    role: "38 reviews · 54 photos",
    time: "2 months ago",
    rating: 4,
    text: "Great spot for a date night in Kigali. The pepper steak and the signature cocktails were the highlight for me. Warm interior, good music, and the prices are fair for the quality.",
    helpful: 3,
    gradient: "from-amber-500/30 to-orange-500/30",
  },
];

// Counts chosen so the weighted average rounds to 4.2 over 93 reviews
export const ratingBreakdown = [
  { stars: 5, count: 54 },
  { stars: 4, count: 18 },
  { stars: 3, count: 10 },
  { stars: 2, count: 6 },
  { stars: 1, count: 5 },
];

export const reviewTags = [
  { label: "food", count: 17 },
  { label: "atmosphere", count: 7 },
  { label: "customer care", count: 5 },
  { label: "beautiful place", count: 4 },
  { label: "fish", count: 2 },
  { label: "waiting time", count: 2 },
];
