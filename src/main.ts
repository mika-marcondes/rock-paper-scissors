import './style.css'

const paper = document.getElementById('paper') as HTMLButtonElement
const scissor = document.getElementById('scissor') as HTMLButtonElement
const rock = document.getElementById('rock') as HTMLButtonElement

paper.onclick = () => selectMove(1)
scissor.onclick = () => selectMove(2)
rock.onclick = () => selectMove(3)

const selectMove = (playerMove: number) => {
  const setSelection = (userMove: HTMLButtonElement,
                        remove1: HTMLButtonElement,
                        remove2: HTMLButtonElement,
  ) => {
    userMove.onclick = null
    remove1.remove()
    remove2.remove()
    houseMove()
  };
  
  switch (playerMove) {
    case 1:
      setSelection(paper, rock, scissor)
      return
    case 2:
      setSelection(scissor, paper, rock)
      return
    case 3:
      setSelection(rock, paper, scissor)
      return
  }
};

function houseMove() {
  const button = document.createElement('button')
  const gameArea: HTMLElement | null = document.getElementById('game-area')
  
  button.innerHTML = 'butao'
  gameArea?.appendChild(button)
  
  console.log('oie')
}
