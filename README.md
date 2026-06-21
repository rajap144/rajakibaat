# Hexagon Portfolio

A four-page personal site with an animated **3D hexagon field** background
(Three.js), 3D tilting cards, and scroll reveals. Inspired by
[diogotc.com](https://diogotc.com/) — the connected dots are reimagined as floating,
spinning, linking hexagons.

**Pages:** Home, **Blog**, **Impossible List**, **CV** — all sharing one theme and nav.

**Everything is configurable, no build step, no framework, no npm.** Edit a file,
refresh the browser. Shared look (theme, nav, socials, the 3D background) lives in
[`assets/js/site.js`](assets/js/site.js); each page's content has its own config file.

---

## Quick start

```bash
# clone, then serve the folder with any static server, e.g.:
python -m http.server 8000
# open http://localhost:8000
```

> It must be served over `http://` (not opened as a `file://` path) because it
> uses JavaScript modules.

---

## Make it yours

### Shared across all pages — [`assets/js/site.js`](assets/js/site.js)

| Export     | What it controls                                              |
| ---------- | ------------------------------------------------------------ |
| `THEME`    | All colors (also recolors the 3D hexagons)                   |
| `HEXFIELD` | The 3D background — count, size, speed, links, parallax, etc. |
| `BRAND`    | Name + monogram shown in the nav logo                        |
| `NAV`      | The top navigation links                                     |
| `SOCIALS`  | Your social / contact links (icon + label + url)            |
| `FOOTER`   | Footer note + source-code link                              |

### Per-page content

| Page            | HTML                  | Content config                          |
| --------------- | --------------------- | --------------------------------------- |
| Home            | `index.html`          | `assets/js/config.js`                   |
| Blog            | `blog.html`           | `assets/js/blog.config.js`              |
| Impossible List | `impossiblelist.html` | `assets/js/impossiblelist.config.js`    |
| CV              | `cv.html`             | `assets/js/cv.config.js`                |

Text fields in the page configs accept tiny inline markdown:
`[label](url)`, `**bold**`, `*italic*`, `~~strike~~`.

To add or remove a page, edit `NAV` in `site.js` (and add/remove its `.html` +
`*.config.js`).

### Images
Replace the placeholders in `assets/img/` with your own:
- `avatar.svg` → your photo (any square image: `avatar.jpg`, `.png`, `.webp` …)
- `project-1.svg` … → project thumbnails (16:9 looks best)
- `favicon.svg` → site icon

Then point `config.js` at the new filenames. Leave a project's `image: ""` to
fall back to a generated hexagon thumbnail.

### Icons
`socials[].icon` references a key in [`assets/js/icons.js`](assets/js/icons.js).
Built in: `github, mastodon, discord, matrix, strava, steam, instagram, email,
key, linkedin, x, youtube, link, globe`.

Need another? Add it to `icons.js` as `name: { vb: "0 0 24 24", d: "M…" }`
(grab the path from [simpleicons.org](https://simpleicons.org)), or pass a
custom one inline in `config.js`:

```js
{ svg: { vb: "0 0 24 24", d: "M..." }, label: "My link", href: "https://..." }
```

### Tune the 3D background
In `config.theme` change `accent` / `accent2` to recolor the hexagons.
In `config.hexField`:
- `count` — more hexagons (lower it on weak GPUs)
- `wireframe: true` — outlined instead of solid hexagons
- `linkDistance` / `linkOpacity` — the connecting lines
- `parallax` — how strongly the field follows the cursor (`0` disables it)
- `enabled: false` — turn the background off entirely

The animation automatically slows to a stop for visitors who have
**reduced motion** enabled, and pauses when the tab is hidden.

---

## Deploy to GitHub Pages

1. Push this repo to GitHub (already done if you cloned it from there).
2. Go to **Settings → Pages → Build and deployment**.
3. **Source: Deploy from a branch**, **Branch: `main` / `(root)`**, then **Save**.
4. Wait ~1 minute. Your site is live at `https://<user>.github.io/<repo>/`.

GitHub Pages automatically rebuilds on every push to `main`, so there is no
build step or workflow to maintain. The `.nojekyll` file makes Pages serve the
`assets/` folder as-is, and all asset paths are relative so it works under the
`/<repo>/` sub-path.

### Custom domain
Add a `CNAME` file containing your domain (e.g. `example.com`) and configure DNS,
or set it under **Settings → Pages → Custom domain**.

---

## Project structure

```
index.html  blog.html  impossiblelist.html  cv.html   # one shell per page
assets/
  css/style.css            # design system (reads colors from theme via CSS vars)
  js/
    site.js                # ← SHARED: theme, hex field, nav, socials, footer
    common.js              # shared renderers: nav, footer, theme, reveals, tilt
    icons.js               # SVG icon library
    hexfield.js            # the 3D hexagon background (Three.js)
    config.js              # home content        + main.js   (home script)
    blog.config.js         # blog content        + blog.js
    impossiblelist.config.js  # impossible list  + impossiblelist.js
    cv.config.js           # CV content          + cv.js
  img/                     # avatar, favicon, project thumbnails
.nojekyll
```

## Credits
- 3D: [Three.js](https://threejs.org) (MIT)
- Brand icons: [Simple Icons](https://simpleicons.org) (CC0); UI icons: Material (Apache-2.0)
- Fonts: Syne, Manrope, Space Mono via Google Fonts
- Design inspiration: [diogotc.com](https://diogotc.com)
