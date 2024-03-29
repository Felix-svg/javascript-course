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
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }

  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You lose";
    }
    
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissors") {
      result = "You win";
    }
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}
