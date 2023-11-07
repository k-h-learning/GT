'use strict';



// フェード
function fadeIn() {
  $('.fadeInTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });

  $('.fadeUpTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });

  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });

  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });

  $('.ttl_2').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('spin');
    } else {
      $(this).removeClass('spin');
    }
  });
}
$(window).scroll(function () {
  fadeIn();
});

// ハンバーガーメニュー
$(function () {
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  $(".header-wrap__nav__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
}); 


// 回転アニメーション
