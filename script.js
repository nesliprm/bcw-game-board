// MAIN CONSTANTS

const scoreCounter = document.querySelector(".score");
const gameGrid = document.querySelector(".grid");
const endScreen = document.querySelector(".end-game-screen");
const endText = document.querySelector(".end-game-text");
const reloadButton = document.querySelector("button");

const totalCells = 100;
const totalBombs = 5;
const maxScore = totalCells - totalBombs;
const bombs = [];

let score = 0;

// CELL BEHAVIOR

for (let n = 1; n <= 100; n = n + 1) {
  // make 100 cells
  const cell = document.createElement("div");
  cell.classList.add("cell");

  gameGrid.appendChild(cell);

  // add click event
  cell.addEventListener("click", clickedCell);

  function clickedCell() {
    if (bombs.includes(n)) {
      cell.classList.add("boom");
      endGame(false);
    }

    cell.classList.add("clicked");
    updateScore();
  }
}

// ADDING BOMBS

while (bombs.length < totalBombs) {
  // generating random number
  const nRandom = Math.floor(Math.random() * 100) + 1;

  // if bombs don't include random number
  if (!bombs.includes(nRandom)) {
    bombs.push(nRandom);
  }
}

// UPDATING THE SCORE

function updateScore() {
  score = score + 1;
  scoreCounter.innerHTML = score.toString().padStart(5, "0");

  // reaching maximum score
  if (score === maxScore) {
    endGame(true);
  }
}

// END GAME FUNCTION

function endGame(won) {
  if (won) {
    endText.innerHTML = "YOU WON!";
    endScreen.classList.add("victory");
  }

  endScreen.classList.remove("hidden");
}

// RELOAD BUTTON

reloadButton.addEventListener("click", reloadGame);

function reloadGame() {
  window.location.reload();
}
