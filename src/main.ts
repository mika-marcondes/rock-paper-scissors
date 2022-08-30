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
      displaySelectedMove(paper, rock, scissors)
      return
    case 1:
      displaySelectedMove(scissors, paper, rock)
      return
    case 2:
      displaySelectedMove(rock, paper, scissors)
      return
  }
};

const displaySelectedMove = (userMove: HTMLButtonElement,
                          hideMove1: HTMLButtonElement,
                          hideMove2: HTMLButtonElement,
) => {
  userMove.onclick = null
  hideMove1.style.display = "none"
  hideMove2.style.display = "none"
  displayHouseMove()
  playAgain()
};

const availableMoves = Array('paper', 'scissors', 'rock')

const displayHouseMove = () => {
  const button = document.createElement('button')

  gameArea?.appendChild(button)
  
  const createHouseMove = () => {
    const housePick = availableMoves[availableMoves.length * Math.random() | 0]
    const src = `/icon-${housePick}.svg`

    button.innerHTML += `<img src="${src}" alt="${housePick}" width="50" height="60">`
  }
  
  setTimeout(createHouseMove, 1000)
};

const playAgain = () => {
  const button = document.createElement("button")
  const body = document.querySelector("body")
  button.innerHTML += "Play again"
  body?.appendChild(button)
}