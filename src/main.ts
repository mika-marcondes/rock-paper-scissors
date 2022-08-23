import './style.css'

const paper = document.getElementById('paper') as HTMLButtonElement
const scissor = document.getElementById('scissor') as HTMLButtonElement
const rock = document.getElementById('rock') as HTMLButtonElement

paper.onclick = () => selectMove(0)
scissor.onclick = () => selectMove(1)
rock.onclick = () => selectMove(2)

const selectMove = (playerMove: number) => {
  const hideUnselectedMoves = (userMove: HTMLButtonElement,
                        remove1: HTMLButtonElement,
                        remove2: HTMLButtonElement,
  ) => {
    userMove.onclick = null
    remove1.remove()
    remove2.remove()
    houseMove()
  };
  
  switch (playerMove) {
    case 0:
      hideUnselectedMoves(paper, rock, scissor)
      return
    case 1:
      hideUnselectedMoves(scissor, paper, rock)
      return
    case 2:
      hideUnselectedMoves(rock, paper, scissor)
      return
  }
};

const houseMove = () => {
  let availableMoves: Array<number>
  
  availableMoves = Array(0, 1, 2)
  let move = availableMoves[availableMoves.length * Math.random() | 0]
  
  const createHousePick = () => {
    const button = document.createElement('button')
    const gameArea: HTMLElement | null = document.getElementById('game-area')
    button.innerHTML = 'butao'
    
    gameArea?.appendChild(button)
  }

  console.log(move)
  createHousePick()
};
