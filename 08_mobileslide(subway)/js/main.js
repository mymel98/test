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
  
  // $(this).parent().siblings().find('a_on').removeClass('on');
  // $(this).toggleClass('on')
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
// 쿠키정보를 확인해서 쿠키정보가 있다 숨김
// 쿠키정보에 아무런 데이터가 저장되어 있지 않음 보여줌
if(GetCookie('subway')=='today'){
  $('.popup').hide()
}else{
  $('popup').show()
}

// 팝업창 스크립트
// GetCookie
$("#today_close, .popup .close label").click(function(){
  // set cookie 함수 호출
  if($('#today_close').is(':checked')){
    setCookie('subway', 'today', 1)
    $(".popup").hide()
  }else{
    $('.popup').hide()

  }
})
// 닫기 버튼 누르면 팝업창 숨김
$('.popup .close .txt_btn').click(function(){
  $('.popup').hide()
})
// 쿠키 서버웹사이트가 사용자의 브라우저에다가 저장하는 작은 정보
			function GetCookie(name){
				var value=null, search=name+"=";
				if(document.cookie.length > 0){
					var offset=document.cookie.indexOf(search);
					if(offset != -1){
						offset+=search.length;
						var end=document.cookie.indexOf(";", offset);
						if(end == -1) end=document.cookie.length;
						value=unescape(document.cookie.substring(offset, end));
					}
				} return value;
			}
			// SetCookie
      // 쿠키 정보를 만듬
			function setCookie(name, value, expiredays){
				var days=10;
				if(days){
					var date=new Date(); 
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires="; expires="+date.toGMTString();
				}else{
					var expires=""; 
				}
				document.cookie=name+"="+value+expires+"; path=/";
			}
})
