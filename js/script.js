$(document).ready(function () {
  // ドロワー
  $('.drawer').drawer();

  // スムーススクロール
  jQuery('a[href^="#"]').on('click', function () {
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if (id != '#') {
      position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate(
      {
        scrollTop: position,
      },
      300
    );
  });

  // wow js
  new WOW().init();

  $(function () {
    $('#feature').each(function (i, elem) {
      var contentsPOS = $(elem).offset().top;
      $(window).on('load scroll resize', function () {
        var winHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var showClass = 'show';
        var timing = 200; // 250pxコンテンツが見えたら次のif文がtrue
        if (scrollTop >= contentsPOS - winHeight + timing) {
          $(elem).addClass(showClass);
        } else {
          $(elem).removeClass(showClass);
        }
      });
    });
  });
});
