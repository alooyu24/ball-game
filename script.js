const board = document.querySelector(".board")

const rows = 10
const columns = 7

for (let i = 0; i < rows * columns; i++) {
  const cell = document.createElement("div")
  cell.classList.add("cell")
  board.appendChild(cell)
}

const cells = document.querySelectorAll(".cell")

const ballColl = Math.floor(columns / 2)
const ballRow = rows - 1
const ballIndex = ballRow * columns + ballColl

cells[ballIndex].classList.add("ball")
