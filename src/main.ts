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
      setSelection(paper, rock, scissor)
      return
    case 2:
      setSelection(scissor, paper, rock)
      return
    case 3:
      setSelection(rock, paper, scissor)
      return
  }
}

function setSelection(this: any, userMove: HTMLElement | null,
                      remove1: HTMLElement | null,
                      remove2: HTMLElement | null) {
  userMove?.removeEventListener("click", this)
  remove1?.remove()
  remove2?.remove()
}
