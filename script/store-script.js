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
