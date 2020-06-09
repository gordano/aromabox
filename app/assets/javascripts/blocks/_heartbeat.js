evil.block('@@heartbeat', {
  init: function() {
    this.id = this.block.data('id');
  },

  'favorited on window': function(event, id) {
    if (this.id === id || !this.id) {
      this.block.addClass('heartbeat');
    }
  },

  'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd on @heart': function() {
    this.block.removeClass('heartbeat');
  }
});

