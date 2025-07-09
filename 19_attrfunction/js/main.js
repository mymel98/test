$(function(){
    // li a에 마우스를 hover할때
    $(".box ul li").mouseenter(function(){
        let num = $(this).index()
        console.log(num)
        let url = $(this).find('img').attr('src')
        console.log(url)

        // url을 big박스에 넣어줌
        $(".box .big img").attr({'src':url});
    })
})