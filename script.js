//let audio = document.getElementById("audio");

anime = function(){
  addclasses();
}

addclasses = function(){
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
  //if(!audio.paused){
    //audio.pause();
    //audio.currentTime = 0;}
}