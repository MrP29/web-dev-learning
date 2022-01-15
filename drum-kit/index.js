//Detecting Button Press
let drumButtons = document.querySelectorAll(".drum");
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    let pressed = this.innerHTML;
    playAudio(pressed);
    buttonAnimation(pressed);
  });
}

//Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  playAudio(event.key);
  buttonAnimation(event.key);
});

const playAudio = (pressed) => {
  switch (pressed) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(pressed);
      break;
  }
};

const buttonAnimation = (pressed) => {
  let button = document.querySelector("." + pressed);

  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
};
