//= require sticky-kit


evil.block('@@sticky_block', {
  init: function() {
    this.$window = $(window);
    this.parent = this.block.data('parent');
    this.offset_top = this.block.data('offset-top');

    this.block.stick_in_parent({
      'parent': this.parent,
      'offset_top': this.offset_top
    });
  }
});
