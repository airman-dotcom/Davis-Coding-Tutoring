let laptop = document.getElementById("laptop");
const scaling = 1058.571429;

window.onresize = function (){
    laptop.style = `scale: ${window.innerWidth/scaling};` 
}
window.addEventListener("scroll", function () {
    console.log(1)
}, false);
