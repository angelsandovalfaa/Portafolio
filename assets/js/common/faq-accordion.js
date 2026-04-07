/* =========================================================
   FAQ ACCORDION
   Controla el comportamiento abrir/cerrar de bloques FAQ.
   Requiere jQuery (ya lo carga Webflow en el HTML).
   ========================================================= */
(function () {
  if (typeof window.jQuery === 'undefined') {
    return;
  }

  window.jQuery(document)
    .off('click.faq', '[data-click="faq"]')
    .on('click.faq', '[data-click="faq"]', function () {
      var $current = window.jQuery(this);
      window.jQuery('[data-click="faq"].open').not($current).removeClass('open');
      $current.toggleClass('open');
    });

  // No abrir ningún item por defecto.
  window.jQuery('[data-click="faq"]').removeClass('open');
})();
