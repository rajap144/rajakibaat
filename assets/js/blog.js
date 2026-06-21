/* =============================================================================
 *  blog.js  —  renders the blog index (post cards) from blog.config.js.
 * ============================================================================= */

import { BLOG } from "./blog.config.js";
import * as UI from "./common.js";

const { esc, iconSvg, $ } = UI;

function fmtDate(d) {
  const dt = new Date(d);
  if (isNaN(dt)) return d;
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderHead(c) {
  const feed = c.feed
    ? `<div class="cv-actions"><a class="btn-outline" href="${esc(c.feed)}" target="_blank" rel="noopener noreferrer">${iconSvg({ icon: "link" })}<span>RSS feed</span></a></div>`
    : "";
  $("#blog-head").innerHTML = `
    <span class="eyebrow">Writing</span>
    <h1 class="section-title">${esc(c.heading)}</h1>
    <p class="page-lead">${esc(c.lead || "")}</p>
    ${feed}`;
}

function renderPosts(c) {
  const cards = (c.posts || [])
    .map((p) => {
      const tags = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
      const ext = p.external !== false;
      const attrs = ext ? ` target="_blank" rel="noopener noreferrer"` : "";
      return `
        <a class="card post-card" data-tilt href="${esc(p.href)}"${attrs}>
          <div class="card-body">
            <div class="post-meta">
              <span>${esc(fmtDate(p.date))}</span><span class="dot">·</span><span>${esc(p.readTime || "")}</span>
            </div>
            <h3 class="card-title">${esc(p.title)}</h3>
            <p class="card-desc">${esc(p.summary)}</p>
            ${tags ? `<div class="card-tags">${tags}</div>` : ""}
            <span class="card-link">Read more</span>
          </div>
        </a>`;
    })
    .join("");
  $("#blog-list").innerHTML = `<div class="post-list">${cards}</div>`;
}

function boot() {
  UI.mountChrome({ meta: BLOG.meta, active: "blog" });
  renderHead(BLOG);
  renderPosts(BLOG);
  UI.activate();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
