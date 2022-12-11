let audio = document.getElementById("audio");

anime = function(){
  addclasses();
}

addclasses = function(){
  $('.heart').toggleClass('heartanime')
  $('.back').toggleClass('backanime')
  $('#in').toggleClass('inanime')
  $('#hold').toggleClass('holdanime')
  $('#out').toggleClass('outanime')

  if(!audio.paused){
    audio.pause();
    audio.currentTime = 0;
  }
}