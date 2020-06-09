/*
  Разметка:
    div@@modal@modal_login
    div@@modal@modal_registration

    div@modal_overlay

*/

evil.block('@@modal', {
  init: function() {
    $('@modal_overlay').click($.proxy(this.close, this));
    this.shown = false;
  },

  'keyup on window': function(event) {
    if (event.keyCode === 27) {
      this.close(event);
    }
  },

  'click on @close_link': function(event) {
    this.close(event);
  },

  'close': function(event){
    event.preventDefault();

    if (this.shown) {
      this.shown = false;
      this.block.removeClass('modal__show');
      $('body').css('overflow', 'auto');
    }
  },

  'on show': function() {
    this.shown = true;
    this.block.addClass('modal__show');
    $('body').css('overflow', 'hidden');
  }
});