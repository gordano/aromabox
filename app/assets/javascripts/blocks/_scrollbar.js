//= require jquery.mCustomScrollbar

evil.block('@@scrollbar', {
  init: function() {
    this.block.mCustomScrollbar({
      theme: 'dark-thin',
      callbacks: {
        onScroll: $.proxy(this.trigger_scroll, this)
      }
    });
  },

  trigger_scroll: function() {
    this.block.trigger('custom_scroll');
  }
});