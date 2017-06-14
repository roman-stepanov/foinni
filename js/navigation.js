'use strict';

jQuery(document).ready(function($){
  var pageHeader = $('.page-header');
  var mainNavigation = $('.main-nav');
  var footerNavigation = $('.page-footer__list-links--page-nav');

  var updateMainNavigation = function() {
    mainNavigation.find('a').each(function() {
      var link = $(this);
      var target = $(this.hash);
      var scrollTop = $(window).scrollTop();

      if ((target.offset().top - pageHeader.outerHeight() <= scrollTop) && (target.offset().top + target.outerHeight() - pageHeader.outerHeight() > scrollTop)) {
        link.parent().addClass('main-nav__item--active');
      } else {
        link.parent().removeClass('main-nav__item--active');
      }
    });
  };

  var onClickNavigation = function(evt) {
    evt.preventDefault();
    var target = $(this.hash);
    $('body, html').animate({'scrollTop': target.offset().top - pageHeader.outerHeight() + 2}, 600);
  };

  $(window).on('scroll', function(){
    updateMainNavigation();
  });

  mainNavigation.find('a').on('click', onClickNavigation);
  footerNavigation.find('a').on('click', onClickNavigation);
});
