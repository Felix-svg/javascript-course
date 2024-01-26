function rockMove() {
  const rock = document.getElementById("rock");
  rock.addEventListener("click", () => {
    playGame("rock");
  });
}
rockMove();

function paperMove() {
  const paper = document.getElementById("paper");
  paper.addEventListener("click", () => {
    playGame("paper");
  });
}
paperMove();

function scissorsMove() {
  const scissors = document.getElementById("scissors");
  scissors.addEventListener("click", () => {
    playGame("scissors");
  });
}
scissorsMove();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  console.log(computerMove);
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (computerMove === "rock") {
    result = "You lose";
  } else if (computerMove === "paper") {
    result = "You win";
  } else if (computerMove === "scissors") {
    result = "Tie";
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}
