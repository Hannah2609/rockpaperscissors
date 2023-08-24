"use strict";

window.addEventListener("DOMContentLoaded", startButtons);

let userChoice;
let comChoice;
const userPlayer = document.querySelector("#player1");
const comPlayer = document.querySelector("#player2");

function startButtons() {
  console.log("start");
  const rockBtn = document.querySelector(".rock");
  const scissorsBtn = document.querySelector(".scissors");
  const paperBtn = document.querySelector(".paper");
  rockBtn.addEventListener("click", defineUserChoice);
  scissorsBtn.addEventListener("click", defineUserChoice);
  paperBtn.addEventListener("click", defineUserChoice);
}

function defineUserChoice() {
  console.log("definere userchoice");
  if (this.classList.contains("rock")) {
    userChoice = "rock";
  } else if (this.classList.contains("paper")) {
    userChoice = "paper";
  } else {
    userChoice = "scissors";
  }

    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    

  generateComputerChoice();
  startSpil();
}

function generateComputerChoice() {
  console.log("generate comChoice");
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    comChoice = "rock";
  } else if (randomChoice === 1) {
    comChoice = "paper";
  } else {
    comChoice = "scissors";
  }
}

function startSpil() {
  console.log("Start spil");

  userPlayer.classList.remove("rock");
  userPlayer.classList.remove("paper");
  userPlayer.classList.remove("scissors");
  comPlayer.classList.remove("rock");
  comPlayer.classList.remove("paper");
  comPlayer.classList.remove("scissors");

  userPlayer.classList.add("shake");
  comPlayer.classList.add("shake");

  userPlayer.addEventListener("animationend", animationEnd);
}

function animationEnd() {
  console.log("animation slut, vis hånd");
  userPlayer.classList.remove("shake");
  comPlayer.classList.remove("shake");

  if (userChoice === "rock") {
    userPlayer.classList.add("rock");
  } else if (userChoice === "paper") {
    userPlayer.classList.add("paper");
  } else {
    userPlayer.classList.add("scissors");
  }

  if (comChoice === "rock") {
    comPlayer.classList.add("rock");
  } else if (comChoice === "paper") {
    comPlayer.classList.add("paper");
  } else {
    comPlayer.classList.add("scissors");
  }

  findResultat();

}

function findResultat(){

console.log("finder resultatet");
let winner;

if (userChoice === "Rock" && comChoice === "paper") {
  winner = "com";
} else if (userChoice === "paper" && comChoice === "rock") {
  winner = "user";
} else if (userChoice === "scissors" && comChoice === "rock") {
  winner = "com";
} else if (userChoice === "paper" && comChoice === "scissors") {
  winner = "com";
} else if (userChoice === "rock" && comChoice === "scissors") {
  winner = "user";
} else if (userChoice === "scissors" && comChoice === "paper") {
  winner = "user";
} else {
    winner = "tied";
}

skriverVinder(winner);
}

function skriverVinder(winner){
    console.log("finder vinderen");

    if (winner === "com") {
        document.querySelector("#lose").classList.remove("hidden");
    }
    if (winner === "user") {
      document.querySelector("#win").classList.remove("hidden");
    }
    else {
        document.querySelector("#draw").classList.remove("hidden");
    } 
}