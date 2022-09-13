import "./style.css";
import "./moves.css";

const winner = document.createElement("h1") as HTMLHeadingElement;
const body = document.querySelector("body") as HTMLBodyElement;
const gameArea = document.querySelector("#game-area") as HTMLElement;
const scoreboard = document.getElementById("score") as HTMLHeadingElement;
const rules = document.getElementById("rules") as HTMLButtonElement;

let userPick: number;
let housePick: number;
let score: number;

score = 0;

interface AvailableMoves extends MovesContainer {
  paper: HTMLButtonElement;
  scissors: HTMLButtonElement;
  rock: HTMLButtonElement;
}

interface MovesContainer {
  paperCont: HTMLDivElement;
  scissorsCont: HTMLDivElement;
  rockCont: HTMLDivElement;
}

const moves: AvailableMoves = <AvailableMoves>{
  paper: document.getElementById("paper"),
  scissors: document.getElementById("scissors"),
  rock: document.getElementById("rock"),

  paperCont: document.getElementById("paper-container"),
  scissorsCont: document.getElementById("scissors-container"),
  rockCont: document.getElementById("rock-container"),
};

moves.paper.onclick = () => playerMove(0, moves, moves);
moves.scissors.onclick = () => playerMove(1, moves, moves);
moves.rock.onclick = () => playerMove(2, moves, moves);

rules.onclick = () => showRules();

const showRules = () => {
  const rules = document.createElement("div");

  rules.setAttribute("id", "show-rules");
  rules.innerHTML += "<p>RULES</p>";
  rules.innerHTML += "<button id='close'></button>";
  body!.appendChild(rules);

  const closeButton = document.getElementById("close") as HTMLButtonElement;
  closeButton.onclick = () => rules.remove();
};

const playerMove = (
  pick: number,
  moves: MovesContainer,
  button: AvailableMoves
) => {
  switch (pick) {
    case 0:
      userPick = 0;
      button.paper.disabled = true;
      hideUnselectedMoves(moves.paperCont, moves.scissorsCont, moves.rockCont);
      gameArea.style.height = "170px";
      moves.paperCont.innerHTML += "<h2 id='userPick'>YOU PICKED</h2>";
      houseMove();
      return;
    case 1:
      userPick = 1;
      button.scissors.disabled = true;
      hideUnselectedMoves(moves.scissorsCont, moves.paperCont, moves.rockCont);
      gameArea.style.height = "170px";
      houseMove();
      return;
    case 2:
      userPick = 2;
      button.rock.disabled = true;
      hideUnselectedMoves(moves.rockCont, moves.paperCont, moves.scissorsCont);
      gameArea.style.height = "170px";
      houseMove();
      return;
  }
};

const houseMove = () => {
  const availableMoves = Array(0, 1, 2);
  const div = document.createElement("div");
  const button = document.createElement("button");

  const randomMove =
    availableMoves[(availableMoves.length * Math.random()) | 0];

  const showHouseMove = () => {
    switch (randomMove) {
      case 0:
        housePick = 0;
        // @ts-ignore
        button.removeAttribute("id", "wait");
        div.setAttribute("id", "paper-container");
        button.setAttribute("id", "paper");
        return;
      case 1:
        housePick = 1;
        // @ts-ignore
        button.removeAttribute("id", "wait");
        div.setAttribute("id", "scissors-container");
        button.setAttribute("id", "scissors");
        return;
      case 2:
        housePick = 2;
        // @ts-ignore
        button.removeAttribute("id", "wait");
        div.setAttribute("id", "rock-container");
        button.setAttribute("id", "rock");
        return;
    }
  };

  gameArea.appendChild(div);
  div.appendChild(button);
  button.setAttribute("id", "wait");
  setTimeout(showHouseMove, 1000);
  setTimeout(selectWinner, 1500);
  setTimeout(playAgain, 1500);
};

const hideUnselectedMoves = (
  playerSelection: HTMLDivElement,
  hideUnselected1: HTMLDivElement,
  hideUnselected2: HTMLDivElement
) => {
  playerSelection.onclick = null;
  playerSelection.style.display = "";
  hideUnselected1.style.display = "none";
  hideUnselected2.style.display = "none";
  gameArea.style.background = "none";
};

const selectWinner = () => {
  if (userPick === housePick) {
    winner.innerHTML = "DRAW";
    body.appendChild(winner);
  } else if ((housePick + 1) % 3 === userPick) {
    score++;
    scoreboard!.innerHTML = `${score}`;
    winner.innerHTML = "YOU WIN";
    body.appendChild(winner);
  } else {
    winner.innerHTML = "YOU LOSE";
    body.appendChild(winner);
  }
};

const playAgain = () => {
  const buttonPlayAgain = document.createElement("button");
  buttonPlayAgain.setAttribute("id", "play-again");

  buttonPlayAgain.innerHTML += "PLAY AGAIN";
  body.appendChild(buttonPlayAgain);

  buttonPlayAgain.onclick = () => resetDisplay(buttonPlayAgain, moves);
};

const resetDisplay = (
  buttonPlayAgain: HTMLButtonElement,
  moves: AvailableMoves
) => {
  const game = document.getElementById("game-area") as HTMLElement;

  moves.paperCont.style.display = "";
  moves.rockCont.style.display = "";
  moves.scissorsCont.style.display = "";

  gameArea.style.background = "";
  gameArea.style.height = "290px";

  moves.paper.disabled = false;
  moves.scissors.disabled = false;
  moves.rock.disabled = false;

  moves.paper.onclick = () => playerMove(0, moves, moves);
  moves.scissors.onclick = () => playerMove(1, moves, moves);
  moves.rock.onclick = () => playerMove(2, moves, moves);

  if (game.hasChildNodes()) game.removeChild(game.children[3]);

  buttonPlayAgain.remove();
  winner.remove();
};
