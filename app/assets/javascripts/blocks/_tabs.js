/*
Разметка:

@@tabs
  ul
    li
      a@tab_toggler href="#tab1"
    li
      a@tab_toggler href="#tab2"

  section#tab1@tab style="display: block;"
  section#tab2@tab

*/

evil.block('@@tabs', {
  init: function() {
    var hash = window.location.hash;
    if (hash[0] !== '#') hash = '#' + hash;
    this.tab_toggler.filter('[href="' + hash + '"]').trigger('click');
  },

  'click on @tab_toggler': function(event) {
    event.preventDefault();

    this.tab_toggler.removeClass('active');
    var clicked_tab_toggler = $(event.currentTarget);
    clicked_tab_toggler.addClass('active');

    var href = clicked_tab_toggler.attr('href');
    this.tab.hide();
    this.tab.filter(href).show();

    history.pushState({}, document.title, href);
  },

  'tabs:open on window': function(event, hash) {
    this.tab_toggler.filter('[href="' + hash + '"]').trigger('click');
  }
});
