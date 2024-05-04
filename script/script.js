function show(anything) {
  document.querySelector(".header__menu").value = anything;
}

let menu = document.querySelector(".header__menu");
let items = document.querySelector(".header__list-div");

menu.onclick = function () {
  menu.classList.toggle("open-menu");
  items.classList.toggle("open-menu");

  items.removeAttribute("style");
};

items.onclick = function () {
  items.classList.remove("open-menu");
  menu.classList.remove("open-menu");
};

const menuButton = document.querySelector(".header__menu");
const menuBody = document.querySelector(".header__list-div");
const body = document.body;

menuButton.addEventListener("click", function () {
  if (menu.classList.contains("open-menu")) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "";
  }
});

menuBody.addEventListener("click", function () {
  if (menu.classList.contains("open-menu")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 900) {
    items.style.transition = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".header");
  var top = document.querySelector(".back-to-top");
  var origOffsetY = document.querySelector(".hero").offsetHeight - 700;

  function scroll() {
    if (window.scrollY >= origOffsetY) {
      menu.classList.add("opaque");
      top.classList.add("opaque");
    } else {
      menu.classList.remove("opaque");
      top.classList.remove("opaque");
    }
  }

  document.addEventListener("scroll", scroll);
});

let count = 1;
document.getElementById("radio-1").checked = true;

setInterval(function () {
  nextImage();
}, 6000);

function nextImage() {
  count++;
  if (count > 2) {
    count = 1;
  }
  document.getElementById("radio-" + count).checked = true;
}

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
});
