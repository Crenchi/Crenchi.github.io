let audio;

const noClick = () => {
    audio = document.getElementById("Sad");
    playPauseMusic();

    const button = document.getElementById('No');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const newLeft = Math.random() * (viewportWidth - button.offsetWidth);
    const newTop = Math.random() * (viewportHeight - button.offsetHeight);

    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
  };

  const yesClick = () => {
    audio = document.getElementById("AboSo");
    playPauseMusic()
  };


  playPauseMusic = function () {
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    } else {
        audio.play();
    }
}