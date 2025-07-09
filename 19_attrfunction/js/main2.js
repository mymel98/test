$(function(){
    $(".box ul li").mouseenter(function(){
        let num = $(this).index()
        console.log(num)
        let url = $(this).find('img').attr('src')
        console.log(url)

        // url을 big박스에 넣어줌
        $(".big img").attr({'src':url});
    })
})