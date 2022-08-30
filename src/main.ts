import './style.css'

const paper = document.getElementById('paper') as HTMLButtonElement
const scissors = document.getElementById('scissors') as HTMLButtonElement
const rock = document.getElementById('rock') as HTMLButtonElement

const gameArea: HTMLElement | null = document.querySelector('#game-area')

paper.onclick = () => selectMove(0)
scissors.onclick = () => selectMove(1)
rock.onclick = () => selectMove(2)

const selectMove = (move: number) => {
  switch (move) {
    case 0:
      moveRevealScreen(paper, rock, scissors)
      return
    case 1:
      moveRevealScreen(scissors, paper, rock)
      return
    case 2:
      moveRevealScreen(rock, paper, scissors)
      return
  }
};

const moveRevealScreen = (showMove: HTMLButtonElement,
                          hideMove1: HTMLButtonElement,
                          hideMove2: HTMLButtonElement,
) => {
  showMove.onclick = null
  showMove.style.display = ""
  hideMove1.style.display = "none"
  hideMove2.style.display = "none"
  displayHouseMove()
  setTimeout(playAgain, 1500)
};

const displayHouseMove = () => {
  const button = document.createElement('button')

  gameArea?.appendChild(button)
  
  const createHouseMove = () => {
    const availableMoves = Array('paper', 'scissors', 'rock')
    const housePick = availableMoves[availableMoves.length * Math.random() | 0]
    button.setAttribute("id", `${housePick}`)
  }
  
  setTimeout(createHouseMove, 1000)
};

const playAgain = () => {
  const button = document.createElement("button")
  const body = document.querySelector("body")
  button.innerHTML += "Play again"
  body?.appendChild(button)

  button.onclick = () => resetDisplay()
}

const resetDisplay = () => {
  const game = document.querySelectorAll('#game-area > button')
  game.forEach(el => el.remove())
}