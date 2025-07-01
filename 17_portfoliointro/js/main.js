function time(){
    let webHour = document.querySelector(".web_hour");
    let webMin = document.querySelector(".web_min");
    let webSecond = document.querySelector(".web_sec");
    let webMsec = document.querySelector(".web_msec");
    console.log(webHour, webMin, webSecond, webMsec);

    let date = new Date();
    console.log(date);
    // 시간
    let hour = date.getHours();
    console.log(hour);
    let dhour = digit(hour);
    webHour.innerHTML = dhour;
    // 분
    let min = date.getMinutes();
    console.log(min);
    let dmin = digit(min);
    webMin.innerHTML = dmin;
    // 초
    let sec = date.getSeconds();
    console.log(sec);
    let dsec = digit(sec);
    webSecond.innerHTML = dsec;
    // 밀리초
    let msec = date.getMilliseconds();
    console.log(msec);
    let mnsec = Math.floor(msec/10)
    let dmsec = digit(mnsec);
    webMsec.innerHTML = dmsec;

    // 시간, 분, 초, 밀리초 자리수를 두자리로 조정하는 함수
    function digit(x){
        if(x<10){
            return '0' + x
        }else{
            return x;
        }
    }
}
setInterval(function(){
    time();
},100)