/* =============================================================================
 *  main.js  —  builds the page from CONFIG, applies the theme, wires up the
 *  3D interactions (hexagon field, card tilt, scroll reveals).
 * ============================================================================= */

import { CONFIG } from "./config.js";
import { ICONS } from "./icons.js";
import { initHexField } from "./hexfield.js";

const $ = (sel) => document.querySelector(sel);
const esc = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---- theme + meta ------------------------------------------------------- */
function applyTheme(t) {
  const r = document.documentElement.style;
  const map = {
    "--bg": t.bg, "--bg-soft": t.bgSoft, "--text": t.text, "--text-dim": t.textDim,
    "--accent": t.accent, "--accent2": t.accent2, "--border": t.border,
  };
  for (const [k, v] of Object.entries(map)) if (v) r.setProperty(k, v);

  // shared hexagon shape used by decorative ::before masks
  const hex =
    "data:image/svg+xml," +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 110'><polygon points='50,0 100,27 100,82 50,110 0,82 0,27' fill='black'/></svg>"
    );
  r.setProperty("--hex-mask", `url("${hex}")`);
}

function applyMeta(m) {
  if (!m) return;
  if (m.title) document.title = m.title;
  const set = (sel, attr, val) => { const el = $(sel); if (el && val != null) el.setAttribute(attr, val); };
  set('meta[name="description"]', "content", m.description);
  set('meta[property="og:title"]', "content", m.title);
  set('meta[property="og:description"]', "content", m.description);
  set('meta[name="twitter:card"]', "content", "summary");
  if (m.url) {
    let og = $('meta[property="og:url"]');
    if (!og) { og = document.createElement("meta"); og.setAttribute("property", "og:url"); document.head.appendChild(og); }
    og.setAttribute("content", m.url);
  }
  if (m.favicon) { const f = $('link[rel="icon"]'); if (f) f.setAttribute("href", m.favicon); }
}

/* ---- icon markup -------------------------------------------------------- */
function iconSvg(spec) {
  const def = spec.svg || ICONS[spec.icon] || ICONS.link;
  return `<svg viewBox="${esc(def.vb)}" aria-hidden="true"><path d="${esc(def.d)}"/></svg>`;
}

/* ---- section renderers -------------------------------------------------- */
function renderHero(c) {
  const socials = (c.socials || [])
    .map(
      (s) =>
        `<a class="social" href="${esc(s.href)}" target="_blank" rel="me noopener noreferrer" aria-label="${esc(s.label)}">
           ${iconSvg(s)}<span>${esc(s.label)}</span>
         </a>`
    )
    .join("");

  $("#hero").innerHTML = `
    <div class="hero-avatar"><img src="${esc(c.hero.avatar)}" alt="${esc(c.hero.name)}" /></div>
    <h1 class="hero-name">${esc(c.hero.name)}</h1>
    <p class="hero-tagline">${esc(c.hero.tagline)}</p>
    <nav class="socials" aria-label="Social links">${socials}</nav>
    <div class="scroll-cue">scroll ▾</div>
  `;
}

function renderIntro(c) {
  const lines = (c.intro.lines || []).map((l) => `<p>${esc(l)}</p>`).join("");
  $("#intro").innerHTML = `
    <div class="intro-card">
      <h2 class="intro-heading">${esc(c.intro.heading)}</h2>
      <div class="intro-lines">${lines}</div>
    </div>
  `;
}

function renderProjects(c) {
  const cards = (c.projects || [])
    .map((p) => {
      const media = p.image
        ? `<div class="card-media"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" /></div>`
        : "";
      const tags = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
      const link = p.link
        ? `<a class="card-link" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">${esc(p.linkLabel || "Visit")}</a>`
        : "";
      return `
        <article class="card" data-tilt>
          ${media}
          <div class="card-body">
            <h3 class="card-title">${esc(p.title)}</h3>
            <p class="card-desc">${esc(p.description)}</p>
            ${tags ? `<div class="card-tags">${tags}</div>` : ""}
            ${link}
          </div>
        </article>`;
    })
    .join("");

  $("#projects").innerHTML = `
    <div class="projects-head">
      <span class="eyebrow">${esc(c.projectsHeading || "Portfolio")}</span>
      <h2 class="section-title">${esc(c.projectsSubheading || "Projects")}</h2>
    </div>
    <div class="projects-grid">${cards}</div>
  `;
}

function renderTimeline(c) {
  const items = (c.timeline || [])
    .map(
      (e) => `
      <li class="tl-item">
        <span class="tl-node"><span class="tl-dot"></span></span>
        <div class="tl-date">${esc(e.date)}</div>
        <h3 class="tl-title">${esc(e.title)}${e.tag ? `<span class="tl-tag">${esc(e.tag)}</span>` : ""}</h3>
        ${e.subtitle ? `<div class="tl-sub">${esc(e.subtitle)}</div>` : ""}
        ${e.description ? `<p class="tl-desc">${esc(e.description)}</p>` : ""}
      </li>`
    )
    .join("");

  $("#timeline").innerHTML = `
    <div class="timeline-head">
      <span class="eyebrow">Journey</span>
      <h2 class="section-title">${esc(c.timelineHeading || "Timeline")}</h2>
    </div>
    <ul class="tl">${items}</ul>
  `;
}

function renderContact(c) {
  const k = c.contact || {};
  $("#contact").innerHTML = `
    <div class="contact-card">
      <h2 class="section-title">${esc(k.heading || "Contact")}</h2>
      <p class="contact-text">${esc(k.text || "")}</p>
      ${k.buttonHref ? `<a class="btn" href="${esc(k.buttonHref)}">${esc(k.buttonLabel || "Get in touch")}</a>` : ""}
    </div>
  `;
}

function renderFooter(c) {
  const f = c.footer || {};
  const links = (f.links || []).map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join("");
  $("#footer").innerHTML = `
    <span class="footer-note">${esc(f.note || "")}</span>
    <nav class="footer-links" aria-label="Site map">${links}</nav>
  `;
}

/* ---- interactions ------------------------------------------------------- */
function setupReveal() {
  const targets = document.querySelectorAll("[data-reveal], .card, .tl-item");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  // gentle stagger for siblings
  document.querySelectorAll(".tl-item").forEach((el, i) => (el.style.transitionDelay = `${Math.min(i * 40, 240)}ms`));
  document.querySelectorAll(".card").forEach((el, i) => (el.style.transitionDelay = `${i * 80}ms`));
  targets.forEach((t) => io.observe(t));
}

function setupCardTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return; // skip on touch
  const MAX = 9; // degrees
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

/* ---- boot --------------------------------------------------------------- */
function boot() {
  applyTheme(CONFIG.theme || {});
  applyMeta(CONFIG.meta);

  renderHero(CONFIG);
  renderIntro(CONFIG);
  renderProjects(CONFIG);
  renderTimeline(CONFIG);
  renderContact(CONFIG);
  renderFooter(CONFIG);

  setupReveal();
  setupCardTilt();

  // mark hero visible immediately (it's above the fold)
  requestAnimationFrame(() => $("#hero")?.classList.add("is-visible"));

  try {
    initHexField($("#hex-canvas"), CONFIG.hexField || {}, CONFIG.theme || {});
  } catch (err) {
    console.error("Hex field failed to start:", err);
    const cv = $("#hex-canvas");
    if (cv) cv.style.display = "none";
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
