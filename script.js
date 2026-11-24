/* ==========================================================================
   ✏️  CONFIG — edit your links & GenAI project details here (one place!)
   ========================================================================== */
const CONFIG = {
  GITHUB_URL: "https://github.com/nidakhanam",
  LINKEDIN_URL: "https://www.linkedin.com/in/nida-khanam-b4398920a/",
  EMAIL: "nidakhanzohra@gmail.com",

  // ⭐ Featured GenAI / Agentic AI project (shown first, as a large card)
  GENAI_PROJECT: {
    name: "DocuMind",
    subtitle: "Agentic document intelligence: cited, verified answers from business PDFs",
    description:
      "Ask questions about invoices, contracts and policies (digital or scanned) and get answers with citations that are checked against the source. Invoices are extracted into validated structured data, and anything that doesn't add up is sent to a human for review. Built in 3 days as a deep dive into running a GenAI platform in production: RAG, LLM orchestration, guardrails, evaluation, tracing and incident analysis.",
    metrics: [
      { value: "19/20", label: "golden-set answers correct (baseline 18/20)" },
      { value: "0.989", label: "RAGAS faithfulness" },
      { value: "8/8", label: "exact-ID retrieval (vector-only 6/8)" },
      { value: "9", label: "failures injected, debugged & written up as RCAs" },
      { value: "49", label: "automated tests" },
    ],
    highlights: [
      "<strong>Agentic RAG in LangGraph:</strong> rewrites the query, grades retrieved chunks, then answers with citations or an honest \"not found\". Query rewriting fixed the contract-amendment question that basic RAG missed.",
      "<strong>Hybrid retrieval:</strong> BM25 + vector search merged with Reciprocal Rank Fusion, plus ID-aware pinning so look-alike IDs (PO-77901 vs PO-77902) never get blurred together.",
      "<strong>Invoice extraction with human-in-the-loop:</strong> Pydantic schemas, arithmetic checked in Python (not by the LLM), retries with feedback, and LangGraph interrupts for approve / edit / reject.",
      "<strong>Guardrails:</strong> Presidio PII masking, prompt-injection quarantine at ingestion (blocked a hidden white-text PDF attack) and number + LLM-judge grounding checks.",
      "<strong>Smart ingestion:</strong> each page routed to its text layer or to OCR (Gemini vision, Tesseract baseline) using a text-quality score that catches junk scanner text.",
      "<strong>Built to be operated:</strong> one LLM gateway with retry, backoff and model fallback; per-request JSON tracing (+ Langfuse); FastAPI with safe uploads and request IDs; a Streamlit UI with a review queue.",
    ],
    tech: ["Python", "LangGraph", "LangChain", "Gemini", "ChromaDB", "BM25 + RRF", "FastAPI", "Streamlit", "Pydantic", "Presidio", "RAGAS", "Langfuse", "PyMuPDF", "Tesseract", "Pytest"],
    githubUrl: "#", // the repo is private: make it public, then paste "https://github.com/nidakhanam/documind"
    demoUrl: "#",   // replace "#" with a live demo link (or leave "#" to show "Demo soon")
    inProgress: false, // true shows a "🚧 In progress" badge
  },
};

/* ==========================================================================
   📦  PROJECTS — add a new object to this array to add a project card.
   Fields: title, description, tags[], github, demo,
           optional: featured, subtitle, badges[], metrics[{value,label}], highlights[] (HTML), flow[]
   Links set to "#" are shown as a disabled "coming soon" button.
   ========================================================================== */
const PROJECTS = [
  {
    title: CONFIG.GENAI_PROJECT.name,
    subtitle: CONFIG.GENAI_PROJECT.subtitle,
    description: CONFIG.GENAI_PROJECT.description,
    metrics: CONFIG.GENAI_PROJECT.metrics,
    highlights: CONFIG.GENAI_PROJECT.highlights,
    tags: CONFIG.GENAI_PROJECT.tech,
    github: CONFIG.GENAI_PROJECT.githubUrl,
    demo: CONFIG.GENAI_PROJECT.demoUrl,
    featured: true,
    badges: ["⭐ Featured", "🧠 GenAI", ...(CONFIG.GENAI_PROJECT.inProgress ? ["🚧 In progress"] : [])],
    flow: ["📄 PDF upload", "🔎 Text layer / OCR", "🧩 Chunk + embed", "🔀 Hybrid retrieval", "🤖 LangGraph agent", "🛡️ Guardrails + grounding", "💬 Cited answer / 👀 Human review"],
  },
  {
    title: "Task & Inventory Tracker",
    description:
      "Full-stack inventory and task management app with JWT auth and role-based permissions for 3 user roles. Normalized PostgreSQL schema and a REST API with 10+ endpoints supporting filtering, pagination and bulk operations — cutting average query response time by 30%.",
    tags: ["Django", "DRF", "PostgreSQL", "React", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Log Insight",
    description:
      "Log-ingestion pipeline streaming application logs through Kafka into Elasticsearch, processing 50K+ events/day, with Kibana dashboards and threshold-based alerts that cut manual log review time by 40%.",
    tags: ["Python", "Kafka", "Elasticsearch", "Kibana"],
    github: "#",
    demo: "#",
  },
  {
    title: "Config Diff CLI",
    description:
      "CLI that diffs network-device configs against a baseline and detects 100+ drift violations across sample datasets — with 90%+ test coverage and CI via GitHub Actions.",
    tags: ["Python", "Click", "YAML", "GitHub Actions"],
    github: "#",
    demo: "#",
  },
];

/* ==========================================================================
   💻  Terminal lines typed in the hero
   ========================================================================== */
const TERMINAL_LINES = [
  { type: "prompt", text: "> whoami" },
  { type: "out", text: "Nida Khanam — Python Developer + GenAI 💻🌸" },
  { type: "prompt", text: "> cat skills.txt" },
  { type: "out", text: "Python · Django · GenAI · RAG · Agents · Kafka" },
  { type: "prompt", text: "> echo $CURRENT_FOCUS" },
  { type: "out", text: "building AI agents that actually do things ✨" },
];

/* ========================================================================== */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- A little hello for devs who open the console ---------- */
console.log(
  "%c✨ Hi, fellow dev! Thanks for peeking under the hood.%c\n心臓を捧げよ — dedicate your heart to what you build. 🫀",
  "font: 600 14px/1.6 Quicksand, sans-serif; color: #C2577A;",
  "font: 13px/1.6 'JetBrains Mono', monospace; color: #3F7D5C;"
);

document.addEventListener("DOMContentLoaded", () => {
  applyLinks();
  renderProjects();
  setupNav();
  setupThemeToggle();
  typeTerminal();
  setupReveal();
  setupCounters();
});

/* ---------- Links from CONFIG ---------- */
function applyLinks() {
  const map = {
    github: CONFIG.GITHUB_URL,
    linkedin: CONFIG.LINKEDIN_URL,
    email: `mailto:${CONFIG.EMAIL}`,
  };
  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = map[el.dataset.link];
    if (url) el.setAttribute("href", url);
  });
}

/* ---------- Projects ---------- */
function isPlaceholder(url) {
  return !url || url.trim() === "#";
}

function linkButton(url, label, placeholderLabel, projectTitle) {
  const a = document.createElement("a");
  a.className = "btn btn--ghost btn--sm";
  if (isPlaceholder(url)) {
    a.textContent = placeholderLabel;
    a.setAttribute("aria-disabled", "true");
    a.setAttribute("role", "link");
  } else {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = `${label} ↗`;
    a.setAttribute("aria-label", `${label}: ${projectTitle} (opens in new tab)`);
  }
  return a;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  PROJECTS.forEach((p) => {
    const card = document.createElement("article");
    card.className = `project glass reveal${p.featured ? " project--featured" : ""}`;

    if (p.badges && p.badges.length) {
      const badges = document.createElement("div");
      badges.className = "project__badges";
      p.badges.forEach((b) => {
        const s = document.createElement("span");
        s.className = `badge ${b.includes("progress") ? "badge--wip" : "badge--featured"}`;
        s.textContent = b;
        badges.appendChild(s);
      });
      card.appendChild(badges);
    }

    const h3 = document.createElement("h3");
    h3.textContent = p.title;
    card.appendChild(h3);

    if (p.subtitle) {
      const sub = document.createElement("p");
      sub.className = "project__subtitle";
      sub.textContent = p.subtitle;
      card.appendChild(sub);
    }

    const desc = document.createElement("p");
    desc.textContent = p.description;
    card.appendChild(desc);

    if (p.metrics && p.metrics.length) {
      const stats = document.createElement("ul");
      stats.className = "stats project__stats";
      stats.setAttribute("aria-label", "Results");
      p.metrics.forEach((m) => {
        const li = document.createElement("li");
        li.className = "stat";
        const num = document.createElement("span");
        num.className = "stat__num";
        num.textContent = m.value;
        const label = document.createElement("span");
        label.className = "stat__label";
        label.textContent = m.label;
        li.append(num, label);
        stats.appendChild(li);
      });
      card.appendChild(stats);
    }

    if (p.highlights && p.highlights.length) {
      const ul = document.createElement("ul");
      ul.className = "bullets project__highlights";
      p.highlights.forEach((h) => {
        const li = document.createElement("li");
        li.innerHTML = h; // trusted, hand-written content from this file
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    if (p.flow && p.flow.length) {
      const flow = document.createElement("figure");
      flow.className = "flow";
      flow.setAttribute("aria-label", `How it works: ${p.flow.join(", then ")}`);
      const cap = document.createElement("figcaption");
      cap.className = "flow__label";
      cap.textContent = "// how it works";
      const steps = document.createElement("div");
      steps.className = "flow__steps";
      steps.setAttribute("aria-hidden", "true");
      p.flow.forEach((step, i) => {
        const s = document.createElement("span");
        s.className = "flow__step";
        s.textContent = step;
        steps.appendChild(s);
        if (i < p.flow.length - 1) {
          const arrow = document.createElement("span");
          arrow.className = "flow__arrow";
          arrow.textContent = "→";
          steps.appendChild(arrow);
        }
      });
      flow.append(cap, steps);
      card.appendChild(flow);
    }

    const tags = document.createElement("ul");
    tags.className = "tags";
    tags.setAttribute("aria-label", "Tech stack");
    p.tags.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      tags.appendChild(li);
    });
    card.appendChild(tags);

    const links = document.createElement("div");
    links.className = "project__links";
    links.append(
      linkButton(p.github, "GitHub", "Code soon", p.title),
      linkButton(p.demo, "Live Demo", "Demo soon", p.title)
    );
    card.appendChild(links);

    grid.appendChild(card);
  });
}

/* ---------- Mobile nav + active link ---------- */
function setupNav() {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  const close = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      close();
      toggle.focus();
    }
  });

  // Highlight the nav link of the section in view
  if (!("IntersectionObserver" in window)) return;
  const links = [...menu.querySelectorAll("a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          const active = a.getAttribute("href") === `#${entry.target.id}`;
          a.classList.toggle("is-active", active);
          if (active) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

/* ---------- Light / dark theme ---------- */
function setupThemeToggle() {
  const btn = document.querySelector(".theme-toggle");
  const root = document.documentElement;
  const sync = () => {
    const dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  };
  sync();
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    sync();
  });
}

/* ---------- Typing terminal ---------- */
function typeTerminal() {
  const out = document.getElementById("terminal-output");
  if (!out) return;

  const addLine = (line) => {
    const span = document.createElement("span");
    span.className = line.type;
    out.appendChild(span);
    return span;
  };

  if (prefersReducedMotion) {
    TERMINAL_LINES.forEach((line) => {
      addLine(line).textContent = line.text;
      out.appendChild(document.createTextNode("\n"));
    });
    return;
  }

  let lineIdx = 0;
  const nextLine = () => {
    if (lineIdx >= TERMINAL_LINES.length) return;
    const line = TERMINAL_LINES[lineIdx++];
    const span = addLine(line);
    const chars = Array.from(line.text); // keeps emoji intact
    let i = 0;
    const speed = line.type === "prompt" ? 70 : 22;
    const tick = () => {
      span.textContent += chars[i++];
      if (i < chars.length) {
        setTimeout(tick, speed + Math.random() * 40);
      } else {
        out.appendChild(document.createTextNode("\n"));
        setTimeout(nextLine, line.type === "prompt" ? 300 : 650);
      }
    };
    tick();
  };
  setTimeout(nextLine, 500);
}

/* ---------- Fade / slide in on scroll ---------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    io.observe(el);
  });
}

/* ---------- Animated stat chips ---------- */
function setupCounters() {
  const nums = document.querySelectorAll(".stat__num[data-count]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) return; // final values already in HTML

  const animate = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  nums.forEach((n) => io.observe(n));
}
