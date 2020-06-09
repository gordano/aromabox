/*
Разметка:

@@slider_range data-min="0" data-max="3260"
  @slider_range
*/


evil.block('@@slider_range', {
  init: function() {
    this.min = this.block.data('min');
    this.max = this.block.data('max');
    this.initial_values = [this.min, this.max];

    this.slider_range.slider({
      range: true,
      step: 50,
      min: this.min,
      max: this.max,
      values: this.initial_values,
      slide: $.proxy(this.slide, this),
      create: $.proxy(this.create, this)
    });
  },

  create: function() {
    var value_1 = $('<span class="value value__first">' + this.initial_values[0] + ' p.' + '</span>');
    this.block.find('.ui-slider-handle').first().after(value_1).data('value', value_1);

    var value_2 = $('<span class="value value__last">' + this.initial_values[1] + ' p.' + '</span>');
    this.block.find('.ui-slider-handle').last().after(value_2).data('value', value_2);
  },

  slide: function(event, ui) {
    $(ui.handle)
      .addClass('changed')
      .data('value')
        .text(ui.value + ' p.');
  }
});