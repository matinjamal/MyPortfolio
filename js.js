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
//article
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".service-link");
  const images = document.querySelectorAll(".port-img");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = button.getAttribute("data-target");

      // Remove 'active' class from all buttons
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add 'active' class to the clicked button
      button.classList.add("active");

      // Show or hide images based on the target
      images.forEach((image) => {
        if (target === "all" || image.classList.contains(target)) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    });
  });
});
