# Moda Center Renovation — Fact Site

A static, multi-page site. No build step — deploy as-is to GitHub Pages or Netlify.

## Structure

- `index.html` — **Landing page.** A choice screen only: "The Detailed Version" (~20–25 min) vs. "The Short Version" (~2 min). No sidebar, no content of its own. Both options, plus a "skip the choice" link, lead into the site proper.
- `overview.html` — The actual Overview / front page of the full site (this used to be `index.html` before the landing page was added).
- `short-version.html` — Fast-scan page: every graphic from the site, in order, with a one-line caption each, linking back to the corresponding full page.
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
- `script.js` — Shared mobile-menu script (sidebar toggle). Used on every page **except** `index.html`, which has no sidebar.

## Site navigation model

`index.html` is the only entry point without a sidebar. Every other page shares the same sidebar, which now includes two items above the numbered list: **Overview** (`overview.html`) and **The Short Version** (`short-version.html`), followed by the 10 numbered content pages.

The site logo (top of sidebar, and the mobile topbar) links back to `index.html` — the landing/choice screen, not `overview.html`. If you'd rather the logo return to Overview directly instead of the choice screen, that's a one-line change per file (or a single global find/replace).

## Images

All image files (PNGs) live at the **repo root**, alongside the HTML files — not in an `images/` subfolder. Every page's `<img src="...">` tag points directly to a root-level filename, e.g. `src="overview.png"`.

Current images in use:
- `overview.png` — used on Overview, Long-Term Costs, and The Short Version
- `city1.png` — City Ownership
- `albina.png` — The Arena's Neighbor: Albina Vision Trust
- `funding1.png` — Funding Figures
- `state-commitment.png` — The State's Funding Commitment
- `timeline.png` — State Timeline
- `citycommitment1.png` — The City's Funding Commitment
- `budget.png` — City Budget
- `pcef1.png` — PCEF
- `long-term-total.png` — Long-Term Costs (second graphic)
- `case-critics.png` / `case-supporters.png` — Weighing Both Sides (side-by-side pair)

`short-version.html` reuses several of the images above rather than needing its own separate set — check that file's `<img>` tags directly if you want to confirm which filename goes where.

### Adding or replacing an image
1. Add the PNG file directly to the repo root (same level as `index.html`).
2. Make sure the filename matches exactly (case-sensitive) what the relevant page's `<img src="...">` tag expects.
3. If a page shows a dashed "ADD IMAGE" placeholder box instead of an image, that page's `<img>` tag either doesn't exist yet or the filename doesn't match — check the HTML directly.

## Optional: site-wide background image

`styles.css` supports a faint, fixed background image applied to every sidebar page (not the landing page, which has its own plain white background). To enable it, add a file named **`site-background.png`** to the repo root. If that file doesn't exist, every page just shows a plain light gray-blue fallback color — nothing breaks. The image is automatically tinted/faded via a CSS overlay, so there's no need to pre-fade the photo yourself; if it needs to be lighter or darker once it's live, that's a quick edit to the `linear-gradient()` values at the top of `styles.css`, not something that requires re-exporting the image.

## Recurring content components (in `styles.css`)
- `.tldr` — the "In short:" one-line summary block under each page's H1
- `.readtime` — the reading-time pill badge (used on Overview and The Short Version)
- `.stat-callout` — two-panel pulled-out stat comparison (used on PCEF)
- `.fact-list` — dated, bold-label list format (used on PCEF's timeline section)
- `.scan-block` — the repeating image + caption + link unit used on The Short Version
- `.choice-card` / `.landing-*` — the two-option layout used only on `index.html`
- `.footnote-ref` + `.footnotes` — superscript citation markers and the numbered "Sources" list at the bottom of pages that use them
- `.two-col` / `.image-pair` — side-by-side layouts (used on Weighing Both Sides and City Ownership)

## Site-wide style changes
Edit `styles.css` once — every page picks it up automatically.

## Deploying
Push this folder to a GitHub repo, connect it to Netlify (or GitHub Pages).
No build command needed — publish directory is the repo root.
