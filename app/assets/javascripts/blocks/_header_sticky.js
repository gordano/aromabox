/*
  Разметка:
    header.header.header__base.header__fixed@@header_sticky
      .header__container
        .wrapper
          .header__content

    header.header.header__base
      .header__container
        .wrapper
          .header__content


    1) .header__fixed полностью дублирует .header__base,
    только скрывается за пределами браузера и появляется
    при скролле на определенное число пикселей.
    2) Отличается изображением логотипа и высотой
*/

evil.block('@@header_sticky', {
  init: function() {
    this.$window = $(window);

    this.fixed = false;
  },

  'scroll on window': function() {
    if (!this.$window) return;

    if (this.$window.scrollTop() > 180) {
      if (!this.fixed) {
        this.block.addClass("header__sticky");
        this.fixed = true;
      }
    }
    else {
      if (this.fixed) {
        this.block.removeClass("header__sticky");
        this.fixed = false;
      }
    }
  }
});

