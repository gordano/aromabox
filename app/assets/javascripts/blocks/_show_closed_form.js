/*
  Разметка:
    @@show_closed_form data-animation='blind' data-duration='1000'
      @hided_links
        a.button@trigger_closed_form href="#"
      @closed_form

*/

evil.block('@@show_closed_form', {
  init: function() {
    this.closed_form.hide();
    this.animation = this.block.data('animation');
    this.duration = this.block.data('duration');
  },

  'click on @trigger_closed_form': function(event) {
    event.preventDefault();

    this.hided_links.hide('blind', this.duration);
    this.closed_form.show(this.animation, this.duration);
  }
});