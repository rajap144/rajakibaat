/* =============================================================================
 *  impossiblelist.js  —  renders the Impossible List from its config.
 * ============================================================================= */

import { IL } from "./impossiblelist.config.js";
import { SOCIALS } from "./site.js";
import * as UI from "./common.js";

const { esc, iconSvg, inlineMd, $ } = UI;

function goalHex(done) {
  return `<svg class="goal-hex${done ? " done" : ""}" viewBox="0 0 100 110" aria-hidden="true">
    <polygon points="50,3 95,29 95,81 50,107 5,81 5,29"></polygon>
    ${done ? '<path d="M30 56 L45 72 L73 37"></path>' : ""}
  </svg>`;
}

function goalHtml(g) {
  const note = g.note ? `<div class="goal-meta">${inlineMd(g.note)}</div>` : "";
  const children = g.children && g.children.length
    ? `<ul class="goal-children">${g.children.map(goalHtml).join("")}</ul>`
    : "";
  return `
    <li class="goal${g.done ? " done" : ""}">
      <div class="goal-row">
        ${goalHex(!!g.done)}
        <div class="goal-body">
          <span class="goal-label">${inlineMd(g.label)}</span>
          ${note}
        </div>
      </div>
      ${children}
    </li>`;
}

function renderHead(c) {
  $("#il-head").innerHTML = `
    <span class="eyebrow">Always growing</span>
    <h1 class="section-title">${esc(c.heading)}</h1>
    <p class="page-lead">${esc(c.subheading)}</p>`;
}

function renderIntro(c) {
  $("#il-intro").innerHTML = `<div class="intro-card"><div class="il-intro">${c.intro.map((p) => `<p>${inlineMd(p)}</p>`).join("")}</div></div>`;
}

function renderGoals(c) {
  const cats = c.categories
    .map((cat) => {
      const total = cat.goals.length;
      const done = cat.goals.filter((g) => g.done).length;
      return `
        <div class="goal-cat reveal-item">
          <div class="goal-cat-head">
            <h3>${esc(cat.name)}</h3>
            <span class="goal-progress"><b>${done}</b> / ${total} done</span>
          </div>
          <ul class="goals">${cat.goals.map(goalHtml).join("")}</ul>
        </div>`;
    })
    .join("");
  $("#il-goals").innerHTML = cats;
}

function renderContact(c) {
  const pills = SOCIALS
    .map((s) => `<a class="pill" href="${esc(s.href)}" target="_blank" rel="me noopener noreferrer">${iconSvg(s)}<span>${esc(s.label)}</span></a>`)
    .join("");
  $("#il-contact").innerHTML = `
    <div class="contact-card">
      <h2 class="section-title">${esc(c.contact.heading)}</h2>
      <p class="contact-text">${esc(c.contact.text)}</p>
      <div class="pills center">${pills}</div>
    </div>`;
}

function boot() {
  UI.mountChrome({ meta: IL.meta, active: "impossiblelist" });
  renderHead(IL);
  renderIntro(IL);
  renderGoals(IL);
  renderContact(IL);
  UI.activate();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
