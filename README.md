# SENTHUMOL • College Attendance Tracker — Static Site

Blue/white, image‑free marketing site for **GitHub Pages** with a separate **Privacy Policy** page.

## Files
- `index.html` — Landing page
- `privacy.html` — Privacy policy
- `styles.css` — Shared styles
- `script.js` — Demo table + CSV export + year

## Deploy to GitHub Pages
1. Create a **public** repository on GitHub, for example `senthumol-attendance-site`.
2. Add these files to the repo root (no build step required).
3. Commit and push.
4. In **Settings → Pages**, set **Source** to `Deploy from a branch`, choose the `main` branch and `/ (root)` folder.
5. Save — your site will be live at: `https://<your-username>.github.io/<repo-name>/`

> If you later move files into a subfolder (e.g. `/docs`), update Pages settings to point there.

## Customize
- Edit company and contact info in `index.html` and `privacy.html`.
- Colors are CSS variables in `styles.css` (see `:root`). Keep blue/white style by default.
- No images are used by design to keep the site lightweight.

## Local preview
Just open `index.html` in a browser. No build tools needed.
