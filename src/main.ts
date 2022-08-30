import './style.css'

interface AvailableMoves {
  paper: HTMLButtonElement
  scissors: HTMLButtonElement
  rock: HTMLButtonElement
}

let moves: AvailableMoves = <AvailableMoves> {
  paper: document.getElementById('paper'),
  scissors: document.getElementById('scissors'),
  rock: document.getElementById('rock')
}

const gameArea: HTMLElement | null = document.querySelector('#game-area')

moves.paper.onclick = () => selectMove(0, moves)
moves.scissors.onclick = () => selectMove(1, moves)
moves.rock.onclick = () => selectMove(2, moves)

const selectMove = (select: number, moves: AvailableMoves) => {
  switch (select) {
    case 0:
      moveRevealScreen(moves.paper, moves.rock, moves.scissors)
      return
    case 1:
      moveRevealScreen(moves.scissors, moves.paper, moves.rock)
      return
    case 2:
      moveRevealScreen(moves.rock, moves.paper, moves.scissors)
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
  const buttonPlayAgain = document.createElement("button")
  const body = document.querySelector("body")

  buttonPlayAgain.innerHTML += "Play again"
  body?.appendChild(buttonPlayAgain)

  buttonPlayAgain.onclick = () => clearDisplay(buttonPlayAgain, moves)
}

const clearDisplay = (buttonPlayAgain: HTMLButtonElement, moves: AvailableMoves) => {
  const game = document.getElementById('game-area')

  moves.paper.style.display = ""
  moves.rock.style.display = ""
  moves.scissors.style.display = ""

  if (game?.hasChildNodes()) {
    game.removeChild(game.children[3])
  }
  
  buttonPlayAgain.remove()
}