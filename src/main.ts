import './style.css'

const paper: HTMLElement | null = document.getElementById('paper')
const scissor: HTMLElement | null = document.getElementById('scissor')
const rock: HTMLElement | null = document.getElementById('rock')

paper?.addEventListener("click", function () {
  selectMove(1)
})
scissor?.addEventListener("click", function () {
  selectMove(2)
})
rock?.addEventListener("click", function () {
  selectMove(3)
})

function selectMove(this: any, playerMove: number) {
  switch (playerMove) {
    case 1:
      paper?.removeEventListener("click", this)
      scissor?.remove()
      rock?.remove()
      return
    case 2:
      scissor?.removeEventListener("click", this)
      paper?.remove()
      rock?.remove()
      return
    case 3:
      rock?.removeEventListener("click", this)
      scissor?.remove()
      paper?.remove()
      return
  }
  console.log(playerMove)
}

