// Parallax Effect

window.addEventListener("scroll", function (e) {
    const target = document.querySelector(".h-cursiveG");
    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.4;
    target.style.transform = "translate3d(0px, " + rate + "px, " + rate + "px)";
  });
  
  window.addEventListener("scroll", function (e) {
    const target = document.querySelector(".header > div");
    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.5;

    target.style.transform =
      "translate3d(0px, -" + rate + "px, 0px) translate(-50%, -50%)";
  });
  