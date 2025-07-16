$(function(){
    $(".gnb>li").mouseenter(function(){
        $(this).find(".depth2").stop().fadeIn(1000)
    })
    $(".gnb>li").mouseleave(function(){
        $(this).find(".depth2").stop().fadeOut(1000)
    })

    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:true,

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
})

$(function(){
  $(".content ul.list li").mouseenter(function(){
    let num = $(this).find("img").attr('src')
    console.log(num)
    let num2 = num.replace('_ot', '_ov')
    console.log(num2)

    $(this).find('img').attr('src',num2)
    
  })
  $(".content ul.list li").mouseleave(function(){
    let num = $(this).find("img").attr('src')
    console.log(num)
    let num2 = num.replace('_ov', '_ot')
    console.log(num2)

    $(this).find('img').attr('src',num2)
  })
})

$(function(){
  $('.btn_family').click(function(){
    $(".family_box .list").slideToggle()
    $(this).toggleClass("on")
  })
})

// 창의 크기를 조절하는 이벤트가 발생하면 슬라이드 안에 있는 pc버전 이미지 파일을 모바일버전의 이미지로 교체
$(window).resize(function(){
  let num = $(this).width()
  console.log('창의 사이즈', num)
  if(num<=767){
    $(".swiper .swiper-wrapper .slide1 a img").attr('src', './images/m_visual_a.jpg')
    $(".swiper .swiper-wrapper .slide2 a img").attr('src', './images/m_visual_b.jpg')
    $(".content .list li:nth-child(1) a img").attr('src', './images/m_catalogue.jpg')
    $(".content .list li:nth-child(2) a img").attr('src', './images/m_video.jpg')
    $(".content .list li:nth-child(3) a img").attr('src', './images/m_product.jpg')
    $(".content .list li:nth-child(4) a img").attr('src', './images/m_athletic.jpg')
    $(".content .list li:nth-child(5) a img").attr('src', './images/m_camping.jpg')
  }else{
    $(".swiper .swiper-wrapper .slide1 a img").attr('src', './images/visual_a.jpg')
    $(".swiper .swiper-wrapper .slide2 a img").attr('src', './images/visual_b.jpg')
    $(".content .list li:nth-child(1) a img").attr('src', './images/cata_ot.jpg')
    $(".content .list li:nth-child(2) a img").attr('src', './images/video_ot.jpg')
    $(".content .list li:nth-child(3) a img").attr('src', './images/product_ot.jpg')
    $(".content .list li:nth-child(4) a img").attr('src', './images/athletic_ot.jpg')
    $(".content .list li:nth-child(5) a img").attr('src', './images/camping_ot.jpg')
  }
  
})

// 창 크기 조절하는 이벤트 없이 반응형
 let num = $(this).width()
  console.log('창의 사이즈', num)
  if(num<=767){
    $(".swiper .swiper-wrapper .slide1 a img").attr('src', './images/m_visual_a.jpg')
    $(".swiper .swiper-wrapper .slide2 a img").attr('src', './images/m_visual_b.jpg')
    $(".content .list li:nth-child(1) a img").attr('src', './images/m_catalogue.jpg')
    $(".content .list li:nth-child(2) a img").attr('src', './images/m_video.jpg')
    $(".content .list li:nth-child(3) a img").attr('src', './images/m_product.jpg')
    $(".content .list li:nth-child(4) a img").attr('src', './images/m_athletic.jpg')
    $(".content .list li:nth-child(5) a img").attr('src', './images/m_camping.jpg')
  }else{
    $(".swiper .swiper-wrapper .slide1 a img").attr('src', './images/visual_a.jpg')
    $(".swiper .swiper-wrapper .slide2 a img").attr('src', './images/visual_b.jpg')
    $(".content .list li:nth-child(1) a img").attr('src', './images/cata_ot.jpg')
    $(".content .list li:nth-child(2) a img").attr('src', './images/video_ot.jpg')
    $(".content .list li:nth-child(3) a img").attr('src', './images/product_ot.jpg')
    $(".content .list li:nth-child(4) a img").attr('src', './images/athletic_ot.jpg')
    $(".content .list li:nth-child(5) a img").attr('src', './images/camping_ot.jpg')
  }

$(function(){
  $(".m_btn").click(function(){
    $('.cover').fadeIn();
    $('.m_menu_wrap').addClass('on')
    $('body, html').css({'overflow':"hidden"})
    $('.m_menu_wrap').css({'overflow':"auto"})
  })
  $(".cover").click(function(){
    $('.m_menu_wrap').removeClass('on')
    $('.cover').fadeOut();
    $('body,html').css({'overflow':"auto"})
  })
})

$(".depth2").hide()

$(function(){
  $(".m_menu_wrap ul.m_gnb>li>a").click(function(){
    $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
  })
})
