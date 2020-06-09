/*
Разметка:

.brand__description@@read_more data-duration='800'
  p text
  span@more
    p text
  .read-more@show_more_toggler
  .read-more@hide_more_toggler
*/


evil.block('@@read_more', {
  init: function() {
    this.duration = this.block.data('duration');
    this.more.hide();
    this.hide_more_toggler.hide();
  },

  'click on @show_more_toggler': function(event) {
    event.preventDefault();

    this.more.show('blind', this.duration);
    this.show_more_toggler.hide();
    this.hide_more_toggler.show();
  },

  'click on @hide_more_toggler': function(event) {
    event.preventDefault();

    this.more.hide('blind', this.duration);
    this.show_more_toggler.show();
    this.hide_more_toggler.hide();
  }
});