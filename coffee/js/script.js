$(function(){
    $('.btn_close').click(function(){
        $('.popup').slideUp();
    })
})

$(function(){
    $('.gnb>li>a').mouseenter(function(){
        $('header').stop().animate({'height':'370px'}, 300)
        $('.depth2').stop().fadeIn(300);
    })
    $('header').mouseleave(function(){
        $('header').stop().animate({'height':'103px'}, 300)
        $('.depth2').stop().fadeOut(300);
    })
})
// main slide
$(document).ready(function(){
  $('.slide').slick({
    autoplay: true,
    dots: true
  });
});