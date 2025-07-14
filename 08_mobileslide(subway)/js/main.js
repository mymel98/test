$(function(){
    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay:{
    delay:3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:'fraction', 
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
$('.banner_slide').slick({
  autoplay: true,
  slidesToShow: 2,
  // 좌우버튼 숨기기
  arrows: false,
  // 페이지버튼 보이기
  dots: true
});
// 모바일 메뉴 클릭하면
$(".m_gnb>ul>li>a" ).click(function(){
  $(".m_gnb>ul>li>a").removeClass("on")
  $(this).toggleClass("on")
  $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp()
})
// 햄버거 버튼을 클릭하면
$(".m_btn").click(function(){
  $(".cover").fadeIn()
  $(".m_side_wrap").animate({"left":0}, 300)
})
$(".m_close").click(function(){
  $(".m_side_wrap").animate({"left":'-100%'},300)
  $(".cover").fadeOut()
})
// 왼쪽 아이콘중에 li를 클릭하면 on클래스 
$("ul.left_icon li").click(function(){
  $("ul.left_icon li").removeClass('on')
  $("ul.right_icon li").removeClass('on')
  $(this).addClass("on")
})
$("ul.right_icon li").click(function(){
  $("ul.right_icon li").removeClass('on')
  $("ul.left_icon li").removeClass('on')
  $(this).addClass("on")
})
})
