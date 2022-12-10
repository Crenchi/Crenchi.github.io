let button = document.querySelector("button");
    button.style.backgroundColor = 'white';

let audio = document.querySelector("audio");
let heart = document.querySelector("heart");


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

anime = function(){
    addclasses();
}

addclasses = function(){
    let heart = document.querySelector("heart");
    heart.target.classList.add('heartanime');

}

