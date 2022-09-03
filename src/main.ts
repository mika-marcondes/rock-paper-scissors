import "./style.css";

let userPick: number;
let housePick: number;
let score: number;

score = 0;

const availableMoves = Array(0, 1, 2);
const body = document.querySelector("body");
const winner = document.createElement("h1");
const scoreboard = document.getElementById("score");
const rules = document.getElementById("rules") as HTMLButtonElement;

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

rules.onclick = () => showRules();

const showRules = () => {
  const rules = document.createElement("div");

  rules.setAttribute("id", "show-rules");
  rules.innerHTML += "<p>RULES</p>";
  rules.innerHTML += "<img src='../public/icon-close.svg' alt='Close'>";
  body!.appendChild(rules);
};

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
  const randomMove =
    availableMoves[(availableMoves.length * Math.random()) | 0];

  const showHouseMove = () => {
    switch (randomMove) {
      case 0:
        housePick = 0;
        button.setAttribute("id", "paper");
        return;
      case 1:
        housePick = 1;
        button.setAttribute("id", "scissors");
        return;
      case 2:
        housePick = 2;
        button.setAttribute("id", "rock");
        return;
    }
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
  setTimeout(selectWinner, 1500);
  setTimeout(playAgain, 1500);
};

const selectWinner = () => {
  if (userPick === housePick) {
    winner.innerHTML = "DRAW";
    body?.appendChild(winner);
  } else if ((housePick + 1) % 3 === userPick) {
    score++;
    scoreboard!.innerHTML = `${score}`;
    winner.innerHTML = "YOU WIN";
    body?.appendChild(winner);
  } else {
    winner.innerHTML = "YOU LOSE";
    body?.appendChild(winner);
  }
};

const playAgain = () => {
  const buttonPlayAgain = document.createElement("button");

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
  winner.remove();
};
