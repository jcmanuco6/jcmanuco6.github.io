/* Workflow Process Stepper
   - "Details +" toggles one card open/closed (accordion).
   - "Pause / Play animation" toggles the travelling dots on the connectors.
   Works with or without MkDocs Material's instant navigation. */
(function () {
  "use strict";

  function initStepper(root) {
    if (root.dataset.wfReady) return;          // never bind twice
    root.dataset.wfReady = "true";

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var playBtn = root.querySelector(".wf-play");
    var steps = root.querySelectorAll(".wf-step");
    var single = root.dataset.single === "true"; // optional: only one card open at a time

    // Stagger the connector animation per step (used by CSS via var(--i)).
    steps.forEach(function (step, i) { step.style.setProperty("--i", i); });

    // ---- Accordion toggles ----
    root.querySelectorAll(".wf-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var step = btn.closest(".wf-step");
        var opening = !step.classList.contains("is-open");

        if (single && opening) {
          steps.forEach(function (s) { if (s !== step) setOpen(s, false); });
        }
        setOpen(step, opening);
      });
    });

    function setOpen(step, open) {
      var btn = step.querySelector(".wf-toggle");
      var panel = step.querySelector(".wf-card__panel");
      step.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      panel.setAttribute("aria-hidden", String(!open));
      btn.querySelector(".wf-toggle__label").textContent = open ? "Hide" : "Details";
    }

    // ---- Play / pause the connector animation ----
    function setPlaying(on) {
      root.classList.toggle("is-playing", on);
      if (playBtn) {
        playBtn.setAttribute("aria-pressed", String(on));
        playBtn.textContent = on ? "Pause animation" : "Play animation";
      }
    }

    setPlaying(!reduceMotion);                 // auto-play unless the user prefers less motion
    if (playBtn) {
      playBtn.addEventListener("click", function () {
        setPlaying(!root.classList.contains("is-playing"));
      });
    }
  }

  function initAll() {
    document.querySelectorAll(".wf-stepper").forEach(initStepper);
  }

  // MkDocs Material (navigation.instant) re-renders pages without a reload.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(initAll);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
