"use client";

import { useEffect } from "react";

const MOBILE_BREAKPOINT = 900;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function useScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".side-nav-link, .mobile-nav-link"));
    const processSection = document.querySelector<HTMLElement>(".process-scroll");
    const processTrack = document.querySelector<HTMLElement>("[data-process-track]");
    const processSticky = document.querySelector<HTMLElement>(".process-sticky");
    const indicator = document.querySelector<HTMLElement>("[data-process-indicator]");
    const indicatorLabel = document.querySelector<HTMLElement>("[data-process-label]");
    const indicatorDots = Array.from(document.querySelectorAll<HTMLElement>("[data-process-dot]"));
    const maskedElements = document.querySelectorAll<HTMLElement>(".masked");
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

    const setIndicator = (activeIndex: number, visible: boolean) => {
      indicator?.classList.toggle("visible", visible);
      indicatorDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
      });
      const activeDot = indicatorDots[activeIndex];
      if (indicatorLabel && activeDot?.dataset.label) {
        indicatorLabel.textContent = activeDot.dataset.label;
      }
    };

    const updateTargets = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
      root.style.setProperty("--page-progress", pageProgress.toFixed(4));
      updateActiveNav();

      if (processSection && processTrack && processSticky && window.innerWidth >= MOBILE_BREAKPOINT) {
        const rect = processSection.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const distance = processSection.offsetHeight - window.innerHeight;
        processProgress = distance > 0 ? clamp((scrollY - sectionTop) / distance, 0, 1) : 0;

        const visibleWidth = processSticky.clientWidth;
        const maxX = Math.max(0, processTrack.scrollWidth - visibleWidth);
        targetX = -processProgress * maxX;

        const activeIndex = clamp(Math.round(processProgress * Math.max(indicatorDots.length - 1, 0)), 0, Math.max(indicatorDots.length - 1, 0));
        setIndicator(activeIndex, rect.top < window.innerHeight * 0.62 && rect.bottom > window.innerHeight * 0.38);
      } else {
        processProgress = 0;
        targetX = 0;
        setIndicator(0, false);
      }

      root.style.setProperty("--process-progress", processProgress.toFixed(4));
    };

    const animate = () => {
      smoothY += (window.scrollY - smoothY) * 0.08;
      currentX += (targetX - currentX) * 0.12;
      root.style.setProperty("--smooth-y", smoothY.toFixed(2));

      if (processTrack && window.innerWidth >= MOBILE_BREAKPOINT) {
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
      revealObserver.disconnect();
      resizeObserver.disconnect();
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);
}
