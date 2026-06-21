/* =============================================================================
 *  main.js  —  HOME page. Renders hero, intro, projects and timeline from
 *  config.js, then hands the shared chrome (nav, footer, 3D background,
 *  reveals, tilt) to common.js.
 * ============================================================================= */

import { CONFIG } from "./config.js";
import * as UI from "./common.js";

const { esc, iconSvg, $ } = UI;

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
    <div class="scroll-cue">scroll ▾</div>`;
}

function renderIntro(c) {
  const lines = (c.intro.lines || []).map((l) => `<p>${esc(l)}</p>`).join("");
  $("#intro").innerHTML = `
    <div class="intro-card">
      <h2 class="intro-heading">${esc(c.intro.heading)}</h2>
      <div class="intro-lines">${lines}</div>
    </div>`;
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
    <div class="projects-grid">${cards}</div>`;
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
    <ul class="tl">${items}</ul>`;
}

function renderContact(c) {
  const k = c.contact || {};
  $("#contact").innerHTML = `
    <div class="contact-card">
      <h2 class="section-title">${esc(k.heading || "Contact")}</h2>
      <p class="contact-text">${esc(k.text || "")}</p>
      ${k.buttonHref ? `<a class="btn" href="${esc(k.buttonHref)}">${esc(k.buttonLabel || "Get in touch")}</a>` : ""}
    </div>`;
}

function boot() {
  UI.mountChrome({ meta: CONFIG.meta, active: "home" });
  renderHero(CONFIG);
  renderIntro(CONFIG);
  renderProjects(CONFIG);
  renderTimeline(CONFIG);
  renderContact(CONFIG);
  UI.activate();
  requestAnimationFrame(() => $("#hero")?.classList.add("is-visible"));
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
