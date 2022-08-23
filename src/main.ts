import './style.css'

const availableMoves = Array(0, 1, 2)

const paper = document.getElementById('paper') as HTMLButtonElement
const scissor = document.getElementById('scissor') as HTMLButtonElement
const rock = document.getElementById('rock') as HTMLButtonElement

paper.onclick = () => playerMove(0)
scissor.onclick = () => playerMove(1)
rock.onclick = () => playerMove(2)

const playerMove = (move: number) => {
  const createPlayerPick = (userMove: HTMLButtonElement,
                            remove1: HTMLButtonElement,
                            remove2: HTMLButtonElement,
  ) => {
    userMove.onclick = null
    remove1.remove()
    remove2.remove()
    houseMove()
  };
  
  switch (move) {
    case 0:
      createPlayerPick(paper, rock, scissor)
      return
    case 1:
      createPlayerPick(scissor, paper, rock)
      return
    case 2:
      createPlayerPick(rock, paper, scissor)
      return
  }
};

const houseMove = () => {
  const move = availableMoves[availableMoves.length * Math.random() | 0]
  
  const createHousePick = () => {
    const button = document.createElement('button')
    const gameArea: HTMLElement | null = document.getElementById('game-area')
    button.innerHTML = 'butao'
    
    gameArea?.appendChild(button)
  }
  
  console.log(move)
  createHousePick()
};
