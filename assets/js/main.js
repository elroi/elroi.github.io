document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (navToggle && siteNav) {
    const closeNav = () => {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    siteNav.addEventListener("click", (event) => {
      const target = event.target as HTMLElement | null;
      if (target && target.tagName === "A") {
        closeNav();
      }
    });
  }

  const internalLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  internalLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") {
      return;
    }

    link.addEventListener("click", (event) => {
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

