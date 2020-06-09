//= require jquery.maskedinput

evil.block('@@phone_mask', {
  init: function() {
    this.block.mask('+7 (999) 999-99-99'),{
      placeholder:'+7 (999) 999-99-99'
    };
  }
});