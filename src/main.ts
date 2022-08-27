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
      createPickScreen(paper, rock, scissors)
      return
    case 1:
      createPickScreen(scissors, paper, rock)
      return
    case 2:
      createPickScreen(rock, paper, scissors)
      return
  }
};

const createPickScreen = (userMove: HTMLButtonElement,
                          hideMove1: HTMLButtonElement,
                          hideMove2: HTMLButtonElement,
) => {
  userMove.onclick = null
  hideMove1.remove()
  hideMove2.remove()
  houseMove()
  playAgain()
};

const availableMoves = Array('paper', 'scissors', 'rock')

const houseMove = () => {
  const housePick = availableMoves[availableMoves.length * Math.random() | 0]
  const button = document.createElement('button')
  
  gameArea?.appendChild(button)
  
  const createHouseMove = () => {
    const src = `/images/icon-${housePick}.svg`
    button.innerHTML += `<img src="${src}" alt="${housePick}" width="50" height="60">`
  }
  
  setTimeout(createHouseMove, 1000)
};

const playAgain = () => {
  document.querySelector('body')!.innerHTML += `<button>PLAY AGAIN</button>`
}
