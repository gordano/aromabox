//= require jquery.flipster

evil.block('@@carousel_3d', {
  init: function() {
    this.block.flipster({
      style: 'infinite-carousel',
      start: 0,
      spacing: -0.5,
      buttons: true,
      scrollwheel: false,
      loop: 1
    });
  }
});