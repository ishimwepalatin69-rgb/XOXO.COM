// Central business data for XOXO by Tasty Bites KGL
//
// ──────────────────────────────────────────────────────────────────────────
//  HOW TO ADD YOUR OWN REAL PHOTOS
//  There are two ways to set an image for any slot below:
//
//  ▸ METHOD 1 — Local image (fully self-contained, works offline)
//    1. Drop your photo into src/assets/real/   (e.g. my-dish.jpg)
//    2. Import it here:   import myDish from "@/assets/real/my-dish.jpg";
//    3. Use it:           heroSteak: myDish,
//
//  ▸ METHOD 2 — External URL (no rebuild of files; loads from the web)
//    heroSteak: "https://your-host.com/photo.jpg",
//    (Upload to Imgur, Cloudinary, Google Drive direct link, your own server…)
//
//  Either value works for ANY key. Mixing both is fine.
// ──────────────────────────────────────────────────────────────────────────

// (Local image imports work too — see src/assets/real/README.md for how.)

// Custom hero background image provided by the owner (used in the Home/Hero section).
export const heroImage = "https://files.catbox.moe/5zjzax.jpg";

// Custom "Our Story" interior photo provided by the owner.
export const interiorImage = "https://files.catbox.moe/40qhxw.jpg";

export const img = {
  heroSteak: heroImage,
  steakMicro: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&w=1100",
  steakSauce: "https://images.pexels.com/photos/1639559/pexels-photo-1639559.jpeg?auto=compress&cs=tinysrgb&w=1100",
  // Owner-supplied interior photo (shown in "Our Story").
  interior1: interiorImage,
  interior2: "https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&w=1200",
  interior3: "https://images.pexels.com/photos/6876589/pexels-photo-6876589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bar: "https://images.pexels.com/photos/19689233/pexels-photo-19689233.jpeg?auto=compress&cs=tinysrgb&w=1200",
  carbonara: "https://images.pexels.com/photos/29039082/pexels-photo-29039082.jpeg?auto=compress&cs=tinysrgb&w=1000",
  carbonara2: "https://images.pexels.com/photos/19062760/pexels-photo-19062760.jpeg?auto=compress&cs=tinysrgb&w=1000",
  meatballs: "https://images.pexels.com/photos/17989471/pexels-photo-17989471.jpeg?auto=compress&cs=tinysrgb&w=1000",
  meatballsMash: "https://images.pexels.com/photos/30335689/pexels-photo-30335689.jpeg?auto=compress&cs=tinysrgb&w=1000",
  fries: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1000",
  friesBasket: "https://images.pexels.com/photos/17354196/pexels-photo-17354196.jpeg?auto=compress&cs=tinysrgb&w=1000",
  dessertFlower: "https://images.pexels.com/photos/35022614/pexels-photo-35022614.jpeg?auto=compress&cs=tinysrgb&w=1000",
  dessertTower: "https://images.pexels.com/photos/36740867/pexels-photo-36740867.jpeg?auto=compress&cs=tinysrgb&w=1000",
  stirBeef: "https://images.pexels.com/photos/26555538/pexels-photo-26555538.jpeg?auto=compress&cs=tinysrgb&w=1000",
  stirNoodles: "https://images.pexels.com/photos/24243345/pexels-photo-24243345.jpeg?auto=compress&cs=tinysrgb&w=1000",
  stirWok: "https://images.pexels.com/photos/35873820/pexels-photo-35873820.jpeg?auto=compress&cs=tinysrgb&w=1000",
  chicken: "https://images.pexels.com/photos/36954951/pexels-photo-36954951.jpeg?auto=compress&cs=tinysrgb&w=1000",
  chicken2: "https://images.pexels.com/photos/28618413/pexels-photo-28618413.jpeg?auto=compress&cs=tinysrgb&w=1000",
  platter: "https://images.pexels.com/photos/27819677/pexels-photo-27819677.jpeg?auto=compress&cs=tinysrgb&w=1000",
  feast: "https://images.pexels.com/photos/5638616/pexels-photo-5638616.jpeg?auto=compress&cs=tinysrgb&w=1000",
  friends: "https://images.pexels.com/photos/6950752/pexels-photo-6950752.jpeg?auto=compress&cs=tinysrgb&w=1000",
  cocktail: "https://images.pexels.com/photos/36366519/pexels-photo-36366519.jpeg?auto=compress&cs=tinysrgb&w=1000",
  mocktail: "https://images.pexels.com/photos/28617303/pexels-photo-28617303.jpeg?auto=compress&cs=tinysrgb&w=1000",
  candle: "https://images.pexels.com/photos/8856554/pexels-photo-8856554.jpeg?auto=compress&cs=tinysrgb&w=1200",
  candleSetup: "https://images.pexels.com/photos/19986452/pexels-photo-19986452.jpeg?auto=compress&cs=tinysrgb&w=1200",
  breadMeal: "https://images.pexels.com/photos/17568751/pexels-photo-17568751.jpeg?auto=compress&cs=tinysrgb&w=1000",
  wine: "https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const business = {
  name: "XOXO",
  fullName: "XOXO by Tasty Bites KGL",
  tagline: "Kigali's table for bold flavour & warm indulgence",
  cuisine: "Contemporary Grill · Pan-Asian · Pasta",
  rating: 4.2,
  reviewsCount: 93,
  priceRange: "RF 5,000 – 10,000",
  pricePer: "per person",
  phone: "0794 304 774",
  phoneTel: "+250794304774",
  whatsapp: "https://wa.me/250794304774",
  website: "https://tastybiteskgl.com",
  websiteLabel: "tastybiteskgl.com",
  email: "hello@tastybiteskgl.com",
  address: "House 8, KK 343 St, Kigali",
  plusCode: "24F6+RH Kigali",
  mapEmbed: "https://www.google.com/maps?q=24F6%2BRH%20Kigali&z=15&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=24F6%2BRH%20Kigali",
  statusText: "Open · Closes 11 pm",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export const features = [
  { label: "Women-Owned", icon: "spark" },
  { label: "LGBTQ+ Friendly", icon: "heart" },
  { label: "Kerbside Pickup", icon: "bag" },
  { label: "No-Contact Delivery", icon: "scoot" },
];

export const stats = [
  { value: 4.2, suffix: "", label: "Google rating", decimals: 1 },
  { value: 93, suffix: "+", label: "Guest reviews", decimals: 0 },
  { value: 11, suffix: "pm", label: "Open nightly until", decimals: 0 },
  { value: 30, suffix: "+", label: "Signature dishes", decimals: 0 },
];

export const weeklyHours = [
  { day: "Monday", hours: "10:00 AM – 11:00 PM" },
  { day: "Tuesday", hours: "10:00 AM – 11:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 11:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 11:00 PM" },
  { day: "Friday", hours: "10:00 AM – 11:30 PM" },
  { day: "Saturday", hours: "9:00 AM – 11:30 PM" },
  { day: "Sunday", hours: "9:00 AM – 11:00 PM" },
];

// Busy-ness by hour (0-100), used for the "Popular times" chart
export const popularTimes: Record<string, number[]> = {
  Saturday: [8, 10, 14, 22, 30, 41, 52, 63, 78, 92, 86, 70, 48, 30, 18],
  weekdays: [6, 9, 15, 24, 36, 48, 60, 70, 64, 50, 33, 20, 12],
};
export const popularHours = ["9a", "11a", "1p", "3p", "5p", "7p", "9p"];
