//= require slick

evil.block('@@carousel_flat', {
  init: function() {
    this.slidesToShow = this.block.data('slides-to-show');
    this.slidesToScroll = this.block.data('slides-to-scroll');
    if (this.block.data('initial-slide') > 0) {
      this.initialSlide = this.block.data('initial-slide');
    } else {
      this.initialSlide = 0;
    }

    this.block.slick({
      dots: true,
      infinite: true,
      prevArrow: '<button type="button" class="icon icon_arrow_thin slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="icon icon_arrow_thin slick-next">Next</button>',
      speed: 300,
      slidesToShow: this.slidesToShow,
      slidesToScroll: this.slidesToScroll,
      initialSlide: this.initialSlide
    });
  }
});