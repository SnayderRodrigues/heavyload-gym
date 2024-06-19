document.addEventListener("DOMContentLoaded", function () {
  var storeLoader = document.getElementById("storePreloader");

  window.addEventListener("load", function () {
    if (storeLoader) {
      storeLoader.classList.add("loaded");
    }
  });
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.querySelector(".storeHeader");
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    header.classList.add("opaque");
  } else {
    header.classList.remove("opaque");
  }
});

const cartPlusIcons = document.querySelectorAll(".cartPlusIcon");
const cartMinusIcons = document.querySelectorAll(".cartMinusIcon");
const cartInputs = document.querySelectorAll(".cartInput");

cartPlusIcons.forEach((cartPlus, index) => {
  cartPlus.addEventListener("click", () => {
    cartInputs[index].stepUp();
  });
});

cartMinusIcons.forEach((cartMinus, index) => {
  cartMinus.addEventListener("click", () => {
    cartInputs[index].stepDown();
  });
});
