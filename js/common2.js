'use strict';

// ヘッダー切替
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".top").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("headerScrollTab");
    } else {
      $(".js-header").removeClass("headerScrollTab");
    }
  });
});