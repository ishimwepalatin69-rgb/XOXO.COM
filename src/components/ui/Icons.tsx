import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
export const Close = (p: IconProps) => (
  <svg {...base} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>
);
export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
export const MapPin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
export const Clock = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Star = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" viewBox="0 0 24 24" {...p}>
    <path d="M12 2.5l2.9 5.88 6.49.94-4.69 4.57 1.1 6.46L12 17.9l-5.8 3.05 1.1-6.46L2.6 9.9l6.5-.94L12 2.5Z" />
  </svg>
);
export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUp = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);
export const ChevronLeft = (p: IconProps) => (
  <svg {...base} {...p}><path d="M15 18l-6-6 6-6" /></svg>
);
export const ChevronRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M9 6l6 6-6 6" /></svg>
);
export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>
);
export const Plus = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Minus = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14" /></svg>
);
export const Check = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 6L9 17l-5-5" /></svg>
);
export const Calendar = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
export const Users = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
  </svg>
);
export const Sparkles = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8L12 3Z" />
    <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
  </svg>
);
export const Heart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
  </svg>
);
export const ShoppingBag = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
  </svg>
);
export const Scooter = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="5.5" cy="17.5" r="3" />
    <circle cx="18.5" cy="17.5" r="3" />
    <path d="M15 6h2l2 5M5.5 17.5 9 7h4l2 5h2M14 7l1.5 4" />
  </svg>
);
export const Utensils = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2M6 2v20M14 2v20M14 11h4a2 2 0 0 0 2-2V6a4 4 0 0 0-4-4h-2" />
  </svg>
);
export const Globe = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
);
export const Quote = (p: IconProps) => (
  <svg fill="currentColor" stroke="none" viewBox="0 0 24 24" {...p}>
    <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.2 0 .4 0 .6-.05C7.4 16.7 6 17.7 4.3 18l.7 2c3.3-.6 6-3.4 6-7.5V10.5C11 8 9 6 7.5 6Zm9 0C14 6 12 8 12 10.5S14 15 16.5 15c.2 0 .4 0 .6-.05-.7 1.75-2.1 2.75-3.8 3.05l.7 2c3.3-.6 6-3.4 6-7.5V10.5C20 8 18 6 16.5 6Z" />
  </svg>
);
export const Instagram = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </svg>
);
export const Facebook = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
  </svg>
);
export const Whatsapp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M.06 24l1.69-6.16a11.9 11.9 0 0 1-1.6-5.96C.15 5.32 5.5 0 12.06 0a11.8 11.8 0 0 1 8.4 3.49 11.8 11.8 0 0 1 3.48 8.4c0 6.56-5.35 11.9-11.9 11.9a11.9 11.9 0 0 1-5.7-1.45L.06 24Zm6.6-3.8c1.68.99 3.28 1.58 5.4 1.58 5.45 0 9.9-4.43 9.9-9.88a9.84 9.84 0 0 0-9.9-9.9C6.6 2 2.16 6.43 2.16 11.88c0 2.22.65 3.88 1.74 5.62l-1 3.66 3.76-1Zm11.1-5.73c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37s-1.04 1.02-1.04 2.49 1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41Z" />
  </svg>
);
export const Share = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
  </svg>
);
export const Sun = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
  </svg>
);
export const Trash = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6" />
  </svg>
);
export const Bag = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);
export const Moon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7Z" />
  </svg>
);
