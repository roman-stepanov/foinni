'use strict';

jQuery(document).ready(function($){
  var navigation = $('.main-nav');
  var contentSections = $('.content-section');

  var updateNavigation = function() {
    contentSections.each(function(){
      var actual = $(this);
      var actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', ''));
      var actualAnchor = navigation.find('a[href="#' + actual.attr('id') + '"]');

      if (( actual.offset().top <= $(window).scrollTop() ) && ( actual.offset().top + actualHeight > $(window).scrollTop() )) {
        actualAnchor.parent().addClass('main-nav__item--active');
      } else {
        actualAnchor.parent().removeClass('main-nav__item--active');
      }
    });
  };

  $(window).on('scroll', function(){
    updateNavigation();
  });

  navigation.find('a').on('click', function(evt) {
    evt.preventDefault();
    var target = $(this.hash);
    $('body,html').animate(
      {'scrollTop': target.offset().top}, 400
    );
  });
});
