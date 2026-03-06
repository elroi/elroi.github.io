document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
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
      const target = event.target;
      if (target instanceof HTMLElement && target.tagName === "A") {
        closeNav();
      }
    });
  }

  const internalLinks = document.querySelectorAll('a[href^="#"]');

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

  console.log(
    "%cSecurity for AI · AI for Security\n%cPsst. Try FunversarialCV: https://github.com/elroi/FunversarialCV",
    "color:#38bdf8;font-weight:bold;font-size:12px;",
    "color:#9ca3af;font-size:11px;"
  );

  const today = new Date();
  if (today.getMonth() === 0 && today.getDate() === 28) {
    console.log(
      "Data Privacy Day bonus: remember, privacy and security are two sides of the same coin."
    );
  }

  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const pressedKeys = [];

  window.addEventListener("keydown", (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    pressedKeys.push(key);
    if (pressedKeys.length > konamiSequence.length) {
      pressedKeys.shift();
    }

    const isMatch = konamiSequence.every((seqKey, index) => pressedKeys[index] === seqKey);
    if (isMatch) {
      document.body.classList.add("egg-unlocked");
      console.log("Konami code detected. Easter egg badge unlocked in the footer.");
    }
  });

  const contactForm = document.querySelector(".contact-form");
  const messageField = document.getElementById("message");

  if (contactForm && messageField instanceof HTMLTextAreaElement) {
    contactForm.addEventListener("submit", (event) => {
      const value = messageField.value.toLowerCase();
      const magic = "funversarial";

      if (value.includes(magic)) {
        event.preventDefault();

        const existingHint = contactForm.querySelector(".egg-hint");
        if (!existingHint) {
          const hint = document.createElement("div");
          hint.className = "egg-hint";
          hint.textContent = "Egg found. Check the browser console for a message.";
          contactForm.appendChild(hint);
        }

        console.log(
          "You found the Funversarial egg in the contact form. Nice work, adversarial thinker."
        );
      }
    });
  }
});

