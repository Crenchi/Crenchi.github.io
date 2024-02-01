let audio;

const noClick = () => {
    audio = document.getElementById("Sad");
    playMusic();

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
    showImage()
  };


  playPauseMusic = function () {
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    } else {
        audio.play();
    }
}

  playMusic = function () {
    audio.currentTime = 0;
    audio.play();
  }

  function changeText(buttonId, newText) {
    var button = document.getElementById(buttonId);
    button.innerHTML = newText;
}
const sad = ":("
// Event listeners for the No button
var noButton = document.getElementById('No');
noButton.addEventListener('mouseover', function () {
    changeText('No', sad);
});
noButton.addEventListener('mouseout', function () {
    changeText('No', 'No');
});


function showImage() {
  // Get the image element
  var image = document.getElementById('selfie');

  // Set the source of the image
  image.src = '/Audio/us.jpeg';

  // Display the image container
  document.getElementById('imageContainer').style.display = 'block';
}
