/* ==========================================================================
   ✏️  CONFIG — edit your links & GenAI project details here (one place!)
   ========================================================================== */
const CONFIG = {
  GITHUB_URL: "https://github.com/nidakhanam",
  LINKEDIN_URL: "https://www.linkedin.com/in/nida-khanam-b4398920a/",
  EMAIL: "nidakhanzohra@gmail.com",
  RESUME_PATH: "assets/Nida_Khanam_Resume.pdf", // put your PDF in /assets with this name

  // ⭐ Featured GenAI / Agentic AI project (shown first, as a large card)
  GENAI_PROJECT: {
    name: "[PROJECT NAME — GenAI / Agentic AI project]",
    description: "[ONE-LINE DESCRIPTION — e.g. An AI agent that answers questions over your docs and takes actions via tools.]",
    tech: ["Python", "FastAPI", "LangGraph", "RAG", "Vector DB", "LLM API", "Docker"],
    githubUrl: "#", // replace "#" with the repo link
    demoUrl: "#",   // replace "#" with a live demo link (or leave "#" to show "Demo soon")
    inProgress: true, // set to false when it's done to hide the "🚧 In progress" badge
  },
};

/* ==========================================================================
   📦  PROJECTS — add a new object to this array to add a project card.
   Fields: title, description, tags[], github, demo, featured?, badges?, flow?
   Links set to "#" are shown as a disabled "coming soon" button.
   ========================================================================== */
const PROJECTS = [
  {
    title: CONFIG.GENAI_PROJECT.name,
    description: CONFIG.GENAI_PROJECT.description,
    tags: CONFIG.GENAI_PROJECT.tech,
    github: CONFIG.GENAI_PROJECT.githubUrl,
    demo: CONFIG.GENAI_PROJECT.demoUrl,
    featured: true,
    badges: ["⭐ Featured", ...(CONFIG.GENAI_PROJECT.inProgress ? ["🚧 In progress"] : [])],
    flow: ["👩‍💻 User", "🤖 Agent", "🧰 Tools / RAG retrieval", "🧠 LLM", "💬 Response"],
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
  { type: "out", text: "Nida Khanam — Software Developer 💻🌸" },
  { type: "prompt", text: "> cat skills.txt" },
  { type: "out", text: "Python · Django · GenAI · RAG · Agents · Kafka" },
  { type: "prompt", text: "> echo $CURRENT_FOCUS" },
  { type: "out", text: "building AI agents that actually do things ✨" },
];

/* ========================================================================== */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    resume: CONFIG.RESUME_PATH,
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

    const desc = document.createElement("p");
    desc.textContent = p.description;
    card.appendChild(desc);

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
