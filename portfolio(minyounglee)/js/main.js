gsap.registerPlugin(ScrollTrigger);
let header = document.querySelector("header")
console.log(header)
let mbtn = document.querySelector(".m_btn")
console.log(mbtn)
mbtn.addEventListener("click", function(){
    header.classList.toggle("on")
})
// 스크롤바 이벤트에 따라서 헤더 숨기고 보이게함
$(function(){
    // 스크롤바 움직이는 이벤트
    let preNum = 0
    document.addEventListener("scroll", function(){
        let nowNum = $(window).scrollTop()
        console.log(nowNum)
        if(nowNum > preNum){
            $("header").addClass('move')
        }else{
            $("header").removeClass('move')
        }
        preNum = nowNum
    })
})

// scrollar 함수 호출
$(".animate").scrolla({
    // 모바일에서 적용
    mobile: false,
    // 스크롤바가 해당 클라스에 오면 재실행
    once: false
})


