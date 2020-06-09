//= require clipboard

evil.block('@@clipboard', {
  init: function() {
    var clipboard = new Clipboard(
      this.button[0]
    );

    this.text_was = this.button.text();
  },

  'click on @button': function() {
    this.show_copied_message();
  },

  show_copied_message: function() {
    this.button.text('Скопировано');

    clearTimeout(this.timeout_id);
    this.timeout_id = setTimeout($.proxy(this.hide_copied_message, this), 3000);
  },

  hide_copied_message: function() {
    this.button.text(this.text_was);
  }
});