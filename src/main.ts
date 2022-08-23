import './style.css'

const paper: HTMLElement | null = document.getElementById('paper')
const scissor: HTMLElement | null = document.getElementById('scissor')
const rock: HTMLElement | null = document.getElementById('rock')

paper?.addEventListener("click", function () {selectMove(1)})
scissor?.addEventListener("click", function () {selectMove(2)})
rock?.addEventListener("click", function () {selectMove(3)})

function selectMove(playerMove: number) {
  console.log(playerMove)
}

