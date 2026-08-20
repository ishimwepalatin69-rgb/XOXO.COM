# XOXO by Tasty Bites KGL — Kigali Restaurant

![Deploy](https://github.com/ishimwepalatin69-rgb/XOXO.COM/actions/workflows/static.yml/badge.svg)
[![Live on GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-%2329a367?style=flat&logo=github)](https://ishimwepalatin69-rgb.github.io/XOXO.COM/)

**Women-owned · Contemporary Grill · Pan-Asian · Pasta**  
House 8, KK 343 St, Kigali — Open daily 10am–11pm · 0794 304 774

> Kigali's table for bold flavour & warm indulgence — smoky grills, wok-fire stir-fry and silky pasta made to share, priced to return.

**Live site:** **https://ishimwepalatin69-rgb.github.io/XOXO.COM/**  
**Repo:** https://github.com/ishimwepalatin69-rgb/XOXO.COM

---

## ✨ For Client Presentation

Open this on a big screen — it’s a single-file, no-loading experience:

**https://ishimwepalatin69-rgb.github.io/XOXO.COM/**

It works on phone, tablet and desktop, with:
- **Hero** with your real photos (hosted on catbox, swappable in `src/data/site.ts`)
- **Our Story** + signature dishes, **full menu** with cart & MTN MoMo / Airtel / Card / Cash checkout
- **Gallery** (lightbox), **Reviews** (4.2★ · 93 reviews), **Reservations** with live popular-times chart, and **Visit** with embedded Google Maps
- **Light / Dark** auto-theme, **Inter + Playfair Display** typography, gold-on-espresso brand palette
- **WhatsApp + Call + Directions** everywhere (floating actions + footer)

**Talking points (30-second pitch):**
> “XOXO isn’t just a restaurant site — it’s a reservation engine. Guests browse the menu, add to cart, choose Delivery vs Pickup, pay with MoMo/Airtel/Card/Cash, and send the order directly to WhatsApp. The Popular-Times chart sets expectations for busy Fridays, and the map gets them to KK 343 in one tap. Everything loads as one 370KB file — fast even on 3G in Kigali.”

---

## 🚀 Deployment

This repo is **live via GitHub Pages (legacy)** — `main` branch, root path. Every push to `main` auto-deploys in ~45 seconds via:
- `pages build and deployment` (GitHub’s Pages service)
- `Deploy static content to Pages` (Actions workflow — currently uploads the built `index.html` at root)

Production build is **single-file** (`vite-plugin-singlefile`) — all JS + CSS inlined into `dist/index.html` → copied to `index.html` at root for Pages. No 404s, no asset paths.

### Run locally

```bash
npm ci
npm run dev     # http://localhost:5173
npm run build   # produces dist/index.html (365KB inlined)
npm run preview # preview production build
```

### Update content

All business data lives in `src/data/`:
- `site.ts` — hero/interior images, address, phone, hours, popular times
- `menu.ts` — dishes, prices, categories
- `reviews.ts` — testimonials

To swap photos:
1. Drop image into `src/assets/real/` (e.g. `my-dish.jpg`)
2. In `site.ts`: `import myDish from "@/assets/real/my-dish.jpg"` then `heroSteak: myDish`
3. Or just paste an external URL (`https://...`) — both work.

---

## 🔧 Next Step: Proper CI/CD (one-time, 2 minutes)

The site is live now, but for clean development the repo should **keep `index.html` as a source template** and let Actions build `dist/` on every push. That requires updating `.github/workflows/static.yml` to the fixed version — which needs the **“Workflows” permission**.

**What to do:**
1. In **Arena** → reconnect GitHub for `ishimwepalatin69-rgb/XOXO.COM` and grant **Workflows (read & write)**.
2. Tell me “workflows granted” — I will push the fixed workflow below and revert `index.html` to source. No downtime.

**Fixed workflow (ready in `/tmp/workflow.patch`):**
```yaml
# Deploy Vite + React site to GitHub Pages
name: Deploy static content to Pages
on:
  push: { branches: ["main"] }
  workflow_dispatch:
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: "pages", cancel-in-progress: false }
jobs:
  deploy:
    environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./dist }
      - uses: actions/deploy-pages@v5
        id: deployment
```

After that, `npm run build` is no longer committed — Pages builds it for you.

---

## 📁 Structure

```
src/
  components/   # Navbar, Hero, Menu, Cart, Gallery, Reservation, Visit...
  data/         # site.ts, menu.ts, reviews.ts (edit here)
  hooks/        # useCart, useTheme, useCountUp
  assets/real/  # your real photos (xoxo-interior.jpg included)
```

## 📞 Contact

- **XOXO by Tasty Bites KGL** — House 8, KK 343 St, Kigali · `0794 304 774` · [wa.me/250794304774](https://wa.me/250794304774)
- **Dev repo:** `ishimwepalatin69-rgb/XOXO.COM` · Branch `main` is production.

---

*Crafted with ♥ in Kigali — ready to present.*
