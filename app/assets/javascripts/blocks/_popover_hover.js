//= require jquery.webui-popover

/*
  Разметка:
    .popover__container
      @@popover data-width='200' data-height='130' data-placement='left' data-offset-left='-10'
      .webui-popover-content
*/

evil.block('@@popover_hover', {
  init: function() {
    this.block.webuiPopover({
      container: '.popover__container',
      trigger: 'hover',
      closeable: false,
      padding: false,
      animation: 'fade'
    });
  }
});