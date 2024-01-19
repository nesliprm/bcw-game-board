// MAIN CONSTANTS

const scoreCounter = document.querySelector(".score");
const gameGrid = document.querySelector(".grid");
const endScreen = document.querySelector(".end-game-screen");
const endText = document.querySelector(".end-game-text");
const reloadButton = document.querySelector("button");

const totalCells = 100;
const totalBombs = 10;
const maxScore = 5;
const bombs = [];

let score = 0;

// LOOPS

for (let n = 1; n <= 100; n = n + 1) {
  // make 100 cells
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gameGrid.appendChild(cell);

  // add click event
  cell.addEventListener("click", clickedCell);

  function clickedCell() {
    cell.classList.add("clicked");
    updateScore();
  }
}

// populating the grid with bombs

while (bombs.length < totalBombs) {
  // generating random number
  const nRandom = Math.floor(Math.random() * 100) + 1;

  // if bombs don't include random number generate number
  if (!bombs.includes(nRandom)) {
    bombs.push(nRandom);
  }
}

// UPDATING THE SCORE

function updateScore() {
  score = score + 1;
  console.log(score);
  scoreCounter.innerHTML = score.toString().padStart(5, "0");
}
