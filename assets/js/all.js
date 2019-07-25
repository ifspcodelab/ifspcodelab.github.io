// window.onscroll = () => {
//     sumario = document.querySelector("#sumario");
//     if(window.pageYOffset > 181) {
//         sumario.style.top = 0;
//     }
//     if(window.pageYOffset < 181){
//         sumario.style.top = 182;
//     }
// };
$('body').scrollspy({ target: '#sumario' })
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})

document.querySelectorAll("img").forEach((element)=>{
  element.onclick = ()=>{window.location = element.src}
})