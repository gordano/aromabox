evil.block('@@scrollable', {
  init: function() {
    if (this.scrollable_item.length <= this.block.data('do-not-scroll-rows-max')) {
      this.scroll_up.hide();
      this.scroll_down.hide();
      return;
    }
    this.delta = this.scrollable_item.eq(0).outerHeight();
    this.update_arrows_styles();
  },

  'custom_scroll on @scrollable_container': function() {
    this.update_arrows_styles();
  },

  update_arrows_styles: function() {
    var styled_scroll_container = this.block.find('.mCSB_container');

    if (styled_scroll_container.length) {
      if (styled_scroll_container.css('top') === '0px') {
        this.scroll_up.removeClass('arrow__active');
      } else {
        this.scroll_up.addClass('arrow__active');
      }

      if (styled_scroll_container.css('top') === '-' + (this.delta * (this.scrollable_item.length - this.scrollable_container.height() / this.delta) - 1) + 'px') {
        this.scroll_down.removeClass('arrow__active');
      } else {
        this.scroll_down.addClass('arrow__active');
      }
    } else {
      if (this.scrollable_container.scrollTop() === 0) {
        this.scroll_up.removeClass('arrow__active');
      } else {
        this.scroll_up.addClass('arrow__active');
      }

      if (this.scrollable_container.scrollTop() === this.delta * (this.scrollable_item.length - this.scrollable_container.height() / this.delta)) {
        this.scroll_down.removeClass('arrow__active');
      } else {
        this.scroll_down.addClass('arrow__active');
      }
    }
  },

  'click on @scroll_up': function() {
    var styled_scroll_container = this.block.find('.mCSB_container');
    var scrolled = Math.abs(parseInt(styled_scroll_container.css('top'), 10)) % this.delta;

    if (styled_scroll_container.length) {
      if (scrolled === 0) {
        this.scrollable_container.mCustomScrollbar("scrollTo", '+=' + this.delta);
      } else if (scrolled <= 25) {
        this.scrollable_container.mCustomScrollbar("scrollTo", '+=' + (scrolled + this.delta));
      } else {
        this.scrollable_container.mCustomScrollbar("scrollTo", '+=' + scrolled);
      }
    }
    else {
      this.scrollable_container.stop().animate({
        scrollTop: this.scrollable_container.scrollTop() - this.delta
      }, 280, $.proxy(this.update_arrows_styles, this));
    }
  },

  'click on @scroll_down': function() {
    var styled_scroll_container = this.block.find('.mCSB_container');
    var scrolled = this.delta - (Math.abs(parseInt(styled_scroll_container.css('top'), 10)) % this.delta);

    if (styled_scroll_container.length) {
      if (scrolled === 0) {
        this.scrollable_container.mCustomScrollbar("scrollTo", '-=' + this.delta);
      } else if (scrolled <= 25) {
        this.scrollable_container.mCustomScrollbar("scrollTo", '-=' + (scrolled + this.delta));
      } else {
        this.scrollable_container.mCustomScrollbar("scrollTo", '-=' + scrolled);
      }
    }
    else {
      this.scrollable_container.stop().animate({
        scrollTop: this.scrollable_container.scrollTop() + this.delta
      }, 280, $.proxy(this.update_arrows_styles, this));
    }
  }
});