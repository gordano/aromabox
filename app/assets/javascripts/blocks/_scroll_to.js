/*
Разметка:
  @@scroll_to data-selector='@@tabs'
  Опционально: data-offset='90' data-duration='300'
*/

evil.block('@@scroll_to', {
  'on click': function(event) {
    event.preventDefault();

    var selector = this.block.data('selector');
    var target = $(selector);
    var open_tab = this.block.data('open-tab');

    var offset = this.block.data('offset') || 0;
    var duration = this.block.data('duration') || 300;

    if (open_tab) $(window).trigger('tabs:open', open_tab);

    $('html, body').animate({
      scrollTop: target.position().top - offset
    }, duration);
  }
});