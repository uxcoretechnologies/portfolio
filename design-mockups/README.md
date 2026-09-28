# Concept product mockups — source

Hand-coded HTML/CSS screens for the three concept case studies (RetailOS,
FlowMind AI, PayLedger) that don't have real software behind them. Each
product has its own fonts, palette, and components — kept deliberately
distinct so the three don't read as reskins of one template.

Rendered PNGs from these files live in `public/images/work/<slug>/` and are
wired up in `src/lib/data/projects.ts`. These source files are kept around
so any screen can be tweaked and re-rendered — for a different crop, a copy
update, or a new size — without rebuilding it from scratch.

## Canvas sizes (per product, not per screen)

- **retailos/** and **flowmind/** — 1600&times;1000, landscape. Both are
  desktop web-app screens (POS/dashboard, ticket console), so they're
  composed wide like a real browser window.
- **payledger/** — 1080&times;2160, portrait phone. PayLedger's case study
  copy is explicitly mobile-first, so these are laid out as real phone
  screens (status bar, bottom tab bar) rather than a desktop view squeezed
  into a phone frame.

None of these match the `/work` gallery's `5:8` card out of the box — see
"About that 5:8 crop" below before generating final crops for the site.

## Regenerating a screenshot

1. Start the static file server (serves this whole folder):
   ```bash
   node design-mockups/server.js
   ```
   (or `preview_start` with the `mockups` entry in `.claude/launch.json`,
   which does the same thing and opens it in the Browser pane)
2. Screenshot a page with headless Chrome, matching that product's canvas
   size exactly:
   ```bash
   "/c/Program Files/Google/Chrome/Application/chrome.exe" \
     --headless=new --disable-gpu --hide-scrollbars \
     --force-device-scale-factor=1 --run-all-compositor-stages-before-draw \
     --virtual-time-budget=4000 \
     --window-size=1600,1000 \
     --screenshot="ABSOLUTE/OUTPUT/PATH.png" \
     "http://localhost:4610/retailos/02-inventory-dashboard.html"
   ```
   `--virtual-time-budget` matters — without it, Chrome can snapshot before
   the Google Font finishes loading and silently fall back to a serif
   default (bit us once on the PayLedger donut chart).
3. Chrome needs a full absolute output path (native slashes are fine from
   Git Bash) — a relative path fails silently with "cannot find the path
   specified."

## About that 5:8 crop

`project-gallery.tsx` renders every gallery image in a tall `5:8` card,
cropped with `object-cover object-top` (see `placeholder-media.tsx`). These
source screens are wide/tall in their own right, not `5:8` — so if a new
screenshot is going straight into the gallery as-is, either:

- compose the *content* so the top `5:8` slice is the important part (the
  current screens front-load their key numbers/content near the top for
  exactly this reason), or
- pre-crop/pad to `5:8` before it reaches `public/`, rather than relying on
  the browser to crop a wide screenshot correctly.

Revisiting the gallery component itself (a different `object-fit`, or a
per-slot aspect ratio) is a separate, still-open follow-up.
