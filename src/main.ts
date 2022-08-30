import "./style.css";

interface AvailableMoves {
  paper: HTMLButtonElement;
  scissors: HTMLButtonElement;
  rock: HTMLButtonElement;
}

const moves: AvailableMoves = <AvailableMoves>{
  paper: document.getElementById("paper"),
  scissors: document.getElementById("scissors"),
  rock: document.getElementById("rock"),
};

moves.paper.onclick = () => selectMove(0, moves);
moves.scissors.onclick = () => selectMove(1, moves);
moves.rock.onclick = () => selectMove(2, moves);

const selectMove = (pick: number, moves: AvailableMoves) => {
  switch (pick) {
    case 0:
      showSelection(moves.paper, moves.rock, moves.scissors);
      return;
    case 1:
      showSelection(moves.scissors, moves.paper, moves.rock);
      return;
    case 2:
      showSelection(moves.rock, moves.paper, moves.scissors);
      return;
  }
};

const showSelection = (
  showSelected: HTMLButtonElement,
  hideUnselected1: HTMLButtonElement,
  hideUnselected2: HTMLButtonElement
) => {
  showSelected.onclick = null;
  showSelected.style.display = "";
  hideUnselected1.style.display = "none";
  hideUnselected2.style.display = "none";
  houseMove();
  setTimeout(playAgain, 1500);
};

const houseMove = () => {
  const gameArea: HTMLElement | null = document.querySelector("#game-area");
  const availableMoves = Array("paper", "scissors", "rock");
  const housePick = availableMoves[(availableMoves.length * Math.random()) | 0];
  const button = document.createElement("button");

  const showHouseMove = () => {
    button.setAttribute("id", `${housePick}`);
  };

  gameArea?.appendChild(button);
  setTimeout(showHouseMove, 1000);
};

const playAgain = () => {
  const buttonPlayAgain = document.createElement("button");
  const body = document.querySelector("body");

  buttonPlayAgain.innerHTML += "Play again";
  body?.appendChild(buttonPlayAgain);

  buttonPlayAgain.onclick = () => resetDisplay(buttonPlayAgain, moves);
};

const resetDisplay = (
  buttonPlayAgain: HTMLButtonElement,
  moves: AvailableMoves
) => {
  const game = document.getElementById("game-area");

  moves.paper.style.display = "";
  moves.rock.style.display = "";
  moves.scissors.style.display = "";

  moves.paper.onclick = () => selectMove(0, moves);
  moves.scissors.onclick = () => selectMove(1, moves);
  moves.rock.onclick = () => selectMove(2, moves);

  if (game?.hasChildNodes()) game.removeChild(game.children[3]);

  buttonPlayAgain.remove();
};
