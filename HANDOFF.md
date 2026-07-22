# Freya & Company — Website Handoff

A fast, static marketing site built with **Astro** + **Decap CMS**, deployed on **Netlify**.
Zero recurring cost on the free tiers. The client can edit content herself at `/admin`,
or you can update it for her.

- **Live site:** _add URL once deployed_
- **Content editor (CMS):** `https://YOURDOMAIN/admin/`
- **Repo:** _add GitHub URL once created_

---

## 1. What's in the box

| Page | Path | Notes |
|------|------|-------|
| Home | `/` | Hero, intro, services, featured portfolio, CTA |
| Services | `/services/` | All 5 services (from CMS) |
| Portfolio | `/portfolio/` | Past events gallery (from CMS) |
| About | `/about/` | Editable story (from CMS) |
| Request a Quote | `/quote/` | Form → Netlify Forms → email notification |
| Thank You | `/thank-you/` | Shown after a quote is submitted |

**Brand:** palette per the brand guide, with **Cormorant Garamond** (standard serif),
**Cinzel Decorative** (the "Defined by Detail" tagline & marquee), **Italianno** (flowing
script accents), and **Montserrat** (UI/nav/labels). Colors + fonts live in
`src/styles/global.css` (`:root` variables).

**Editable content (no code — all via `/admin`):**
- `src/data/site.json` — business name, tagline, phone, email, Instagram, etc.
- `src/data/home.json` — homepage hero image + all homepage copy
- `src/data/theme.json` — **Fonts & Theme** (client picks fonts from a curated list)
- `src/content/services/*.md` — the five services
- `src/content/portfolio/*.md` — past events (cover + gallery photos)
- `src/content/pages/about.md` — About page text + photo

**Font picker:** the CMS "Fonts & Theme" panel lets the client swap the heading, body,
script-accent, and hero-tagline fonts from a curated list. To add more choices, add the
font to `src/data/fonts.js` (with its Google Fonts params) **and** to the matching
`options:` list in `public/admin/config.yml`.

> ⚠️ **Placeholder images** in `public/images/` are branded SVGs. Replace them with real
> event photos (via the CMS, or drop files into `public/images/` and update the paths).

---

## 2. Run it locally (developer)

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # outputs static site to dist/
pnpm preview    # preview the production build
```

Node 20+ required.

---

## 3. Go-live runbook — freyacompany.xyz (client-owned accounts)

Domain: **freyacompany.xyz** (already set in the code — `astro.config.mjs`, `robots.txt`,
`site.json`, `admin/config.yml`). Plan: **client's own GitHub + Netlify**, domain
**registered through Netlify** (DNS + hosting in one place).

Do each step logged in as **Freya's** email + payment so nothing is tied to the developer.

### A. GitHub (source code) — client's account
1. Client creates a GitHub account (github.com) with her email.
2. Create a new **empty** repo, e.g. `freya-and-company-website` (private is fine).
3. Give the developer push access: repo **Settings → Collaborators → add** the developer's
   GitHub username. (The developer then pushes the finished project to this repo.)

### B. Netlify (hosting) — client's account, free
1. Client signs up at netlify.com with her email (can "Sign up with GitHub").
2. **Add new site → Import an existing project → GitHub →** pick the repo.
3. Build settings auto-detect from `netlify.toml` (build `npm run build`, publish `dist`).
4. Deploy → verify the site loads on the temporary `*.netlify.app` URL.

### C. Domain — register through Netlify
1. Netlify → **Domains → Register a new domain →** search `freyacompany.xyz` → purchase
   (client's card). ~$12-15/yr.
2. Netlify → your site → **Domain management → Add a domain →** `freyacompany.xyz`.
   Because it's registered at Netlify, DNS is configured automatically.
3. Netlify auto-provisions a free SSL certificate (a few minutes). Also add the `www`
   redirect if desired.

### D. Set the real domain in code — ✅ DONE
Already set to `https://freyacompany.xyz` in `astro.config.mjs`, `public/robots.txt`,
`src/data/site.json`, and `public/admin/config.yml`.

### E. Turn on the CMS (so Freya can self-edit)
1. Netlify → **Site configuration → Identity → Enable Identity.**
2. Identity → **Registration = Invite only** (so randoms can't sign up).
3. Identity → **Services → Enable Git Gateway.**
4. Identity → **Invite users →** enter Freya's email. She clicks the email link, sets a
   password, and lands in the editor at `/admin/`.
5. Test: log in at `https://YOURDOMAIN/admin/`, edit a service, Publish, confirm the site
   rebuilds (~1 min) and updates.

### F. Contact-form notifications (quote requests)
The `/quote/` form already posts to **Netlify Forms** (nothing to code).
1. Submit a test quote on the live site.
2. Netlify → **Forms →** you'll see the `quote` submission (including the uploaded photo).
3. **Forms → Settings → Form notifications → Add notification → Email** →
   send to Freya's inbox (and yours, if you want a copy).
4. Optional: add the client's email in `src/data/site.json` (`email`) so it also shows in
   the site footer / contact line.

### G. Business email (optional but recommended)
Set up `hello@freyaandco.com` via Google Workspace or the registrar's email, so replies
to leads look professional.

### H. Analytics (optional)
- **Cloudflare Web Analytics** or **Plausible** (privacy-friendly), or Google Analytics.
- Add the snippet to `src/layouts/Base.astro` before `</head>`.
- Submit the site to **Google Search Console** and add the sitemap:
  `https://YOURDOMAIN/sitemap-index.xml`.

---

## 4. Pre-launch checklist

- [ ] Real domain set in `astro.config.mjs` and `public/robots.txt`
- [ ] Real event photos replacing the placeholder SVGs
- [ ] Business phone / email filled in `site.json` (or intentionally left blank)
- [ ] Instagram handle correct (`freyaandco.tx`)
- [ ] Test quote submitted → notification email received
- [ ] CMS login works for Freya
- [ ] Favicon / social share image look right
- [ ] Spellcheck all copy

---

## 5. Accounts to hand over (fill in + give to client)

| Service | Login / URL | Owner | Notes |
|---------|-------------|-------|-------|
| Domain registrar | | Freya | Renews annually — don't let it lapse |
| Netlify (hosting) | | Freya | Free tier |
| GitHub (code) | | Freya | |
| CMS editor | `/admin/` | Freya | Netlify Identity login |
| Email | | Freya | |
| Analytics | | Freya | |

> Keep this table updated and deliver it (plus a 5-min Loom showing the `/admin` editor)
> as the final handoff.

---

## 6. Logo & brand assets

Vector + raster logo set lives in `public/images/logo/`:

| File | Use |
|------|-----|
| `freya-primary.svg` | Horizontal wordmark (dark) — website, invoices, print |
| `freya-primary-on-dark.svg` | Wordmark for dark backgrounds |
| `freya-stacked.svg` | Centered lockup — flyers, signage |
| `freya-monogram.svg` / `-ivory` / `-on-dark` | "F" ring monogram — stamps, favicon, watermark |
| `png/avatar-ivory-1000.png` | **Instagram / social profile picture** (square) |
| `png/avatar-dark-1000.png` | Social avatar, dark variant |
| `png/freya-primary-2000.png` | High-res wordmark (transparent) for graphics |
| `png/freya-stacked-1400.png` | High-res stacked lockup |

The site header uses the monogram + wordmark rendered live in Cormorant Garamond.
The favicon (`public/favicon.svg`) matches the monogram.

> The SVGs reference Cormorant Garamond / Italianno / Cinzel Decorative with system
> fallbacks (Georgia, Snell Roundhand). On the website they render in the real fonts
> (loaded via Google Fonts). The PNG exports were rendered with macOS fallback fonts —
> for pixel-perfect exports with the exact webfonts baked in, open an SVG in
> Figma/Illustrator with those fonts installed and export.

---

## 7. How Freya edits the site (client guide)

1. Go to `https://YOURDOMAIN/admin/` and log in.
2. **Portfolio** → *New Event* → add title, category, cover photo, gallery, then **Publish**.
3. **Services** → edit any service's text.
4. **Business Info & Settings** → update phone, email, Instagram, tagline.
5. **Pages → About** → edit her story.
6. Every **Publish** rebuilds the live site automatically in about a minute.
