/* =============================================================================
 *  cv.js  —  renders the CV page from cv.config.js using shared chrome.
 * ============================================================================= */

import { CV } from "./cv.config.js";
import * as UI from "./common.js";

const { esc, iconSvg, inlineMd, $ } = UI;

function header(c) {
  const contact = c.contact
    .map((x) => {
      const inner = `${iconSvg(x)}<span>${esc(x.label)}</span>`;
      return x.href
        ? `<a class="pill" href="${esc(x.href)}" target="_blank" rel="noopener noreferrer">${inner}</a>`
        : `<span class="pill">${inner}</span>`;
    })
    .join("");
  const actions = (c.actions || [])
    .map((a) =>
      a.print
        ? `<button class="btn-outline" data-print>${esc(a.label)}</button>`
        : `<a class="${a.outline ? "btn-outline" : "btn"}" href="${esc(a.href)}" target="_blank" rel="noopener noreferrer">${esc(a.label)}</a>`
    )
    .join("");
  $("#cv-header").innerHTML = `
    <h1 class="cv-name">${esc(c.name)}</h1>
    <p class="cv-title">${esc(c.title)}</p>
    <div class="pills center cv-contact">${contact}</div>
    <div class="cv-actions">${actions}</div>`;
}

function sectionShell(id, eyebrow, title, inner) {
  $("#" + id).innerHTML = `
    <span class="eyebrow">${esc(eyebrow)}</span>
    <h2 class="section-title">${esc(title)}</h2>
    <div class="cv-section-body">${inner}</div>`;
}

function skills(c) {
  const groups = c.skills.groups
    .map(
      (g) => `
      <div class="skill-group">
        <h4>${esc(g.group)}</h4>
        <div class="skill-tags">${g.items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div>
      </div>`
    )
    .join("");
  const langs = c.skills.languages
    .map((l) => `<div class="lang-row"><span>${esc(l.name)}</span><span class="lvl">${esc(l.level)}</span></div>`)
    .join("");
  sectionShell(
    "cv-skills", "What I use", "Skills",
    `<div class="skills-grid">${groups}<div class="skill-group"><h4>Languages</h4>${langs}</div></div>`
  );
}

function openSource(c) {
  const items = c.openSource.items
    .map(
      (o) =>
        `<li class="os-item"><a class="os-name" href="${esc(o.href)}" target="_blank" rel="noopener noreferrer">${esc(o.name)}</a> <span class="os-note">— ${esc(o.note)}</span></li>`
    )
    .join("");
  sectionShell("cv-opensource", "Community", "Open Source", `<p class="entry-desc">${esc(c.openSource.intro)}</p><ul class="os-list">${items}</ul>`);
}

function entryHtml(e) {
  const bullets = e.bullets ? `<ul>${e.bullets.map((b) => `<li>${inlineMd(b)}</li>`).join("")}</ul>` : "";
  const desc = e.desc ? `<p class="entry-desc">${inlineMd(e.desc)}</p>` : "";
  const role = e.role ? `<div class="entry-role">${inlineMd(e.role)}</div>` : "";
  const tech = e.tech ? `<div class="entry-tech">${esc(e.tech)}</div>` : "";
  const titleHtml = e.href
    ? `<a href="${esc(e.href)}" target="_blank" rel="noopener noreferrer">${esc(e.title || e.name)}</a>`
    : esc(e.title || e.name);
  const org = e.org ? `<div class="entry-org">${esc(e.org)}</div>` : "";
  return `
    <div class="entry reveal-item">
      <div class="entry-period">${esc(e.period)}</div>
      <div class="entry-main">
        <div class="entry-title">${titleHtml}</div>
        ${org}${role}${tech}${desc}${bullets}
      </div>
    </div>`;
}

function education(c) {
  sectionShell("cv-education", "Studies", "Education", `<div class="entries">${c.education.map(entryHtml).join("")}</div>`);
}
function experience(c) {
  sectionShell("cv-experience", "Work", "Professional Experience", `<div class="entries">${c.experience.map(entryHtml).join("")}</div>`);
}
function projects(c) {
  const list = c.projects
    .map((p) => entryHtml({ period: p.period, name: p.name, href: p.href, tech: p.tech, desc: p.desc }))
    .join("");
  const foot = c.projectsFootnote ? `<p class="entry-desc" style="text-align:center;margin-top:1.4rem">${esc(c.projectsFootnote)}</p>` : "";
  sectionShell("cv-projects", "Selected work", "Projects", `<div class="entries">${list}</div>${foot}`);
}
function extra(c) {
  const pills = c.extraCurriculars
    .map((x) => {
      const m = String(x).match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      return m
        ? `<a class="pill" href="${esc(m[2])}" target="_blank" rel="noopener noreferrer">${esc(m[1])}</a>`
        : `<span class="pill">${esc(x)}</span>`;
    })
    .join("");
  sectionShell("cv-extra", "Beyond code", "Extra Curriculars", `<div class="pills">${pills}</div>`);
}

function boot() {
  UI.mountChrome({ meta: CV.meta, active: "cv" });
  header(CV);
  skills(CV);
  openSource(CV);
  education(CV);
  experience(CV);
  projects(CV);
  extra(CV);
  document.querySelectorAll("[data-print]").forEach((b) => b.addEventListener("click", () => window.print()));
  UI.activate();
  requestAnimationFrame(() => $("#cv-header")?.classList.add("is-visible"));
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
