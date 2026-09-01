# Moda Center Renovation — Fact Site

A static, multi-page site. No build step — deploy as-is to GitHub Pages or Netlify.

## Structure
- `index.html` — Overview
- `funding-figures.html` — How the funding figures were derived
- `city-ownership.html` — Why the city owns the Moda Center
- `state-commitment.html` — The state's funding commitment
- `state-timeline.html` — Timeline of the state's commitment
- `city-commitment.html` — The city's proposed funding commitment
- `city-budget.html` — How this impacts the city's budget
- `pcef.html` — The Portland Clean Energy Fund
- `long-term-costs.html` — Long-term cost obligations, by outcome
- `spillover.html` — Potential spillover effects, by outcome
- `styles.css` — Shared stylesheet used by every page
- `script.js` — Shared mobile-menu script used by every page
- `images/` — Put your uploaded photos/maps here

## Two kinds of visuals on this site
- `.graphic-card` blocks are real, hand-built inline SVG infographics — no image files needed, they render on their own. Edit the SVG markup directly inside the relevant `.html` file to tweak numbers or labels.
- `.image-slot` blocks (dashed border) are still placeholders for real photos/maps you'll add — city-ownership.html, state-timeline.html, and spillover.html use these.

## Adding a photo to an .image-slot
1. Add the image file to `images/`.
2. Replace the `<div class="img-inner">...</div>` block with:
   ```html
   <img src="images/your-file.jpg" alt="Describe the image">
   ```

## Site-wide style changes
Edit `styles.css` once — every page picks it up automatically.

## Deploying
Push this folder to a GitHub repo, connect it to Netlify (or GitHub Pages).
No build command needed — publish directory is the repo root.
