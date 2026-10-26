/* Rendering for the portfolio. Content lives in js/projects.js. */
(function () {
  const data = window.PORTFOLIO;
  // Falls back to a detached element so a missing section never stops the rest of the page rendering.
  const $ = (sel) => document.querySelector(sel) || document.createElement("div");

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const num = (i) => String(i + 1).padStart(2, "0");

  // ── Theme ───────────────────────────────────────────────
  const ICON_MOON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;
  const ICON_SUN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;

  const currentTheme = () =>
    document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function initTheme() {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) document.documentElement.dataset.theme = saved;
    } catch (_) {}
    const btn = $("#themeToggle");
    const paint = () => (btn.innerHTML = currentTheme() === "dark" ? ICON_SUN : ICON_MOON);
    paint();
    btn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (_) {}
      paint();
    });
  }

  // ── Placeholder line art, used until a project has a `cover` image ──
  const ART = {
    "Game Dev": `
      <path d="M90 228 Q140 214 190 228 T290 228 T390 228 T490 228"/>
      <path d="M110 252 Q160 238 210 252 T310 252 T410 252 T510 252" opacity=".5"/>
      <path d="M230 160 q40 -28 80 0 q-40 28 -80 0z M310 160 l24 -17 v34z"/><circle cx="248" cy="156" r="2.5" fill="currentColor"/>
      <path d="M380 40 V128 q0 16 -13 16 q-11 0 -11 -11"/>`,
    "3D / Web": `
      <path d="M190 170 L300 134 L410 170 L300 188 Z"/><path d="M300 134 V100 L314 132"/>
      <path d="M250 160 L300 72 L350 160" opacity=".6"/><path d="M270 180 L240 222 L300 196 L360 222 L330 180" opacity=".6"/>
      <path d="M200 262 H400" opacity=".4"/>`,
    Electronics: `
      <rect x="258" y="118" width="84" height="84" rx="4"/>
      ${[0, 1, 2, 3].map((i) => `<path d="M258 ${132 + i * 19} H210 V${96 + i * 38} H170"/><circle cx="164" cy="${96 + i * 38}" r="5"/>`).join("")}
      ${[0, 1, 2, 3].map((i) => `<path d="M342 ${132 + i * 19} H390 V${92 + i * 42} H430"/><circle cx="436" cy="${92 + i * 42}" r="5"/>`).join("")}`,
    "Mechanical / CAD": `
      <circle cx="300" cy="160" r="62"/><circle cx="300" cy="160" r="22"/>
      ${Array.from({ length: 12 }, (_, i) => `<rect x="293" y="86" width="14" height="14" transform="rotate(${i * 30} 300 160)"/>`).join("")}
      <path d="M190 268 H410 M190 262 V274 M410 262 V274" opacity=".5"/>`,
    Simulation: `
      <path d="M150 60 V260 H450" opacity=".5"/>
      <path d="M150 160 ${Array.from({ length: 60 }, (_, i) => `L${150 + i * 5} ${(160 - Math.sin(i / 3.6) * 76 * Math.exp(-i / 34)).toFixed(1)}`).join(" ")}"/>`,
  };

  function placeholder(category) {
    const body = ART[category] || `<rect x="250" y="110" width="100" height="100" rx="6"/>`;
    return `<svg viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${body}</g>
    </svg>`;
  }

  const coverHtml = (p) =>
    p.cover
      ? `<img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy"${p.coverFit === "contain" ? ' class="contain"' : ""}>`
      : placeholder(p.category);

  // ── Shared chrome ───────────────────────────────────────
  function contactLinks(o) {
    const out = [];
    if (o.email) out.push(`<a href="mailto:${esc(o.email)}">${esc(o.email)}</a>`);
    if (o.github) out.push(`<a href="${esc(o.github)}" target="_blank" rel="noopener">GitHub ↗</a>`);
    if (o.linkedin) out.push(`<a href="${esc(o.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>`);
    if (o.cv) out.push(`<a href="${esc(o.cv)}" target="_blank">Résumé ↗</a>`);
    return out.join("");
  }

  function renderChrome() {
    const o = data.owner;
    $("#brand").textContent = o.name;
    $("#footer").innerHTML = `<span>© ${new Date().getFullYear()} ${esc(o.name)}</span><a href="#top" onclick="scrollTo({top:0,behavior:'smooth'});return false">Back to top ↑</a>`;
    initTheme();
  }

  // ── Home page ───────────────────────────────────────────
  function renderHome() {
    renderChrome();
    const o = data.owner;
    document.title = `${o.name} — ${o.title}`;
    $("#heroTitle").textContent = o.title;
    $("#heroIntro").textContent = o.headline;
    $("#heroLede").textContent = o.intro;
    $("#heroLinks").innerHTML = contactLinks(o);
    $("#contactLinks").innerHTML = contactLinks(o);

    const cats = ["All", ...new Set(data.projects.map((p) => p.category))];
    let active = "All";

    const drawFilters = () => {
      $("#filters").innerHTML = cats
        .map((c) => `<button role="tab" aria-selected="${c === active}" data-cat="${esc(c)}">${esc(c)}</button>`)
        .join("");
    };
    const drawGrid = () => {
      $("#grid").innerHTML = data.projects
        .map((p, i) => ({ p, i }))
        .filter(({ p }) => active === "All" || p.category === active)
        .map(
          ({ p, i }) => `<a class="card" href="project.html?p=${encodeURIComponent(p.id)}">
            <div class="thumb">${coverHtml(p)}</div>
            <div class="card-meta mono"><span>${num(i)}</span><span>${esc(p.category)}${p.year ? " · " + esc(p.year) : ""}</span></div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.summary)}</p>
          </a>`
        )
        .join("");
    };

    $("#filters").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      active = b.dataset.cat;
      drawFilters();
      drawGrid();
    });
    drawFilters();
    drawGrid();
  }

  // ── Project page ────────────────────────────────────────
  function mediaHtml(m) {
    const cap = m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : "";
    switch (m.type) {
      case "image":
        return `<figure class="media"><img src="${esc(m.src)}" alt="${esc(m.caption || "")}" loading="lazy" data-zoom>${cap}</figure>`;
      case "video":
        return `<figure class="media"><video src="${esc(m.src)}" controls playsinline preload="metadata"></video>${cap}</figure>`;
      case "youtube":
        return `<figure class="media"><iframe src="https://www.youtube-nocookie.com/embed/${esc(m.id)}" allowfullscreen loading="lazy" title="${esc(m.caption || "Video")}"></iframe>${cap}</figure>`;
      case "model":
        return `<figure class="media"><model-viewer src="${esc(m.src)}" camera-controls auto-rotate shadow-intensity="1" alt="${esc(m.caption || "3D model")}"></model-viewer>${cap}</figure>`;
      case "pdf":
        return `<figure class="media"><iframe class="pdf" src="${esc(m.src)}" title="${esc(m.caption || "PDF")}"></iframe>
          <figcaption>${esc(m.caption || "Document")} · <a href="${esc(m.src)}" target="_blank">Open ↗</a></figcaption></figure>`;
      case "embed":
        return `<figure class="media wide"><iframe src="${esc(m.src)}" allowfullscreen title="${esc(m.caption || "Demo")}"></iframe>${cap}</figure>`;
      default:
        return "";
    }
  }

  function renderProject() {
    renderChrome();
    const id = new URLSearchParams(location.search).get("p");
    const i = data.projects.findIndex((x) => x.id === id);
    const p = data.projects[i];
    const root = $("#detail");

    if (!p) {
      root.innerHTML = `<div class="detail-head"><a class="back" href="index.html">← All work</a><h1>Project not found</h1></div>`;
      return;
    }
    document.title = `${p.title} — ${data.owner.name}`;

    if (p.media.some((m) => m.type === "model")) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/dist/model-viewer.min.js";
      document.head.appendChild(s);
    }

    const links = (p.links || [])
      .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`)
      .join("");

    const next = data.projects[(i + 1) % data.projects.length];

    const gallery = p.media.length
      ? `<section>
          <div class="section-head"><h2>Gallery</h2></div>
          <div class="gallery">${p.media.map(mediaHtml).join("")}</div>
        </section>`
      : "";

    root.innerHTML = `
      <div class="detail-head">
        <a class="back" href="index.html#work">← All work</a>
        <p class="eyebrow mono">${num(i)} — ${esc(p.category)}</p>
        <h1>${esc(p.title)}</h1>
        <p class="lede">${esc(p.summary)}</p>
      </div>
      <div class="detail-cover">${coverHtml(p)}</div>
      <div class="detail-layout">
        <dl class="facts">
          <div><dt class="mono">Category</dt><dd>${esc(p.category)}</dd></div>
          ${p.year ? `<div><dt class="mono">Year</dt><dd>${esc(p.year)}</dd></div>` : ""}
          <div><dt class="mono">Tools</dt><dd>${p.tools.map(esc).join("<br>")}</dd></div>
          ${links ? `<div><dt class="mono">Links</dt><dd>${links}</dd></div>` : ""}
        </dl>
        <div class="prose">
          ${p.description.map((d) => `<p>${esc(d)}</p>`).join("")}
          ${p.highlights?.length ? `<h2>What I did</h2><ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        </div>
      </div>
      ${gallery}
      <section>
        <div class="section-head"><h2>Next project</h2></div>
        <a class="card" href="project.html?p=${encodeURIComponent(next.id)}" style="max-width:520px">
          <div class="thumb">${coverHtml(next)}</div>
          <h3 style="margin-top:20px">${esc(next.title)} →</h3>
        </a>
      </section>`;

    root.addEventListener("click", (e) => {
      const img = e.target.closest("img[data-zoom]");
      if (!img) return;
      const box = document.createElement("div");
      box.className = "lightbox";
      box.innerHTML = `<img src="${img.src}" alt="">`;
      box.addEventListener("click", () => box.remove());
      document.body.appendChild(box);
    });
  }

  window.Portfolio = { renderHome, renderProject };
})();
