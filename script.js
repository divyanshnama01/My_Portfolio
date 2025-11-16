// Back to Top (Instant Scroll) + mobile nav toggle + contact form demo
document.addEventListener("DOMContentLoaded", () => {

  // Back to Top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.opacity = "1";
      backToTop.style.pointerEvents = "all";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.pointerEvents = "none";
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo(0, 0); // instant jump to top
  });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      if (!expanded) {
        mainNav.style.display = "flex";
        mainNav.style.flexDirection = "column";
        mainNav.style.position = "absolute";
        mainNav.style.right = "12px";
        mainNav.style.top = "64px";
        mainNav.style.background = "rgba(7,12,23,0.9)";
        mainNav.style.padding = "8px";
        mainNav.style.borderRadius = "8px";
      } else {
        mainNav.style.display = "";
        mainNav.style.position = "";
        mainNav.style.right = "";
        mainNav.style.top = "";
        mainNav.style.background = "";
      }
    });

    // hide nav on resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        mainNav.style.display = "";
      } else if (navToggle.getAttribute("aria-expanded") === "true") {
        mainNav.style.display = "flex";
      }
    });
  }

  // Contact form stub (demo)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks! This is a demo form — replace with your form handler (Formspree, Netlify Forms, or server).");
      contactForm.reset();
    });
  }

});
