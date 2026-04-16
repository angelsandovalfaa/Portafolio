/* =========================================================
   PRELOADER
   Muestra el preloader solo en la primera visita de la sesión.
   ========================================================= */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.querySelector('.preloader');
    if (!preloader) {
      return;
    }

    var visited = sessionStorage.getItem('visited');

    if (!visited) {
      preloader.classList.remove('hide');
      window.addEventListener('load', function () {
        setTimeout(function () {
          preloader.classList.add('hide');
          sessionStorage.setItem('visited', 'true');
        }, 3800);
      });
    } else {
      preloader.classList.add('hide');
    }
  });
})();
