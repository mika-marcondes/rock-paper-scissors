import './style.css'

const paper: any = document.getElementById('paper')
const scissor: any = document.getElementById('scissor')
const rock: any = document.getElementById('rock')

paper.addEventListener("click", function () {selectMove(paper)})
scissor.addEventListener("click", function () {selectMove(scissor)})
rock.addEventListener("click", function () {selectMove(rock)})

function selectMove(move: HTMLElement) {
  console.log(move)
}

