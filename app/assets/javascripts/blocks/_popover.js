//= require jquery.webui-popover

/*
  Разметка:
    .popover__container
      span.icon.icon_question@@popover data-placement='bottom'
      .webui-popover-content.question__popover
*/

evil.block('@@popover', {
  init: function() {
    this.block.webuiPopover({
      container: '.popover__container',
      closeable: 'true',
      width: '360',
      offsetTop: 3,
      offsetLeft: 1,
      animation: 'fade'
    });
  }
});