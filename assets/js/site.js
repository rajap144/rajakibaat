/* =============================================================================
 *  SITE-WIDE CONFIG  —  shared by every page (home, blog, impossible list, CV).
 *  Edit theme colors, the top navigation, your social links and the footer here
 *  once, and all pages update together.
 *  Page-specific content lives in the per-page config files:
 *    config.js (home), blog.config.js, impossiblelist.config.js, cv.config.js
 * ============================================================================= */

/* ---- THEME --------------------------------------------------------------
 * Colors drive both the CSS and the 3D hexagons. Any CSS color works.
 * ------------------------------------------------------------------------- */
export const THEME = {
  bg:      "#0a0e16",   // page background (deep near-black)
  bgSoft:  "#10151f",   // raised surfaces / cards
  text:    "#e7ecf3",   // primary text
  textDim: "#8b97a8",   // secondary text
  accent:  "#37e0c4",   // primary accent (teal) — links, highlights, hexagons
  accent2: "#7aa2ff",   // secondary accent (blue) — gradients, link lines
  border:  "rgba(255,255,255,0.08)",
};

/* ---- 3D HEXAGON FIELD (animated background, shared by all pages) ---------
 * Connected dots, reimagined as 3D hexagons that float, spin and link up.
 * ------------------------------------------------------------------------- */
export const HEXFIELD = {
  enabled:       true,
  count:         70,      // number of hexagons (lower = faster on weak GPUs)
  spread:        70,      // how far they spread in 3D space
  size:          1.2,     // base hexagon radius
  sizeJitter:    0.9,     // random size variation
  rotationSpeed: 0.25,    // how fast each hexagon spins
  driftSpeed:    0.35,    // how fast they float around
  linkDistance:  13,      // max distance to draw a connecting line
  linkOpacity:   0.16,    // opacity of the connecting lines
  parallax:      0.18,    // how strongly the field follows the mouse (0 = off)
  wireframe:     false,   // true = outlined hexagons, false = solid faces
  fillOpacity:   0.55,    // opacity of solid hexagon faces
};

/* ---- BRAND (shown in the top-left of the nav) --------------------------- */
export const BRAND = {
  name: "Diogo Correia",
  monogram: "DC",                 // shown inside the hexagon logo
};

/* ---- TOP NAVIGATION ----------------------------------------------------
 * `href` is a page file. `match` is used to highlight the active page.
 * ------------------------------------------------------------------------- */
export const NAV = [
  { label: "Home",            href: "index.html",          match: "home" },
  { label: "Blog",            href: "blog.html",           match: "blog" },
  { label: "Impossible List", href: "impossiblelist.html", match: "impossiblelist" },
  { label: "CV",              href: "cv.html",             match: "cv" },
];

/* ---- SOCIAL / CONTACT LINKS --------------------------------------------
 * `icon` matches a key in assets/js/icons.js. For a custom icon use
 * `svg: { vb: "0 0 24 24", d: "M..." }` instead of `icon`.
 * ------------------------------------------------------------------------- */
export const SOCIALS = [
  { icon: "github",    label: "diogotcorreia",   href: "https://github.com/diogotcorreia" },
  { icon: "linkedin",  label: "diogotcorreia",   href: "https://linkedin.com/in/diogotcorreia" },
  { icon: "mastodon",  label: "@dtc@masto.pt",    href: "https://masto.pt/@dtc" },
  { icon: "discord",   label: "diogocorreia",     href: "https://discord.com/users/218721510649626635" },
  { icon: "matrix",    label: "@dtc:diogotc.com", href: "https://matrix.to/#/@dtc:diogotc.com" },
  { icon: "strava",    label: "Diogo Correia",    href: "https://www.strava.com/athletes/22762930" },
  { icon: "steam",     label: "rexcantor64",      href: "https://steamcommunity.com/id/rexcantor64" },
  { icon: "instagram", label: "@diogotc2002",     href: "https://www.instagram.com/diogotc2002/" },
  { icon: "email",     label: "me@diogotc.com",   href: "mailto:me@diogotc.com" },
  { icon: "key",       label: "GPG Key",          href: "https://gpg.diogotc.com" },
];

/* ---- FOOTER (shared) ---------------------------------------------------- */
export const FOOTER = {
  note: "© 2024 Diogo Correia. Built with Three.js.",
  sourceLabel: "Source code",
  sourceHref: "https://github.com/diogotcorreia/dtc-website",
};
