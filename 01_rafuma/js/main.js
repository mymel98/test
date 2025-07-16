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
