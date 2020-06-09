/*
Разметка:

.ordering__info
  ul@@faq
    li
      a href="#"
      p Text
*/


evil.block('@@faq', {
  init: function() {
    this.block.accordion({
      collapsible: true,
      active: false,
      icons: false,
      heightStyle: 'content'
    });
  }
});