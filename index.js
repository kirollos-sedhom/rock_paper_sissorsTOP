let pscore = 0;
let cscore = 0;
let choices = ["rock", "paper", "scissors"];
let errorflag = 0;
function getcomputerchoice() {
  return choices[Math.floor(Math.random() * 3)];
}
function playround(params) {
  let computer = getcomputerchoice();
  params = prompt("what is your choice?");
  switch (params) {
    case "rock":
      if (computer == "paper") {
        cscore++;
      } else if (computer == "scissors") {
        pscore++;
      }
      break;
    case "paper":
      if (computer == "scissors") {
        cscore++;
      } else if (computer == "rock") {
        pscore++;
      }
      break;
    case "scissors":
      if (computer == "rock") {
        cscore++;
      } else if (computer == "paper") {
        pscore++;
      }
      break;

    default:
      console.log("Error");
      errorflag = 1;
      break;
  }
  console.log(
    `player picked ${params}\ncomputer picked ${computer}\nplayer score: ${pscore}\ncomputer score: ${cscore}`
  );
}
for (let i = 0; i < 5; i++) {
  setTimeout(playround(), 1000);
}
if (pscore > cscore) {
  console.log("PLAYER WINS!!!");
} else if (cscore > pscore) {
  console.log("AI is Dominating...");
} else {
  console.log("Draw!");
}
