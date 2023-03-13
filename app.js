const menu = document.getElementById("menu");
const close = document.getElementById("close");
const hamburger = document.getElementById("hamburger");
const nav_bar = document.getElementById("nav_bar");

menu.style.display = "block";
close.style.display = "none";
/*nav_bar.style.display = "flex";*/

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

window.addEventListener("resize", function () {
  // vérifier la largeur de la fenêtre
  if (window.innerWidth > 704) {
    // changer la variable si la largeur dépasse 704px
    nav_bar.style.display = "flex";
  } else {
    // remettre la variable à sa valeur initiale si la largeur est inférieure ou égale à 704px
    nav_bar.style.display = "none";
  }
});
