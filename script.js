const hamburger = document.querySelector("#mobile-menu");
const tabs = document.querySelector(".navbar__menu");
//display hamburger menue
const mobileMenu = () => {
  hamburger.classList.toggle("is-active");
  tabs.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);
