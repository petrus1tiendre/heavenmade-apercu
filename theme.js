/* Applique le choix jour / nuit avant le premier rendu (aucun flash). */
(function () {
  try {
    var t = localStorage.getItem("hm-theme");
    if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
  } catch (e) { /* stockage indisponible : réglage du système */ }
})();
