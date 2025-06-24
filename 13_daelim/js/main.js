$(function(){
    $(".gnb").mouseenter(function(){
        $(".header_wrap").stop().animate({'height':320},200);
        $(".depth2").show();
    })

    $(".header_wrap").mouseleave(function(){
        $(".header_wrap").stop().animate({'height':70},200);
        $(".depth2").hide();
    })
})