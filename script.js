// MAIN CONSTANTS

const scoreCounter = document.querySelector(".score");
const gameGrid = document.querySelector(".grid");
const endScreen = document.querySelector(".end-game-screen");
const endText = document.querySelector(".end-game-text");
const reloadButton = document.querySelector("button");

// GAME PANEL CONSTANTS

const totalCells = 100;
const totalBombs = 10;
const maxScore = 5;
const bombs = [];

let score = 0;

// LOOPS

for (let n = 1; n <= 100; n = n + 1) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gameGrid.appendChild(cell);

  cell.addEventListener("click", clickedCell);

  function clickedCell() {
    cell.classList.add("clicked");
    updateScore();
  }
}

while (bombs.length < totalBombs) {
  const nRandom = Math.floor(Math.random() * totalCells) + 1;

  if (!bombs.includes(nRandom)) {
    bombs.push(nRandom);
  }
}

function updateScore() {
  score + 1;
  scoreCounter.innerText = score.toString();
}
