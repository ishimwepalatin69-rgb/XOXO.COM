# 📸 Adding Your Own Real Photos

Drop your photo files in **this folder** (`src/assets/real/`).

## Then wire them up in `src/data/site.ts`

At the top of that file, import each photo and assign it to a slot in the `img` object:

```ts
// 1. import the file
import mySteak from "@/assets/real/my-steak.jpg";
import myInterior from "@/assets/real/my-interior.jpg";

// 2. use it on any slot
export const img = {
  heroSteak: mySteak,        // ← local image
  interior1: myInterior,     // ← local image
  carbonara: "https://...",  // ← external URL still works too
  ...
};
```

## Which slot is which?

Look at how each key is used around the codebase, e.g.:

| Slot key             | Where it shows up                         |
| -------------------- | ----------------------------------------- |
| `heroSteak`          | Big background of the very first section  |
| `steakMicro/sauce`   | Signature dish + gallery                  |
| `interior1/2/3`      | "Our Story" + gallery                     |
| `bar`, `candle`      | Gallery                                   |
| `carbonara`, `meatballs`, `fries`, `chicken`, `cocktail`… | Menu items (see `src/data/menu.ts`) |
| `dessertFlower/tower`| Menu desserts + gallery                   |

> Tip: every menu item's `image` field in `src/data/menu.ts` pulls from these
> `img.*` keys, so changing one image updates it everywhere.

## Supported file types
`.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`

## ⚠️ Keep images small
This site builds into a **single self-contained `index.html`**. Local images are
embedded (base64) directly inside it, so big photos make the file large and slow.

Recommended before dropping them in:
- **Resize** to roughly the size they'll be shown (e.g. 1200px wide is plenty for most spots, 1600–1920px for the hero).
- **Compress** with a tool like [squoosh.app](https://squoosh.app) or TinyPNG.
- Prefer **.jpg** for photos (smaller) and **.webp** if you can.

## Alternative: external URLs (no files to add)
You can also just paste a hosted link (Imgur, Cloudinary, Google Drive direct
link, your own server) straight onto any slot:

```ts
heroSteak: "https://your-host.com/photo.jpg",
```
