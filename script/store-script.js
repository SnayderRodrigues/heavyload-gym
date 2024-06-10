document.addEventListener("DOMContentLoaded", function () {
  var storeLoader = document.getElementById("storePreloader");

  window.addEventListener("load", function () {
    if (storeLoader) {
      storeLoader.classList.add("loaded");
    }
  });
});
