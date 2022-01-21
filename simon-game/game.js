let buttonColours = ["green", "red", "yellow", "blue"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).on("keypress", function () {
  if (!started) {
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;
  }
});

$(".btn").on("click", function () {
  if (started) {
    const userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  }
});

const nextSequence = () => {
  userClickedPattern = [];

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  level++;
  $("#level-title").text("Level " + level);
};

const playSound = (name) => {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

const animatePress = (currentColour) => {
  const pressedButton = $("#" + currentColour);

  pressedButton.addClass("pressed");
  setTimeout(function () {
    pressedButton.removeClass("pressed");
  }, 100);
};

const checkAnswer = (currentLevel) => {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
  }
};

const startOver = () => {
  level = 0;
  gamePattern = [];
  started = false;
};

//////////////////////// Draft ////////////////////////
// Wait for input
//    game start()

// game start()
//   Level label update
//   Random num 1-4
//   Add in sequence arr
//  CSS for random num button
//   Player click
//   Validate sequence
//   if (correct)
//      wait for next click
//   else
//      game over()
//   if (# click === # sequence)
//      back to top

// game over()
//   Level label update
//   CSS for game over

// $(".btn").on("click", function (event) {
//   const correct = validateColor(event.currentTarget.id);

//   let audio = new Audio("sounds/" + event.currentTarget.id + ".mp3");
//   audio.play();

//   if (correct) {
//     if (idx === sequence.length) {
//       generateRandomColor();
//       idx = 0;
//     }
//   } else {
//     $("h1").text("Game Over, Press Any Key to Restart");
//   }
// });

// let sequence = [];
// let idx = 0;

// const validateColor = (color) => {
//   switch (color) {
//     case "green":
//       return sequence[idx++] === 1;

//     case "red":
//       return sequence[idx++] === 2;

//     case "yellow":
//       return sequence[idx++] === 3;

//     case "blue":
//       return sequence[idx++] === 4;

//     default:
//       break;
//   }
// };

// const blinkButton = (color) => {
//   let button;

//   switch (color) {
//     case 1:
//       button = $("#green");
//       break;

//     case 2:
//       button = $("#red");
//       break;

//     case 3:
//       button = $("#yellow");
//       break;

//     case 4:
//       button = $("#blue");
//       break;

//     default:
//       break;
//   }

//   button.addClass("pressed");
//   setTimeout(function () {
//     button.removeClass("pressed");
//   }, 300);
// };

// const generateRandomColor = () => {
//   let randomNum = Math.floor(Math.random() * 4) + 1;
//   sequence.push(randomNum);
//   $("h1").text("Level " + sequence.length);

//   blinkButton(randomNum);

//   console.log(sequence);
// };

// const start = () => {
//   generateRandomColor();
// };
