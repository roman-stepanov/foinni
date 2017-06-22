'use strict';

jQuery(document).ready(function(){
  var pageHeader = $('.page-header');
  var mainNavigation = $('.main-nav');
  var footerNavigation = $('.page-footer__list-links--page-nav');

  var portfolioFilter = $('#portfolio-filter');
  var portfolioActiveFilter = portfolioFilter.find('.portfolio__filter-link--active');
  var portfolioGrid = $('#portfolio-grid');

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

  var updatePortfolioGrid = function() {
    portfolioGrid.animate(
      {opacity: 0}, 500,
      function() {
        portfolioGrid.animate(
          {opacity: 1}, 500
        );
      }
    );
  };

  var onClickNavigation = function(evt) {
    evt.preventDefault();
    var target = $(this.hash);
    $('body, html').animate({'scrollTop': target.offset().top - pageHeader.outerHeight() + 2}, 600);
  };

  var onClickPortfolioFilter = function(evt) {
    evt.preventDefault();
    var target = $(this);

    portfolioActiveFilter.removeClass('portfolio__filter-link--active');
    target.addClass('portfolio__filter-link--active');
    portfolioActiveFilter = target;

    updatePortfolioGrid();
  };

  $(window).on('scroll', function(){
    updateMainNavigation();
  });

  mainNavigation.find('a').on('click', onClickNavigation);
  footerNavigation.find('a').on('click', onClickNavigation);
  portfolioFilter.find('a').on('click', onClickPortfolioFilter);
});
