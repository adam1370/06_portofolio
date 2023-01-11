const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Vis og fjern content fra tema 2
let galleri = document.querySelector(".galleri");
let change = true;

document.querySelector(".btn").addEventListener("click", showGalleri);

function showGalleri() {
  galleri.classList.toggle("hide");
}

//Vis og fjern content fra tema 3
let galleri2 = document.querySelector(".galleri2");

document.querySelector(".btn2").addEventListener("click", showGalleri2);

function showGalleri2() {
  galleri2.classList.toggle("hide");
}

//Vis og fjern content fra tema 5
let galleri3 = document.querySelector(".galleri3");

document.querySelector(".btn3").addEventListener("click", showGalleri3);

function showGalleri3() {
  galleri3.classList.toggle("hide");
}
