var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video4 = document.getElementById('video4');
var video5 = document.getElementById('video5');
var video6 = document.getElementById('video6');

function imgTransition(){
    imagen1.style.opacity=0;
    video1.play();
    video1.style.opacity=1;
}
video1.onended = function play2(){
    video2.play();
    video1.style.opacity=0;
    video2.style.opacity=1;
}
video2.onended = function play3(){
    video3.play();
    video2.style.opacity=0;
    video3.style.opacity=1;
}
video3.onended = function play4(){
    video4.play();
    video3.style.opacity=0;
    video4.style.opacity=1;
}
video4.onended = function play5(){
    video5.play();
    video4.style.opacity=0;
    video5.style.opacity=1;
}
video5.onended = function play6(){
    video6.play();
    video5.style.opacity=0;
    video6.style.opacity=1;
}
video6.onended = function play1(){
    video1.play();
    video6.style.opacity=0;
    video1.style.opacity=1;
}
