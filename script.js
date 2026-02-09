const board = document.querySelector(".board")

const rows = 10
const columns = 7
let ball
let goal

for (let i = 0; i < rows * columns; i++) {
  const cell = document.createElement("div")
  cell.classList.add("cell")
  board.appendChild(cell)
}

const cells = document.querySelectorAll(".cell")
let ballRow = rows - 1
let ballColl = Math.floor(columns / 2)
let ballIndex = ballRow * columns + ballColl
let shootInterval = null
let isShooting = false
cells[ballIndex].classList.add("ball")

const handleKeyPress = (event) => {
  if (event.key === "ArrowLeft") {
    moveBallLeft()
  } else if (event.key === "ArrowRight") {
    moveBallRight()
  } else if (event.key === "ArrowUp") {
    shootBall()
  }
}

const shootBall = () => {
  if (isShooting) return
  isShooting = true

  shootInterval = setInterval(() => {
    moveBallUp()
  }, 100)
}

const moveBallUp = () => {
  cells[ballIndex].classList.remove("ball")

  ballRow--

  if (ballRow < 0) {
    stopShooting()
    resetBall()
    return
  }
  ballIndex = ballRow * columns + ballColl
  if (ballIndex === goalIndex) {
    handleGoalHit()
    return
  }
  cells[ballIndex].classList.add("ball")
}

const stopShooting = () => {
  clearInterval(shootInterval)
  shootInterval = null
  isShooting = false
}

const resetBall = () => {
  ballRow = rows - 1
  ballColl = Math.floor(columns / 2)

  cells[ballIndex].classList.add("ball")
}

const handleGoalHit = () => {
  stopShooting()
  stopGoalMovement()

  score += 10
  updateScore()

  resetBall()
  startGoalMovement(500)
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

document.addEventListener("keydown", handleKeyPress)

const goalRow = 0
let goalCol = Math.floor(columns / 2)
let goalIndex = goalRow * columns + goalCol

let goalDirection = 1
let goalInterval = null

goal = cells[goalIndex].classList.add("goal")

const startGoalMovement = (speed) => {
  if (goalInterval !== null) return

  goalInterval = setInterval(() => {
    moveGoal()
  }, speed)
}

const moveGoal = () => {
  goal = cells[goalIndex].classList.remove("goal")

  if (goalCol === 0 || goalCol === columns - 1) {
    goalDirection *= -1
  }

  goalCol += goalDirection

  goalIndex = goalRow * columns + goalCol

  goal = cells[goalIndex].classList.add("goal")
}

const stopGoalMovement = () => {
  clearInterval(goalInterval)
  goalInterval = null
}

startGoalMovement(500)

let score = 0
const scoreEl = document.querySelector(".score")

const updateScore = () => {
  scoreEl.textContent = `score: ${score}`
}

updateScore()
