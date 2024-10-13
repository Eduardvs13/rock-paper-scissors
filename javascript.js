function getComputerChoise() {
  const choises = ["rock", "paper", "scissors"];
  let number = Math.floor(Math.random() * 3);
  let choise = choises[number];
  return choises[number];
}
function getResult(choise, x, y, z) {
  let result;
  switch (choise) {
    case "rock":
      result = x;
      break;
    case "paper":
      result = y;
      break;
    case "scissors":
      result = z;
      break;
  }
  return result;
}
function playRound(humanChoise, score) {
  let result;
  let computerChoise = getComputerChoise();
  let stringResult = document.querySelector("#result");
  switch (humanChoise) {
    case "rock":
      result = getResult(computerChoise, 0, 1, 2);
      break;
    case "paper":
      result = getResult(computerChoise, 2, 0, 1);
      break;
    case "scissors":
      result = getResult(computerChoise, 1, 2, 0);
      break;
  }
  switch (result) {
    case 0:
      stringResult.textContent =
        "You both chose " + computerChoise + ". It's a tie.";
      break;
    case 1:
      stringResult.textContent =
        "It seems the computer has outsmarted you this time. It chose " +
        computerChoise +
        ", while you chose " +
        humanChoise +
        ".";
      score[1]++;
      break;
    case 2:
      stringResult.textContent =
        "You win! The computer chose " +
        computerChoise +
        " and you chose " +
        humanChoise +
        ".";
      score[0]++;
      break;
  }
}
function playGame() {
  const buttons = document.querySelectorAll("button");
  const scoreBoard = document.querySelector("#scoreBoard");
  let score = [0, 0];
  let round = document.querySelector("#round");
  round.textContent = 1;
  scoreBoard.textContent = "Player: " + score[0] + " CPU: " + score[1];
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let choise = button.id;
      playRound(choise, score);
      round.textContent++;
      scoreBoard.textContent = "Player: " + score[0] + " CPU: " + score[1];
    });
  });
}
playGame();
