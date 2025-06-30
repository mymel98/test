$(function () {
    $('.list').slick({
        autoplay: true,
        // 한화면에 보일 개수
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // 페이지버튼 보이기
        dots: true,
    });
    // 일시정지버튼을 누르면 플레이버튼으로 바뀌고, 플레이버튼을 누르면 다시 재생버튼
    $(".btn_pause").click(function () {
        $(".btn_pause").toggleClass("on");
    })
    // addClass(프로그램 자동실행), removeClass(프로그램 자동삭제)
    let sw = true;
    $(".btn_pause").click(function () {
        if (sw == true) {
            $(".btn_pause").addClass("on");
            $(".list").slick("slickPause");
            sw = false;
        } else {
            $(".btn_pause").removeClass("on");
            $(".list").slick("slickPlay");
            sw = true;
        }
    })
})