/* На данный момент все изменения (визуализация) зависит только от времени анимации,
а нужно, чтобы визуально изменения происходили после того, как у кнопки пропадет атрибут disabled

  Разметка:

    .my-subscription__item@@subscribe_toggler data-active='false' class='my-subscription__item__inactive'

      .inactive@subscribe_inactive
        button.button@activating_button data-remote='true' data-disable='true' data-disable-with="Подписываем" Подписаться
        span.item__status Неактивна

      .active@subscribe_active
        button.button@cansel_button data-remote='true' data-disable='true' data-disable-with="Отписываем" Отписаться
        span.item__status Активна
*/

evil.block('@@subscribe_toggler', {
  init: function() {
    this.active = this.block.data('active');

    if (this.active) {
      this.block.addClass('my-subscription__item__active');
      this.subscribe_inactive.hide();
      this.subscribe_active.show();
    } else {
      this.block.addClass('my-subscription__item__inactive');
      this.subscribe_inactive.show();
      this.subscribe_active.hide();
    }
  },

  'request_finished on @activating_button': function() {
    this.subscribe_active.show();
    this.subscribe_inactive.hide();
    this.block.removeClass('my-subscription__item__inactive').addClass('my-subscription__item__active').attr('data-active', true);
    this.active = true;
  },

  'request_finished on @cansel_button': function() {
    this.subscribe_inactive.show();
    this.subscribe_active.hide();
    this.block.removeClass('my-subscription__item__active').addClass('my-subscription__item__inactive').attr('data-active', false);
    this.active = false;
  }
});