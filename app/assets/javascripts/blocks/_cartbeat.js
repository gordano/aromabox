evil.block('@@cartbeat', {
  'request_finished on @add_to_cart': function(event) {
    event.preventDefault();

    this.cart.addClass('cartbeat');
  },

  'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd on @cart': function() {
    this.cart.removeClass('cartbeat');
  }
});
