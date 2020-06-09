evil.block('@@search', {

  'click on @search_trigger': function(event) {
    event.stopPropagation();
    this.search_open.toggleClass('open');
  },

  'click on body': function() {
    this.search_open.removeClass('open');
  }
});

