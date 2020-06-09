//= require jquery.webui-popover

/*
  Разметка:
    .popover__container@@popover_just_bought data-animation='fade' data-placement='bottom' data-offset-top='-125'
    .webui-popover-content
*/

evil.block('@@popover_just_bought', {
  init: function() {
    this.block.webuiPopover({
      container: '.popover__container',
      closeable: true,
      width: '330',
      arrow: false,
      style: 'justbought',
      autoHide: 7000
    });

    WebuiPopovers.show(this.block);
  }
});