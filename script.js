let audio = document.getElementById("audio");
var vibrator = 0;
var vibrating = Boolean(true);
const alert_number = 10;
const pattern = [100, 300, 100, 100, 100, 500]

anime = function () {
    addclasses();
    playPauseMusic();
    //vibration();
}

addclasses = function () {
    let heart = document.querySelector('.heart')
    heart.classList.toggle('heartanime')
    let back = document.querySelector('.back')
    back.classList.toggle('backanime')
    let in2 = document.querySelector('#in')
    in2.classList.toggle('inanime')
    let hold = document.querySelector('#hold')
    hold.classList.toggle('holdanime')
    let out = document.querySelector('#out')
    out.classList.toggle('outanime')
}

playPauseMusic = function () {
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    } else {
        audio.play();
    }
}

vibration = function () {
    if (vibrating) {
        navigator.vibrate(0);
        vibrating = false;
    } else {
        navigator.vibrate(pattern);
        //navigator.vibrate(pattern, true);
        vibrating = true
    }
}