/* =========================================================
   FAQ ACCORDION
   Controla el comportamiento abrir/cerrar de bloques FAQ.
   Requiere jQuery (ya lo carga Webflow en el HTML).
   ========================================================= */
(function () {
  if (typeof window.jQuery === 'undefined') {
    return;
  }

  window.jQuery('[data-click="faq"]').off('click.faq').on('click.faq', function () {
    var $current = window.jQuery(this);

    if (!$current.is('.open')) {
      window.jQuery('[data-click="faq"].open').each(function (_idx, item) {
        item.click();
      });
      $current.addClass('open');
    } else {
      $current.removeClass('open');
    }
  });
})();
