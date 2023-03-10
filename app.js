const menu = document.getElementById("menu");
const close = document.getElementById("close");
const hamburger = document.getElementById("hamburger");
const nav_bar = document.getElementById("nav_bar");

menu.style.display = "block";
close.style.display = "none";
nav_bar.style.display = "none";

hamburger.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    close.style.display = "block";
    nav_bar.style.display = "flex";
  } else {
    menu.style.display = "block";
    close.style.display = "none";
    nav_bar.style.display = "none";
  }
});
