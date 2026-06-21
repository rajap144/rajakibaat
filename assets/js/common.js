/* =============================================================================
 *  common.js  —  shared rendering used by every page.
 *  Theme, meta tags, the top nav, footer, the 3D hexagon background, and the
 *  scroll-reveal / card-tilt interactions all live here so the four pages stay
 *  visually identical. Page-specific section rendering lives in each page script.
 * ============================================================================= */

import { THEME, HEXFIELD, BRAND, NAV, FOOTER } from "./site.js";
import { ICONS } from "./icons.js";
import { initHexField } from "./hexfield.js";

export const $ = (s, r = document) => r.querySelector(s);
export const esc = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* Minimal inline markdown for config text: links, bold, italic, strikethrough.
 * Safe: text is escaped first, then a small whitelist of markup is re-enabled.
 *   [label](url)  **bold**  *italic*  ~~strike~~                                */
export function inlineMd(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/~~([^~]+)~~/g, "<del>$1</del>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

/* ---- icons -------------------------------------------------------------- */
export function iconSvg(spec) {
  const def = (spec && spec.svg) || (spec && ICONS[spec.icon]) || ICONS.link;
  return `<svg viewBox="${esc(def.vb)}" aria-hidden="true"><path d="${esc(def.d)}"/></svg>`;
}

/* ---- theme + meta ------------------------------------------------------- */
export function applyTheme(t = THEME) {
  const r = document.documentElement.style;
  const map = {
    "--bg": t.bg, "--bg-soft": t.bgSoft, "--text": t.text, "--text-dim": t.textDim,
    "--accent": t.accent, "--accent2": t.accent2, "--border": t.border,
  };
  for (const [k, v] of Object.entries(map)) if (v) r.setProperty(k, v);
  const hex =
    "data:image/svg+xml," +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 110'><polygon points='50,0 100,27 100,82 50,110 0,82 0,27' fill='black'/></svg>"
    );
  r.setProperty("--hex-mask", `url("${hex}")`);
}

export function applyMeta(m = {}) {
  if (m.title) document.title = m.title;
  const ensure = (sel, make) => { let el = $(sel); if (!el) { el = make(); document.head.appendChild(el); } return el; };
  const nameMeta = (name) => ensure(`meta[name="${name}"]`, () => { const e = document.createElement("meta"); e.setAttribute("name", name); return e; });
  const propMeta = (prop) => ensure(`meta[property="${prop}"]`, () => { const e = document.createElement("meta"); e.setAttribute("property", prop); return e; });

  if (m.description) nameMeta("description").setAttribute("content", m.description);
  if (m.title) { propMeta("og:title").setAttribute("content", m.title); nameMeta("twitter:title").setAttribute("content", m.title); }
  if (m.description) { propMeta("og:description").setAttribute("content", m.description); nameMeta("twitter:description").setAttribute("content", m.description); }
  if (m.url) propMeta("og:url").setAttribute("content", m.url);
  const fav = $('link[rel="icon"]'); if (fav && m.favicon) fav.setAttribute("href", m.favicon);
}

/* ---- top navigation ----------------------------------------------------- */
export function renderNav(active) {
  const host = $("#site-nav");
  if (!host) return;
  const links = NAV.map(
    (n) => `<a class="nav-link${n.match === active ? " active" : ""}" href="${esc(n.href)}">${esc(n.label)}</a>`
  ).join("");
  host.innerHTML = `
    <div class="nav-inner">
      <a class="nav-brand" href="index.html" aria-label="${esc(BRAND.name)} — home">
        <span class="nav-logo">
          <svg viewBox="0 0 100 110" aria-hidden="true"><polygon points="50,3 95,29 95,81 50,107 5,81 5,29"/></svg>
          <span class="nav-mono">${esc(BRAND.monogram || "")}</span>
        </span>
        <span class="nav-brandname">${esc(BRAND.name)}</span>
      </a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-links" aria-label="Primary">${links}</nav>
    </div>`;

  const toggle = $(".nav-toggle", host);
  toggle?.addEventListener("click", () => {
    const open = host.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  // shrink the bar once the page is scrolled
  const onScroll = () => host.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- footer ------------------------------------------------------------- */
export function renderFooter() {
  const host = $("#footer");
  if (!host) return;
  const links = NAV.map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("");
  const src = FOOTER.sourceHref
    ? `<a href="${esc(FOOTER.sourceHref)}" target="_blank" rel="noopener noreferrer">${esc(FOOTER.sourceLabel || "Source")}</a>`
    : "";
  host.innerHTML = `
    <span class="footer-note">${esc(FOOTER.note || "")}</span>
    <nav class="footer-links" aria-label="Site map">${links}${src}</nav>`;
}

/* ---- 3D hexagon background ---------------------------------------------- */
export function startHexField() {
  try {
    initHexField($("#hex-canvas"), HEXFIELD, THEME);
  } catch (err) {
    console.error("Hex field failed to start:", err);
    const cv = $("#hex-canvas");
    if (cv) cv.style.display = "none";
  }
}

/* ---- scroll reveal ------------------------------------------------------ */
export function reveal(sel = "[data-reveal], .card, .tl-item, .reveal-item") {
  const targets = document.querySelectorAll(sel);
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".tl-item").forEach((el, i) => (el.style.transitionDelay = `${Math.min(i * 40, 240)}ms`));
  document.querySelectorAll(".card").forEach((el, i) => (el.style.transitionDelay = `${i * 80}ms`));
  targets.forEach((t) => io.observe(t));
}

/* ---- 3D card tilt ------------------------------------------------------- */
export function tilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;
  const MAX = 9;
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${px * MAX}deg) rotateX(${-py * MAX}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

/* ---- convenience: set up everything shared, given page meta + active id -- */
export function mountChrome({ meta = {}, active = "" } = {}) {
  applyTheme(THEME);
  applyMeta({ favicon: "assets/img/favicon.svg", ...meta });
  renderNav(active);
  renderFooter();
  startHexField();
}

/* Call after page-specific content is in the DOM. */
export function activate() {
  reveal();
  tilt();
}
