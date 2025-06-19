$(function(){
    const swiper = new Swiper('.swiper', {
  // Optional parameters
 //   direction: 'vertical',
 //    direction: 'horizontal',
  effect:'fade',
  loop: true,
  autoplay:{
    delay:3000,
},

  // If we need pagination
 pagination: {
    el: '.swiper-pagination',
    // 페이지버튼을 클릭했을때 해당 슬라이드로 갈때
    clickable:true,
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