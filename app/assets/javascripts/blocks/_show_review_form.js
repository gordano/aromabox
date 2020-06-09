/*
Разметка Отзывы для наборов:
  section#tab3.tabcontent@tab@@show_review_form
    .reviews@reviews
      .button@review_set_form_open Оставить отзыв
      .reviews-reply
        .reviews-reply__suggestion@hide_for_review
        .reviews-reply-form@review_reply_form
          .button@review_set_form_close Отменить

Разметка Отзывы для пробников:
  section#tab3.tabcontent@tab@@show_review_form
    .reviews@reviews
      .button@review_sample_form_open Оставить отзыв
      .reviews-reply
        .reviews-reply__suggestion@hide_for_review
    .reviews-reply-form@review_reply_form
      .button@review_sample_form_close Отменить
*/

evil.block('@@show_review_form', {
  init: function() {
    this.review_reply_form.hide();
  },

  'click on @review_sample_form_open': function(event) {
    event.preventDefault();

    this.reviews.hide('fade');
    this.review_reply_form.show('fade', 1000);
  },

  'click on @review_set_form_open': function(event) {
    event.preventDefault();

    this.hide_for_review.hide('fade');
    this.review_reply_form.show('fade', 500);
  },

  'click on @review_sample_form_close': function(event) {
    event.preventDefault();

    this.reviews.show('fade');
    this.review_reply_form.hide('fade', 1000);
  },

  'click on @review_set_form_close': function(event) {
    event.preventDefault();

    this.hide_for_review.show('fade');
    this.review_reply_form.hide('fade', 400);
  }

});