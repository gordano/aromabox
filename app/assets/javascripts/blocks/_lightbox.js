//= require lightbox

evil.block('@@lightbox', {
  init: function() {
    lightbox.option({
      albumLabel: 'Изображение %1 из %2'
    });
  }
});