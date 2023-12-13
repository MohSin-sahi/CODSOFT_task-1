"use strict";

const navLinks = document.querySelectorAll(".navbar__link");
const footLinks = document.querySelectorAll(".footer__link");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");

///smoth scroll
navLinks.forEach((link) => {
  link.addEventListener("click", (link) => {
    link.preventDefault();

    if (link.target.classList.contains("navbar__link")) {
      const id = link.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});

footLinks.forEach((link) => {
  link.addEventListener("click", (link) => {
    link.preventDefault();

    if (link.target.classList.contains("footer__link")) {
      const id = link.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});
////sticky navbar
const navObserver = new IntersectionObserver(
  function (entries, navObserver) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0, rootMargin: "-90px" }
);
navObserver.observe(header);

///reveal section
const secEnteries = function (entries, secObserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};
const secOptions = { root: null, threshold: 0.15 };
const secObserver = new IntersectionObserver(secEnteries, secOptions);
allSections.forEach((section) => {
  secObserver.observe(section);
  section.classList.add("section--hidden");
});

