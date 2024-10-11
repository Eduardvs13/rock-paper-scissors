function getComputerChoise() {
  let num = Math.floor(Math.random() * 3);
  let choise;
  switch (num) {
    case 0:
      choise = "rock";
      break;
    case 1:
      choise = "paper";
      break;
    case 2:
      choise = "scissors";
      break;
  }
  return choise;
}
function getHumanChoise() {
  let choise = prompt("Choose (rock) (paper) (scissors)", "rock");
  choise = choise.toLowerCase();
  return choise;
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
function playRound(humanChoise, computerChoise, humanScore, computerScore) {
  let result;
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
      console.log("Computer: " + computerChoise);
      console.log("Human: " + humanChoise);
      console.log("Es un empate");
      console.log(
        "Marcador: Human (" + humanScore + ") Computer (" + computerScore + ")"
      );

      break;
    case 1:
      console.log("Computer: " + computerChoise);
      console.log("Human: " + humanChoise);
      console.log("Es una pena has perdido esta ronda");
      computerScore++;
      console.log(
        "Marcador: Human (" + humanScore + ") Computer (" + computerScore + ")"
      );
      break;
    case 2:
      console.log("Computer: " + computerChoise);
      console.log("Human: " + humanChoise);
      console.log("Felicidades has ganado esta ronda");
      humanScore++;
      console.log(
        "Marcador: Human (" + humanScore + ") Computer (" + computerScore + ")"
      );
      break;
  }
  return result;
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let result = 0;
  let cont=1;
  while (humanScore < 3 && computerScore < 3 && cont<6) {
    console.log("Ronda "+cont+":")
    result=playRound(getHumanChoise(), getComputerChoise(), humanScore, computerScore);
    switch (result) {
      case 1:
        computerScore++;
        break;
      case 2:
        humanScore++;
        break;
    }
    cont++;
  }
  if(humanScore>computerScore){
    console.log("Felicitaciones has ganado el juego");
  }
  else if(humanScore==computerScore){
    console.log("El juego ha terminado en empate");
  }
  else{
    console.log("Has perdido el juego mas suerte para la proxima");
  }
}
playGame();