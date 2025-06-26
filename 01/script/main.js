$(function(){
    $('.slide').slick({
        autoplay:true,
        // 좌우버튼 안보이게
        arrows:false,
        // 속도
        autoplaySpeed:5000,
        // 페이드 효과
        // fade:true,
        // 상하슬라이드
        vertical: true
    })
    // 공지사항의 첫번째 이벤트를 클릭하면 팝업창 보이게 하기
    $(".notice ul li:first-child a").click(function(){
        $(".cover").show();
        $(".popup").show();
    })
    // 닫기버튼을 클릭하면 팝업창 닫기
    $(".btn_close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    })
    // 버튼을 클릭하면 리스트박스 보이기 숨기기 반복(toggle)
    $(".fm").click(function(){
        $(".family ul").toggle()
    })
    // gnb에다가 마우스를 올리면 2단전체메뉴가 나오고 마우스를 벗어나면 2단전체메뉴가 안보이게
    $(".gnb").mouseenter(function(){
        $(".depth2, .gnbbg").show()
    })
    $(".gnb").mouseleave(function(){
        $(".depth2, .gnbbg").hide()
    })

});