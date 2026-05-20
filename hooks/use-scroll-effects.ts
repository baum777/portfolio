"use client";

import { useEffect } from "react";

const MOBILE_BREAKPOINT = 1120;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function useScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link"));
    const processSection = document.querySelector<HTMLElement>(".process-scroll");
    const processTrack = document.querySelector<HTMLElement>("[data-process-track]");
    const processSticky = document.querySelector<HTMLElement>(".process-sticky");
    const maskedElements = document.querySelectorAll<HTMLElement>(".masked");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sectionByHash = navLinks
      .map((link) => {
        const target = document.querySelector(link.getAttribute("href") ?? "");
        return target ? { link, target } : null;
      })
      .filter((entry): entry is { link: HTMLAnchorElement; target: Element } => Boolean(entry));

    const spyObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const id = `#${visible.target.id}`;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === id);
        });
      },
      {
        root: null,
        threshold: [0.18, 0.32, 0.5],
        rootMargin: "-22% 0px -58% 0px"
      }
    );

    sectionByHash.forEach(({ target }) => spyObserver.observe(target));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -9% 0px"
      }
    );

    maskedElements.forEach((element) => revealObserver.observe(element));

    let smoothY = window.scrollY;
    let currentX = 0;
    let targetX = 0;
    let processProgress = 0;
    let rafId = 0;
    let ticking = false;

    const updateTargets = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
      root.style.setProperty("--page-progress", pageProgress.toFixed(4));

      if (processSection && processTrack && processSticky && window.innerWidth > MOBILE_BREAKPOINT) {
        const rect = processSection.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const distance = processSection.offsetHeight - window.innerHeight;
        processProgress = distance > 0 ? clamp((scrollY - sectionTop) / distance, 0, 1) : 0;

        const sidePad = Math.max(26, Math.min(window.innerWidth * 0.11, 132));
        root.style.setProperty("--process-side-pad", `${sidePad}px`);

        const visibleWidth = processSticky.clientWidth;
        const maxX = Math.max(0, processTrack.scrollWidth - visibleWidth);
        targetX = -processProgress * maxX;
      } else {
        processProgress = 0;
        targetX = 0;
      }

      root.style.setProperty("--process-progress", processProgress.toFixed(4));
    };

    const animate = () => {
      smoothY += (window.scrollY - smoothY) * 0.075;
      currentX += (targetX - currentX) * 0.09;
      root.style.setProperty("--smooth-y", smoothY.toFixed(2));

      if (processTrack && window.innerWidth > MOBILE_BREAKPOINT) {
        processTrack.style.transform = `translate3d(${currentX}px, 0, 0)`;
      } else if (processTrack) {
        processTrack.style.removeProperty("transform");
      }

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

    const resizeObserver = new ResizeObserver(() => {
      requestUpdate();
    });
    if (processTrack) resizeObserver.observe(processTrack);
    if (processSticky) resizeObserver.observe(processSticky);
    if (processSection) resizeObserver.observe(processSection);
    resizeObserver.observe(document.body);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    updateTargets();
    if (reducedMotion) {
      root.style.setProperty("--smooth-y", String(window.scrollY));
      if (processTrack) processTrack.style.removeProperty("transform");
    } else {
      animate();
    }

    return () => {
      spyObserver.disconnect();
      revealObserver.disconnect();
      resizeObserver.disconnect();
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);
}
