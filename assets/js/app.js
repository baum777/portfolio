import { siteContent } from "../data/site-content.js";
import { renderPage } from "./render.js";

const root = document.documentElement;
const appRoot = document.querySelector("[data-app-root]");

if (!appRoot) {
  throw new Error("Missing [data-app-root] container.");
}

document.title = siteContent.meta.title;
const descriptionMeta = document.querySelector('meta[name="description"]');
if (descriptionMeta) {
  descriptionMeta.setAttribute("content", siteContent.meta.description);
}

appRoot.innerHTML = renderPage(siteContent);

const themeToggle = document.querySelector("[data-theme-toggle]");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const processSection = document.querySelector(".process-scroll");
const processTrack = document.querySelector("[data-process-track]");
const maskedElements = document.querySelectorAll(".masked");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "◑" : "☀";
  }
  try {
    localStorage.setItem("ck-theme", theme);
  } catch (_) {}
}

setTheme(root.getAttribute("data-theme") || "dark");

themeToggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

const sectionByHash = navLinks
  .map((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    return target ? { link, target } : null;
  })
  .filter(Boolean);

const spyObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) {
      return;
    }

    const id = `#${visible.target.id}`;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === id);
    });
  },
  {
    root: null,
    threshold: [0.18, 0.32, 0.5],
    rootMargin: "-22% 0px -58% 0px",
  }
);

sectionByHash.forEach(({ target }) => spyObserver.observe(target));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -9% 0px",
  }
);

maskedElements.forEach((element) => revealObserver.observe(element));

let smoothY = window.scrollY;
let currentX = 0;
let targetX = 0;
let processProgress = 0;
let processScrollSpan = 0;

function updateTargets() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const pageProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
  root.style.setProperty("--page-progress", pageProgress.toFixed(4));

  if (processSection && processTrack && window.innerWidth > 680) {
    const rect = processSection.getBoundingClientRect();
    const sectionTop = scrollY + rect.top;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const horizontalDistance = Math.max(0, processTrack.scrollWidth - viewportWidth);

    processScrollSpan = Math.max(horizontalDistance, viewportHeight * 4);
    root.style.setProperty("--process-scroll-span", `${processScrollSpan}px`);

    processProgress =
      processScrollSpan > 0
        ? clamp((scrollY - sectionTop) / processScrollSpan, 0, 1)
        : 0;

    targetX = -processProgress * horizontalDistance;
  } else {
    processProgress = 0;
    processScrollSpan = 0;
    targetX = 0;
    root.style.setProperty("--process-scroll-span", "0px");

    if (processTrack) {
      processTrack.style.transform = "translate3d(0, 0, 0)";
    }
  }

  root.style.setProperty("--process-progress", processProgress.toFixed(4));

  if (reducedMotion && processTrack && window.innerWidth > 680) {
    processTrack.style.transform = `translate3d(${targetX}px, 0, 0)`;
  }
}

function animate() {
  if (!reducedMotion) {
    smoothY += (window.scrollY - smoothY) * 0.075;
    currentX += (targetX - currentX) * 0.085;
    root.style.setProperty("--smooth-y", smoothY.toFixed(2));

    if (processTrack && window.innerWidth > 680) {
      processTrack.style.transform = `translate3d(${currentX}px, 0, 0)`;
    }
  }

  requestAnimationFrame(animate);
}

window.addEventListener("scroll", updateTargets, { passive: true });
window.addEventListener("resize", updateTargets);

updateTargets();
animate();
