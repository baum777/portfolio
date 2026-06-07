"use client";

import { useEffect } from "react";

const MOBILE_BREAKPOINT = 900;
const BACK_TO_TOP_THRESHOLD = 1.5;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function useScrollEffects(refreshKey?: string) {
  useEffect(() => {
    const root = document.documentElement;
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".side-nav-link, .mobile-nav-link"));
    const maskedElements = Array.from(document.querySelectorAll<HTMLElement>(".masked"));
    const backToTopButton = document.querySelector<HTMLButtonElement>("[data-back-to-top]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sectionByHash = navLinks
      .map((link) => {
        const href = link.getAttribute("href");
        const target = href?.startsWith("#") ? document.querySelector(href) : null;
        return target ? { link, target } : null;
      })
      .filter((entry): entry is { link: HTMLAnchorElement; target: Element } => Boolean(entry));

    const updateActiveNav = () => {
      const anchorY = window.innerHeight * 0.42;
      const activeEntry = sectionByHash.find(({ target }) => {
        const rect = target.getBoundingClientRect();
        return rect.top <= anchorY && rect.bottom >= anchorY;
      });
      const activeHref = activeEntry ? `#${activeEntry.target.id}` : null;

      navLinks.forEach((link) => {
        link.classList.toggle("active", activeHref !== null && link.getAttribute("href") === activeHref);
      });
    };

    const updateBackToTop = () => {
      if (!backToTopButton) return;
      const threshold = window.innerHeight * BACK_TO_TOP_THRESHOLD;
      backToTopButton.classList.toggle("visible", window.scrollY > threshold);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -9% 0px"
      }
    );

    maskedElements.forEach((element) => revealObserver.observe(element));

    let smoothY = window.scrollY;
    let rafId = 0;
    let ticking = false;

    const updateTargets = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
      root.style.setProperty("--page-progress", pageProgress.toFixed(4));
      updateActiveNav();
      updateBackToTop();
    };

    const animate = () => {
      smoothY += (window.scrollY - smoothY) * 0.08;
      root.style.setProperty("--smooth-y", smoothY.toFixed(2));
      rafId = window.requestAnimationFrame(animate);
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateTargets();
        ticking = false;
      });
    };

    const onBackToTopClick = (event: MouseEvent) => {
      if (!backToTopButton) return;
      event.preventDefault();
      if (reducedMotion) {
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    backToTopButton?.addEventListener("click", onBackToTopClick);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    updateTargets();
    if (!reducedMotion) {
      animate();
    } else {
      root.style.setProperty("--smooth-y", String(window.scrollY));
    }

    return () => {
      revealObserver.disconnect();
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      backToTopButton?.removeEventListener("click", onBackToTopClick);
    };
  }, [refreshKey]);
}
