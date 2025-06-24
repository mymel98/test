$(function(){
    $("ul.gnb").mouseenter(function(){
        $("#header_wrap").stop().animate({"height":380},500);
        $(".depth2").show();
        $("#header_wrap").css({'border-bottom': '1px solid #c4c4c4'});
    })
    $("#header_wrap").mouseleave(function(){
        $("#header_wrap").stop().animate({"height":110},500);
        $(".depth2").hide();
        $("#header_wrap").css({'border-bottom': 'none'});
    })
})