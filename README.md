# Moda Center Renovation — Fact Site

A static, multi-page site. No build step — deploy as-is to GitHub Pages or Netlify.

## Structure
- `index.html` — Overview
- `city-ownership.html` — Why the city owns the Moda Center
- `albina.html` — The Arena's Neighbor: Albina Vision Trust
- `funding-figures.html` — How we arrived at the different funding figures
- `state-commitment.html` — The state of Oregon's funding commitment
- `state-timeline.html` — A timeline of the state's funding commitment
- `city-commitment.html` — The city's funding commitment
- `city-budget.html` — How this impacts the city's budget
- `pcef.html` — The Portland Clean Energy Fund
- `long-term-costs.html` — The long-term cost obligations from the city, depending on outcome
- `case-for-against.html` — Weighing both sides
- `styles.css` — Shared stylesheet used by every page
- `script.js` — Shared mobile-menu script used by every page (sidebar toggle only — no page-specific logic, safe to leave untouched)

## Images

All image files (PNGs) live at the **repo root**, alongside the HTML files — not in an `images/` subfolder. Every page's `<img src="...">` tag points directly to a root-level filename, e.g. `src="overview.png"`.

Current images in use:
- `overview.png` — used on both the Overview and Long-Term Costs pages
- `city1.png` — City Ownership
- `albina.png` — The Arena's Neighbor: Albina Vision Trust
- `funding1.png` — Funding Figures
- `state-commitment.png` — The State's Funding Commitment
- `timeline.png` — State Timeline
- `citycommitment1.png` — The City's Funding Commitment
- `budget.png` — City Budget
- `pcef1.png` — PCEF
- `long-term-total.png` — Long-Term Costs (second graphic)

Case For and Against (`case-for-against.html`) has two image slots side-by-side, still awaiting filenames — check that file's `<img>` tags for the exact `src` values expected.

### Adding or replacing an image
1. Add the PNG file directly to the repo root (same level as `index.html`).
2. Make sure the filename matches exactly (case-sensitive) what the relevant page's `<img src="...">` tag expects.
3. If a page still shows a dashed "ADD IMAGE" placeholder box instead of an image, that page's `<img>` tag either doesn't exist yet or the filename doesn't match — check the HTML directly.

## Recurring content components (in `styles.css`)
- `.tldr` — the "In short:" one-line summary block under each page's H1
- `.stat-callout` — two-panel pulled-out stat comparison (used on PCEF)
- `.fact-list` — dated, bold-label list format (used on PCEF's timeline section)
- `.footnote-ref` + `.footnotes` — superscript citation markers and the numbered "Sources" list at the bottom of pages that use them
- `.two-col` / `.image-pair` — side-by-side layouts (used on Weighing Both Sides and City Ownership)

## Site-wide style changes
Edit `styles.css` once — every page picks it up automatically.

## Deploying
Push this folder to a GitHub repo, connect it to Netlify (or GitHub Pages).
No build command needed — publish directory is the repo root.
