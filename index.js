let pscore = 0;
let cscore = 0;
let choices = ["rock", "paper", "scissors"];
let errorflag = 0;
let endgame = 0;
function getcomputerchoice() {
  return choices[Math.floor(Math.random() * 3)];
}
function playround(param) {
  if (pscore === 5 || cscore === 5) {
    if (endgame == 0) {
      endgame = 1;
      if (pscore > cscore) {
        p.textContent += "\nPLAYER WINS!!!";
        return;
      } else if (cscore > pscore) {
        p.textContent += "\nAI is Dominating...";
        return;
      } else {
        p.textContent += "\nDraw!";
        return;
      }
    } else {
      return;
    }
  }
  let computer = getcomputerchoice();
  // params = prompt("what is your choice?");
  param = this.textContent;
  switch (param) {
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

  p.textContent = `player picked ${param},computer picked ${computer}  ,\r\nplayer score: ${pscore},\r\ncomputer score: ${cscore}`;
  p.setAttribute("style", "white-space: pre;");
}
const mbody = document.createElement("div");
const p = document.createElement("p");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "rock";
rock.addEventListener("click", playround);
paper.addEventListener("click", playround);
scissors.addEventListener("click", playround);
paper.textContent = "paper";
scissors.textContent = "scissors";

document.body.appendChild(rock);
document.body.appendChild(scissors);
document.body.appendChild(paper);
document.body.appendChild(mbody);
document.body.appendChild(p);
// for (let i = 0; i < 5; i++) {
//   setTimeout(playround(), 1000);
// }
// if (pscore > cscore) {
//   console.log("PLAYER WINS!!!");
// } else if (cscore > pscore) {
//   console.log("AI is Dominating...");
// } else {
//   console.log("Draw!");
// }
