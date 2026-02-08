const board = document.querySelector(".board")

const rows = 10
const columns = 7
let ball

for (let i = 0; i < rows * columns; i++) {
  const cell = document.createElement("div")
  cell.classList.add("cell")
  board.appendChild(cell)
}

const cells = document.querySelectorAll(".cell")

let ballColl = Math.floor(columns / 2)
const ballRow = rows - 1
let ballIndex = ballRow * columns + ballColl

cells[ballIndex].classList.add("ball")

const handleKeyPress = (event) => {
  if (event.key === "ArrowLeft") {
    moveBallLeft()
  } else if (event.key === "ArrowRight") {
    moveBallRight()
  } else if (event.key === "ArrowUp") {
    setInterval(() => {
      moveUp()
    }, 1000)
  }
}

const moveBallLeft = () => {
  if (ballColl === 0) return

  ball = cells[ballIndex].classList.remove("ball")

  ballColl--
  ballIndex = ballRow * columns + ballColl

  ball = cells[ballIndex].classList.add("ball")
}

const moveBallRight = () => {
  if (ballColl === columns - 1) return

  ball = cells[ballIndex].classList.remove("ball")

  ballColl++
  ballIndex = ballRow * columns + ballColl
  console.log(ballIndex)

  ball = cells[ballIndex].classList.add("ball")
}

const moveUp = () => {
  ball = cells[ballIndex].classList.remove("ball")

  ballColl -= 7
  ballIndex = ballRow * columns + ballColl
  console.log(ballIndex)
  ball = cells[ballIndex].classList.add("ball")
}

document.addEventListener("keydown", handleKeyPress)

const goalRow = 0
let goalCol = Math.floor(columns / 2)
let goalIndex = goalRow * columns + goalCol
console.log(ballColl)

cells[goalIndex].classList.add("goal")
