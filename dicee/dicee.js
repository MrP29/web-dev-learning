const diceImg = (number) => {
  return "images/dice" + number + ".png";
};

// const game = () => {
const player1dice = Math.floor(Math.random() * 6) + 1;
const player2dice = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", diceImg(player1dice));
document.querySelector(".img2").setAttribute("src", diceImg(player2dice));

if (player1dice > player2dice) {
  document.querySelector("h1").textContent = "🚩 Player 1 Won";
} else if (player1dice < player2dice) {
  document.querySelector("h1").textContent = "Player 2 Won 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
// };
