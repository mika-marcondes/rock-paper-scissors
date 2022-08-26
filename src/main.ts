import './style.css'

const paper = document.getElementById('paper') as HTMLButtonElement
const scissor = document.getElementById('scissor') as HTMLButtonElement
const rock = document.getElementById('rock') as HTMLButtonElement
const gameArea: HTMLElement | null = document.querySelector('#game-area')

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

const availableMoves = Array('paper', 'scissors', 'rock')

const houseMove = () => {
  const move = availableMoves[availableMoves.length * Math.random() | 0]
  const button = document.createElement('button')
  
  gameArea?.appendChild(button)
  
  const createHouseMove = () => {
    let src = `/images/icon-${move}.svg`
    button.innerHTML += `<img src="${src}" alt="${move}" width="50" height="60">`
  }
  
  console.log(move)
  setTimeout(createHouseMove, 1000)
};
