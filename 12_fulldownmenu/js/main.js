$(function(){
    $("header").mouseenter(function(){
        $("header").stop().animate({'height': '400px'})
    })
    $("header").mouseleave(function(){
        $("header").stop().animate({'height': '80px'})
    })
    $("header").click(function(){

    })
})