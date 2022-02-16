const Mins5 = document.getElementById('subcol1')
const Mins10 = document.getElementById('subcol2')
const Mins15 = document.getElementById('subcol3')
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')

const container = document.getElementById('container')

const video1 = document.getElementById('video1')
const video2 = document.getElementById('video2')
const video3 = document.getElementById('video3')
const video4 = document.getElementById('video4')
const video5 = document.getElementById('video5')


container.style.display = '' ;
video1.style.display = 'none' ;
video2.style.display = 'none' ;
video3.style.display = 'none' ;
video4.style.display = 'none' ;
video5.style.display = 'none' ;



Mins5.addEventListener('click' ,meditation5Mins) ;
Mins10.addEventListener('click' ,meditation10Mins) ;
Mins15.addEventListener('click' ,meditation15Mins) ;
sun.addEventListener('click' ,meditationSun) ;
moon.addEventListener('click' ,meditationMoon) ;


function meditation10Mins(){
    container.style.display = 'none' ;
    video1.style.display = "" ;
    video2.style.display = 'none' ;
    video3.style.display = 'none' ;
    video4.style.display = 'none' ;
    video5.style.display = 'none' ;

    console.log("check")
    var audio = new Audio('1.mp3');
    audio.play();
    var btn = document.getElementById('button') ;
    btn.addEventListener('click' , function(){
        audio.pause() ;
        container.style.display = '' ;
        video1.style.display = 'none' ;
        video2.style.display = 'none' ;
        video3.style.display = 'none' ;
        video4.style.display = 'none' ;
        video5.style.display = 'none' ;
    })
}


function meditation5Mins(){
    container.style.display = 'none' ;
    video1.style.display = "none" ;
    video2.style.display = '' ;
    video3.style.display = 'none' ;
    video4.style.display = 'none' ;
    video5.style.display = 'none' ;

    console.log("check")
    var audio = new Audio('5min.mp3');
    audio.play();
    var btn = document.getElementById('button1') ;
    btn.addEventListener('click' , function(){
        audio.pause() ;
        container.style.display = '' ;
        video1.style.display = 'none' ;
        video2.style.display = 'none' ;
        video3.style.display = 'none' ;
        video4.style.display = 'none' ;
        video5.style.display = 'none' ;
    })
}


function meditation15Mins(){
    container.style.display = 'none' ;
    video1.style.display = "none" ;
    video2.style.display = 'none' ;
    video3.style.display = '' ;
    video4.style.display = 'none' ;
    video5.style.display = 'none' ;

    console.log("check")
    var audio = new Audio('15min.mp3');
    audio.play();
    var btn = document.getElementById('button2') ;
    btn.addEventListener('click' , function(){
        audio.pause() ;
        container.style.display = '' ;
        video1.style.display = 'none' ;
        video2.style.display = 'none' ;
        video3.style.display = 'none' ;
        video4.style.display = 'none' ;
        video5.style.display = 'none' ;
    })
}


function meditationSun(){
    container.style.display = 'none' ;
    video1.style.display = "none" ;
    video2.style.display = 'none' ;
    video3.style.display = 'none' ;
    video4.style.display = '' ;
    video5.style.display = 'none' ;

    console.log("check")
    var audio = new Audio('10min.mp3');
    audio.play();
    var btn = document.getElementById('button3') ;
    btn.addEventListener('click' , function(){
        audio.pause() ;
        container.style.display = '' ;
        video1.style.display = 'none' ;
        video2.style.display = 'none' ;
        video3.style.display = 'none' ;
        video4.style.display = 'none' ;
        video5.style.display = 'none' ;
    })
}


function meditationMoon(){
    container.style.display = 'none' ;
    video1.style.display = "none" ;
    video2.style.display = 'none' ;
    video3.style.display = 'none' ;
    video4.style.display = 'none' ;
    video5.style.display = '' ;

    console.log("check")
    var audio = new Audio('moon.m4a');
    audio.play();
    var btn = document.getElementById('button4') ;
    btn.addEventListener('click' , function(){
        audio.pause() ;
        container.style.display = '' ;
        video1.style.display = 'none' ;
        video2.style.display = 'none' ;
        video3.style.display = 'none' ;
        video4.style.display = 'none' ;
        video5.style.display = 'none' ;
    })
}





