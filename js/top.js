'use strict';
//ローディングアニメーション//
$(window).on('load', function () {
  $(".load-video").delay(3000).fadeOut('slow');
});

// ヘッダー切替
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".top").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("headerScroll");
    } else {
      $(".js-header").removeClass("headerScroll");
    }
  });
});

