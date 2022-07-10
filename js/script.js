$(document).ready(function() {
  // ドロワー
  $('.drawer').drawer();

  // スムーススクロール
    jQuery('a[href^="#"]').on('click' , function(){

      var header=jQuery(".header").innerHeight();
      var id = jQuery(this).attr('href');
      var position = 0;
      if ( id != '#') {
        position = jQuery(id).offset().top - header;
      }
      jQuery('html,body').animate({
        scrollTop: position
      },
      300);
    });

  // wow js
  new WOW().init();

  // google form
  let $form = $('#js-form')
  $form.submit(function(e) {
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function() {
          //送信に成功したときの処理
          $form.slideUp()
          $("#js-success").slideDown()
        },
        200: function() {
          //送信に失敗したときの処理
          $form.slideUp()
          $("#js-error").slideDown()
        }
      }
    });
    return false;
  });

  // formのボタン
  let $submit = $( '#js-submit')
  $( '#js-form input, #js-form textarea' ).on( 'change', function(){
    if(
      $( '#js-form input[type="text"]' ).val() !== "" &&
      $( '#js-form input[type="email"]' ).val() !== "" &&
      $( '#js-form input[name="entry.2084999334"]' ).prop( "checked" ) === true
    ) {
      // 全て入力されたとき
      $submit.prop( 'disabled', false )
      $submit.addClass( '-active' )
    } else {
      // 入力されていないとき
      $submit.prop( 'disabled', true )
      $submit.removeClass( '-active' )
    }
  })

  $(function(){
    $('#feature').each(function(i, elem){
        var contentsPOS = $(elem).offset().top;
        $(window).on('load scroll resize', function(){
            var winHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var showClass = 'show';
            var timing = 100; // 100pxコンテンツが見えたら次のif文がtrue
            if (scrollTop >= contentsPOS - winHeight + timing){
              $(elem).addClass(showClass);
            } else {
              $(elem).removeClass(showClass);
            }
        });
    });
  });
})