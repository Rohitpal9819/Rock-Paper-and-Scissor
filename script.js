let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore1 = document.querySelector("#userScore");
const compScore1 = document.querySelector("#compScore");

const genComChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const gameDraw = () => {
  //console.log("Game was Draw");
  msg.innerText = "Game is Drawn. Play again.";
  msg.style.backgroundColor = "#081b31";
};




const ShowWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    //console.log("you win");
    userScore++;
    userScore1.innerText = userScore;
    msg.innerText = `You Win ! your ${userChoice}  beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    //console.log("you loose");
    compScore++;
    compScore1.innerText = compScore;
    msg.innerText = `You Loose ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};




const playGame = (userChoice) => {
  console.log("user Choice = ", userChoice);
  // genrate computer choice
  const compChoice = genComChoice();
  console.log("computer choice = ", compChoice);

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock scissor
      userWin = compChoice === "scissor" ? true : false;
    } else {
      // rock paper
      userWin = compChoice === "rock" ? false : true;
    }

    ShowWinner(userWin, userChoice, compChoice);
  }
};




choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
