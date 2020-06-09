/*

Разметка:

@@favourite
  @favourite_add@heart title="Добавить в избранное"
  .hidden@favourite_remove title="Удалить из избранного"

*/

evil.block('@@favorite', {
  'click on @favourite_add': function(e) {
    e.preventDefault();

    this.block.addClass('in-favorite');

    $(window).trigger('favorited', [this.block.data('id')]);
  },

  /*
    По завершении анимации сердцебиения нужно поменять элементы,
    Делаю после, т.к. иначе при наведении во время анимации меняется иконка, а это некрасиво
  */

  'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd on @favourite_add': function() {
    this.favourite_add.addClass('hidden');
    this.favourite_remove.removeClass('hidden');
  },

  'click on @favourite_remove': function(event) {
    event.preventDefault();

    this.block.removeClass('in-favorite');

    this.block.addClass('broken-heart');
  },

  'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd on @favourite_remove': function() {
    this.block.removeClass('broken-heart');
    this.favourite_remove.addClass('hidden');
    this.favourite_add.removeClass('hidden');
  },
});