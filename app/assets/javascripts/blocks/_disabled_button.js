

evil.block('@@disabled_button', {
  'on click': function() {
    this.block.attr('disabled', 'disabled');
    var hint = this.block.data('disable-with');
    var text = this.block.text();
    if (hint) this.block.text(hint);

    // TODO:  переделать, когда появится бэкенд
    var self = this
    setTimeout(
      function() {
        self.block.text(text);
        self.block.removeAttr('disabled');
        self.block.trigger('request_finished');
      }, 1000
    );
  }
});