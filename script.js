let button = document.querySelector("button");
    button.style.backgroundColor = 'white';

//window.onload = function() {
//    document.getElementById("my_audio").play();
//}

window.onload = function (){
    button.addEventListener("click", () => {
        const backgroundColor = button.style.backgroundColor;

        if (backgroundColor === 'salmon') {
            button.style.backgroundColor = 'green';
        } else if (backgroundColor === 'green') {
            button.style.backgroundColor = 'purple';
        } else {
            button.style.backgroundColor = 'salmon';
        }
      });
    }