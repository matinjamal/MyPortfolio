let number0 = document.getElementById("test0");
let counter0 = 0;
setInterval(() => {
  if (counter0 == 2) {
    clearInterval;
  } else {
    counter0 += 1;
    number0.innerHTML = counter0 + " +";
  }
}, 2);
let number = document.getElementById("test");
let counter = 0;
setInterval(() => {
  if (counter == 32) {
    clearInterval;
  } else {
    counter += 1;
    number.innerHTML = counter + " +";
  }
}, 2);
let number2 = document.getElementById("test1");
let counter2 = 0;
setInterval(() => {
  if (counter2 == 67) {
    clearInterval;
  } else {
    counter2 += 1;
    number2.innerHTML = counter2 + " +";
  }
}, 2);
let year = document.getElementById("test5");
let counter3 = 0;
setInterval(() => {
  if (counter3 == 43) {
    clearInterval;
  } else {
    counter3 += 1;
    year.innerHTML = counter3 + " +";
  }
}, 20);







const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerNavEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerNavEl.classList.toggle("nav-open");
});