new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition:'right',
    anchors:['sec0', 'sec1', 'sec2', 'sec3', 'sec4', 'sec5','sec6']
});
let header = document.querySelector("header")
console.log(header)
let mbtn = document.querySelector(".m_btn")
console.log(mbtn)
mbtn.addEventListener("click", function(){
    header.classList.toggle("on")
})