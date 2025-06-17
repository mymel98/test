$(function(){
    $(".family1 button").click(function(){
        $(".family1 ul").toggle();
        $(".family2 ul").hide();
    })
    $(".family2 button").click(function(){
        $(".family2 ul").toggle();
        $(".family1 ul").hide();
    })
})