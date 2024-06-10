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

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const topButton = document.querySelector(".back-to-top");
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    header.classList.add("opaque");
    topButton.classList.add("visible");
  } else {
    header.classList.remove("opaque");
    topButton.classList.remove("visible");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".about__description-button");
  const button2 = document.querySelector(".about__description-button-2");
  const descriptionVisible = document.querySelector(".about__visible-description");
  const descriptionHidden = document.querySelectorAll(
    ".about__hidden-description"
  );

  button.addEventListener("click", function () {
    descriptionHidden.forEach(function (wrapper) {
      wrapper.classList.add("openned");
    });
    button.classList.add("openned");
    descriptionVisible.classList.add("openned");
  });
  button2.addEventListener("click", function () {
    descriptionHidden.forEach(function (wrapper) {
      wrapper.classList.remove("openned");
    });
    button.classList.remove("openned");
    descriptionVisible.classList.remove("openned");
  });
});

const title = document.querySelectorAll(".services__title-div");

title.forEach((titleOpenner) => {
  titleOpenner.addEventListener("click", () => {
    title.forEach((item) => {
      if (item !== titleOpenner) {
        item.classList.remove("active");
      }
    });

    titleOpenner.classList.toggle("active");
  });
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
var storeLoader = document.getElementById("storePreloader");

window.addEventListener("load", function () {
  loader.classList.add("loaded");
});

window.addEventListener("load", function () {
  storeLoader.classList.add("loaded");
});
