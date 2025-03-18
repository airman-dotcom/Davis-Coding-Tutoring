window.scrollTo(0,0);
function pxtovh(px){
    return (px / window.innerHeight) * 100;
}

let launch = document.getElementById("launch");
let launch_txt = "Launch into the <span style='color: blue;'>future</span>";

function typewriter(i){
    if (i == launch_txt.length) return;
    if (launch_txt[i] == "<"){
        setTimeout(function(){
            launch.innerHTML += launch_txt.slice(i, launch_txt.length);
        }, 700)
        return;
    }
    launch.innerHTML += launch_txt.charAt(i)
    setTimeout(function(){
        typewriter(i+1)
    }, 100)
}

document.body.onload = function(){
    setTimeout(function(){
        typewriter(0)
    }, 1500)
}