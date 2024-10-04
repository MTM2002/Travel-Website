let toggleMenu = document.querySelector(".toggle-button");
toggleMenu.onclick = function () {
  document.querySelector(".nav-menu").classList.add("show-menu");
};
let closeMenu = document.querySelector(".nav-close");
closeMenu.onclick = function () {
  document.querySelector(".nav-menu").classList.remove("show-menu");
};
let navList = document.querySelectorAll(".nav-list");
navList.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.remove("show-menu");
  });
});
window.onscroll = function () {
  if (scrollY > 50) {
    document.querySelector(".header").classList.add("header-blur");
  } else {
    document.querySelector(".header").classList.remove("header-blur");
  }
  if (scrollY > 1000) {
    document.querySelector(".scroll-up").classList.add("scroll-up-active");
  } else {
    document.querySelector(".scroll-up").classList.remove("scroll-up-active");
  }
  let about = document.querySelector(".about");
  let popular = document.querySelector(".popular");
  let explore = document.querySelector(".explore");
  let navlinks = document.querySelectorAll(".nav-link");
  if (scrollY > about.offsetTop - 200) {
    navlinks.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector(".about-nav").classList.add("active");
  } else {
    document.querySelector(".about-nav").classList.remove("active");
    document.querySelector(".home-nav").classList.add("active");
  }
  if (scrollY > popular.offsetTop - 200) {
    navlinks.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector(".popular-nav").classList.add("active");
  } else {
    document.querySelector(".popular-nav").classList.remove("active");
  }
  if (scrollY > explore.offsetTop - 200) {
    navlinks.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector(".explore-nav").classList.add("active");
  } else {
    document.querySelector(".explore-nav").classList.remove("active");
  }
};
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true,
});
sr.reveal(`.landing-text,.footer`);
sr.reveal(`.one`, { delay: 600, distance: "100px", interval: 100 });
sr.reveal(`.about-content, .subs .image`, { origin: "right" });
sr.reveal(`.about-image,.subs-data`, { origin: "left" });
sr.reveal(`.pop`, { interval: 200 });
sr.reveal(`.explore-content`, { delay: 500 });
