//burgermenu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Vis og fjern content tema 2
let galleri = document.querySelector(".galleri");
let change = true;

document.querySelector(".btn").addEventListener("click", showGalleri);

function showGalleri() {
  galleri.classList.toggle("hide");
}

//Vis og fjern content tema 3
let galleri2 = document.querySelector(".galleri2");

document.querySelector(".btn2").addEventListener("click", showGalleri2);

function showGalleri2() {
  galleri2.classList.toggle("hide");
}

//Vis og fjern content tema 4
let galleri3 = document.querySelector(".galleri3");

document.querySelector(".btn3").addEventListener("click", showGalleri3);

function showGalleri3() {
  galleri3.classList.toggle("hide");
}

//Vis og fjern content tema 5
let galleri4 = document.querySelector(".galleri4");

document.querySelector(".btn4").addEventListener("click", showGalleri4);

function showGalleri4() {
  galleri4.classList.toggle("hide");
}

//Vis og fjern content tema 6
let galleri5 = document.querySelector(".galleri5");

document.querySelector(".btn5").addEventListener("click", showGalleri5);

function showGalleri5() {
  galleri5.classList.toggle("hide");
}
