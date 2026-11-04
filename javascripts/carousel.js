/* Image carousel: arrows, dots, keyboard. Swiping is native scrolling.
   Works with MkDocs Material instant navigation. */
(function () {
  "use strict";

  function initCarousel(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = "true";

    var track = root.querySelector(".carousel__track");
    var slides = track.querySelectorAll(".carousel__slide");
    var prev = root.querySelector(".carousel__btn--prev");
    var next = root.querySelector(".carousel__btn--next");
    var dotsBox = root.querySelector(".carousel__dots");
    root.dataset.count = slides.length;

    // Build one dot per slide
    var dots = [];
    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel__dot";
      dot.setAttribute("aria-label", "Show image " + (i + 1));
      dot.addEventListener("click", function () { goTo(i); });
      dotsBox.appendChild(dot);
      dots.push(dot);
    });

    function current() {
      return Math.round(track.scrollLeft / track.clientWidth);
    }

    function goTo(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: i * track.clientWidth });
    }

    function update() {
      var i = current();
      dots.forEach(function (d, n) { d.setAttribute("aria-current", String(n === i)); });
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === slides.length - 1;
    }

    if (prev) prev.addEventListener("click", function () { goTo(current() - 1); });
    if (next) next.addEventListener("click", function () { goTo(current() + 1); });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { goTo(current() - 1); e.preventDefault(); }
      if (e.key === "ArrowRight") { goTo(current() + 1); e.preventDefault(); }
    });

    var timer;
    track.addEventListener("scroll", function () {
      clearTimeout(timer);
      timer = setTimeout(update, 60);
    });
    update();

    // Click an image to see it full screen (click again or press Esc to close)
    track.querySelectorAll("img").forEach(function (img) {
      img.addEventListener("click", function () { openZoom(img); });
    });
  }

  var zoom;
  function openZoom(img) {
    if (!zoom) {
      zoom = document.createElement("dialog");
      zoom.className = "carousel-zoom";
      zoom.innerHTML = '<img alt="">';
      zoom.addEventListener("click", function () { zoom.close(); });
      document.body.appendChild(zoom);
    }
    var big = zoom.querySelector("img");
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    zoom.showModal();
  }

  function initAll() {
    document.querySelectorAll(".carousel").forEach(initCarousel);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(initAll);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
