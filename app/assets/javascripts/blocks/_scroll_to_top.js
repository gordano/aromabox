/*

Разметка:

= render 'layouts/footer/footer'

После футера (в конец документа)

.scroll__top.hide@@scroll_to_top
  Опционально:  @data-breakpoint='800' @data-duration='1000'

*/


evil.block('@@scroll_to_top', {
  init: function() {
    this.$window = $(window);
    this.breakpoint = this.block.data('breakpoint') || 1000;
    this.duration = this.block.data('duration') || 800;
  },

  'scroll on window': function() {

    if (this.$window.scrollTop() > this.breakpoint) {
      this.block.addClass('show');
      this.block.removeClass('hide');
    }
    else {
      this.block.addClass('hide');
      this.block.removeClass('show');
    }
  },

  'on click': function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, this.duration);
  }
});