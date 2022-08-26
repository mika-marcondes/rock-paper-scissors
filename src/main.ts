import './style.css'

const paper = document.getElementById('paper') as HTMLButtonElement
const scissor = document.getElementById('scissor') as HTMLButtonElement
const rock = document.getElementById('rock') as HTMLButtonElement

paper.onclick = () => selectMove(0)
scissor.onclick = () => selectMove(1)
rock.onclick = () => selectMove(2)

const selectMove = (move: number) => {
  switch (move) {
    case 0:
      createPickScreen(paper, rock, scissor)
      return
    case 1:
      createPickScreen(scissor, paper, rock)
      return
    case 2:
      createPickScreen(rock, paper, scissor)
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
};

const availableMoves = Array('Paper', 'Scissor', 'Rock')

const houseMove = () => {
  const move = availableMoves[availableMoves.length * Math.random() | 0]
  
  const createHousePick = () => {
    const button = document.createElement('button')
    const gameArea: HTMLElement | null = document.getElementById('game-area')
    button.innerHTML = `${move}`
    gameArea?.appendChild(button)
  }
  
  createHousePick()
};
