# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A one-page marketing landing page template built with Next.js 15, TypeScript, Tailwind CSS 3, and Inter + JetBrains Mono fonts. The design language matches the Altenture site: dark background, brand-coloured accents, mono section labels, Inter headings at tight tracking, reveal-on-scroll animations.

All `[PLACEHOLDER]` strings in `app/page.tsx` must be replaced with real content before the site goes live. All `/* REPLACE */` comments mark config that needs updating.

---

## Commands

```bash
# Install dependencies
npm install

# Start dev server (port 3000)
npm run dev

# Production build
npm run build

# Type-check without building
npx tsc --noEmit

# Lint
npm run lint
```

---

## Architecture

```
app/
  layout.tsx      — HTML shell, font loading, metadata. Update title + description here.
  globals.css     — All CSS. Brand tokens at the top. Section styles below. No Tailwind utility classes in CSS.
  page.tsx        — Single client component. All sections rendered here. No sub-components.
components/ui/    — Reserved for future UI components (buttons, etc.) if needed.
lib/utils.ts      — cn() helper for merging Tailwind class names.
public/
  brand_assets/   — Logo files, favicon, photos. See Brand Assets section below.
```

---

## Brand assets setup

Before starting, place these files in `/public/brand_assets/`:

| File | Used in |
|------|---------|
| `logo-white.png` | Nav and footer (light logo on dark background) |
| `favicon.svg` | Browser tab icon |
| `favicon.ico` | Fallback favicon |
| `ok_transparent.png` | About section photo (already present — replace if different person) |

Logo display size: nav `height: 22px`, footer `height: 18px`. Width is `auto`. Provide a logo that is at least 2× those heights for retina screens.

---

## Customising the brand colour

The entire colour system derives from one variable. Change it in two places:

1. **`app/globals.css`** — update `--brand`, `--brand-hover`, `--brand-glow`, `--brand-border` at the top of `:root`.
2. **`app/globals.css`** — update `--primary` in the `@layer base :root` block (HSL format).
3. **`tailwind.config.ts`** — no change needed; it reads the CSS variables.

The geometric background mark in the hero SVG hardcodes `#ED1C24`. Update both `fill` values there to match the new brand colour.

---

## Filling in placeholder content

Work through `app/page.tsx` top to bottom. Every placeholder is marked `[IN BRACKETS]`. Replace each one:

| Placeholder | What to put |
|-------------|-------------|
| `[SITE NAME]` | Name of the program or brand |
| `[PROGRAM CATEGORY]` | Eyebrow label above the hero headline (e.g. "1-Week Intensive") |
| `[Headline]` / `[line two.]` | Hero headline — 3 to 4 lines, accent colour on the most important phrase |
| `[APPLICATION-FORM-URL]` | The `apply()` function URL — Typeform, Tally, Google Form, or booking link |
| `[YOUR-EMAIL]` | Contact email — appears in FAQ intro, Apply section, and footer |
| `[YOUR NAME]` | Name in About section heading |
| `[HANDLE]` | LinkedIn profile path (after `/in/`) |
| Structure steps | Replace the 5 placeholder steps with actual program days/phases |
| Who-for lists | Replace "for" and "not for" bullets with honest, specific criteria |
| Cost price | Replace `[€/$]` and `[0,000]` with actual price |
| Cost includes | Replace included-item placeholders with real inclusions |
| Policy rules | Replace with actual attendance and participation rules |
| About bio | Replace with real first-person bio — 3 paragraphs |
| FAQ pairs | Replace all 7 Q&A pairs. Use **double-quoted strings** to avoid apostrophe syntax errors |
| Apply CTA | Replace heading and sub-heading copy |
| Footer year / entity | `new Date().getFullYear()` is already dynamic; replace `[YOUR NAME / ENTITY]` |

---

## Design rules — follow these exactly

### Typography
- Headings: Inter, weight 800, tight tracking (−0.03em to −0.04em). Never loosen tracking on large text.
- Body: Inter, weight 400–500, line-height 1.65–1.78. Keep paragraphs to 3 sentences max.
- Labels / eyebrows: JetBrains Mono, 11–12px, uppercase, 0.12–0.16em letter-spacing, brand colour.
- Numbers / stats: Inter 800 at display size (28px+), same tight tracking.

### Colour
- One brand accent colour. Every other surface is near-black or translucent white.
- Text hierarchy: `var(--text)` → `var(--muted-raw)` → `var(--dimmer)`. Never invent a fourth level.
- Brand colour appears on: labels, stat borders, hover indicators, `::after` pseudo-elements, primary buttons, focus rings.

### Spacing
- Section padding: `var(--section-py)` vertical, `var(--section-px)` horizontal. Never override with raw px values.
- Within sections: follow the established gap/padding values. Do not introduce new spacing tokens.

### Buttons
- Primary: solid brand-colour background, white text. Used for the main conversion action only.
- Ghost: transparent with `border: 1px solid var(--border-raw)`. Used for secondary actions.
- Every button needs `:hover`, `:active` (scale 0.97), and `:focus-visible` (2px brand-colour outline) states. These are already in the CSS.

### Animations
- Only animate `opacity` and `transform`. Never `transition-all`.
- Hero elements: `.hero-anim` with `.ha-N` delay classes. Do not touch these.
- Scroll reveals: add `reveal` class. Add `rd-1` through `rd-4` for staggered siblings within a section.
- Never add new `@keyframes` unless absolutely necessary.

### Adding a new section
1. Write the HTML in `page.tsx` between the appropriate existing sections.
2. Give it an `aria-labelledby` pointing to its `<h2 id>`.
3. Add CSS in `globals.css` — follow the naming pattern: `.section-name`, `.section-name__element`.
4. Add responsive rules at the bottom of `globals.css` inside the existing `@media` blocks.
5. If it is a nav-linked section, add the id and nav item — update the nav links array in `page.tsx`.

### Copy voice
- Direct. No hedging ("may", "could", "often"). No jargon.
- Sentence length varies — mix short punches with longer ones.
- No em dashes. Use commas, full stops, or colons instead.
- Paragraphs: 3 sentences max.
- No opening pep or closing wrap-ups.
- Apostrophes in JSX string literals: use **double-quoted strings** (e.g. `"It's fine"`) to avoid syntax errors.

---

## Screenshot workflow

Puppeteer is installed at `~/Puppeteer/node_modules/puppeteer`. Write screenshot scripts to `/tmp/` and run from there. Always screenshot from `http://localhost:3000`. After screenshotting, read the PNG with the Read tool to verify visually.

Force-reveal all `.reveal` elements before screenshotting:
```js
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
});
await new Promise(r => setTimeout(r, 800));
```

---

## Definition of done

A section is done when:
1. All `[PLACEHOLDER]` text is replaced with real content.
2. The page renders without TypeScript errors (`npx tsc --noEmit` passes clean).
3. A screenshot has been taken and visually reviewed — no broken layout, no placeholder text visible.
4. Every button and nav link is tested (clicks navigate or open the correct URL).
5. Responsive layout checked at 768px and 480px viewport widths.

---

## What not to do
- Do not add sections not listed in the brief.
- Do not change the dark theme to light.
- Do not introduce new fonts — Inter and JetBrains Mono only.
- Do not use `transition-all`.
- Do not add inline styles except for one-off values that cannot be expressed in the existing CSS classes.
- Do not install additional npm packages without a clear reason.
- Do not commit build artefacts (`.next/`, `tsconfig.tsbuildinfo`).
