/*
  Разметка:
    a@@modal_toggler data-modal-selector="@modal_quick_view"
      | Toggle quick view

    a@@modal_toggler data-modal-selector="@modal_about_yourself"
      | Toggle about yourself
*/
evil.block('@@modal_toggler', {
  'on click': function(event) {
    event.preventDefault();

    $('@@modal' + this.block.data('modal-selector'))
      .trigger('show');
  }
});