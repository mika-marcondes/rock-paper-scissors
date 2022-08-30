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

moves.paper.onclick = () => playerMove(0, moves);
moves.scissors.onclick = () => playerMove(1, moves);
moves.rock.onclick = () => playerMove(2, moves);

let userPick: number;

const playerMove = (pick: number, moves: AvailableMoves) => {
  switch (pick) {
    case 0:
      userPick = 0;
      showSelectedMove(moves.paper, moves.rock, moves.scissors);
      return;
    case 1:
      userPick = 1;
      showSelectedMove(moves.scissors, moves.paper, moves.rock);
      return;
    case 2:
      userPick = 2;
      showSelectedMove(moves.rock, moves.paper, moves.scissors);
      return;
  }
};

const houseMove = () => {
  const gameArea: HTMLElement | null = document.querySelector("#game-area");
  const button = document.createElement("button");

  const availableMoves = Array("paper", "scissors", "rock");
  const housePick = availableMoves[(availableMoves.length * Math.random()) | 0];

  const showHouseMove = () => {
    console.log(housePick);
    button.setAttribute("id", `${housePick}`);
  };

  gameArea?.appendChild(button);
  setTimeout(showHouseMove, 1000);
};

const showSelectedMove = (
  playerSelection: HTMLButtonElement,
  hideUnselected1: HTMLButtonElement,
  hideUnselected2: HTMLButtonElement
) => {
  playerSelection.onclick = null;
  playerSelection.style.display = "";
  hideUnselected1.style.display = "none";
  hideUnselected2.style.display = "none";
  houseMove();
  selectWinner();
  setTimeout(playAgain, 1500);
};

const selectWinner = () => {
  console.log(userPick);
  // console.log(housePick);
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

  moves.paper.onclick = () => playerMove(0, moves);
  moves.scissors.onclick = () => playerMove(1, moves);
  moves.rock.onclick = () => playerMove(2, moves);

  if (game?.hasChildNodes()) game.removeChild(game.children[3]);

  buttonPlayAgain.remove();
};
