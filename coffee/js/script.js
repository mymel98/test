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

$(document).ready(function(){
  $('.bannerslide').slick({
    autoplay: true,
    arrows: false,
    dots: true
  });
});

// 탭기능
$(".tab li").click(function(e){
  e.preventDefault()
  $(".tab li").removeClass("on");
  $(this).addClass("on")
})

// list 박스 선택하면 on class 추가/삭제
$(".content ul.list li").click(function(e){
  e.preventDefault()
  $(".content ul.list li").removeClass("on")
  $(this).addClass("on")
})