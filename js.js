const btnNavEl = document.querySelector(".btn-mobile-nav");
const navHeaderEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  navHeaderEl.classList.toggle("nav-open");
});

const menu_btn = document.querySelector(".btn-mobile-nav");
const menu_menu = document.querySelector(".nav-header");
const menu = document.querySelector(".header");
const menu_items = document.querySelectorAll(".ul-nav a"); 


function closeMenu() {
  menu.classList.remove("nav-open");
}
menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("active");
  menu_menu.classList.toggle("active");
});
menu_items.forEach(function (item) {
  item.addEventListener("click", closeMenu);
});
