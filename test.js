
let Player1 = prompt("Enter Player 1 name");
alert("Bonjour " + Player1);


// Player 1 choice
let player1Choice = prompt ("Choose between Rock, Cissors and Paper")

// Function to capitalise the player's choice so that it matches the acceptable answers - FAILED SO FAR
// Something with .toUppercase() 

// Loop to check that the player's choice is valid - FAILED SO FAR
/*
while (player1Choice != "Cissors" && "Rock" && "Paper") {
  alert ("Wrong choice, please enter Rock, Cissors or Paper");
  player1Choice = prompt ("Choose between Rock, Cissors and Paper");
  }
*/


console.log(player1Choice);

let value1 = " ";

// Assign value to Player 1 choice
switch (player1Choice) {
  case player1Choice = "Rock":
  value1 = 0;
    break;
  case player1Choice = "Paper":
    value1 = 1;
    break;
  case player1Choice = "Cissors":
    value1 = 2;
    break;
  default: value1 = "Error";
};

console.log(value1);

// Assign random choice to Player 2 (Computer)
let values = ["Rock", "Paper", "Cissors"];
var value2 = Math.floor((Math.random() * values.length));

console.log(value2);

let player2Choice = " "

switch (value2) {
  case value2 = 0:
  player2Choice = "Rock";
  break;
  case value2 = 1:
  player2Choice = "Paper";
  break
  case value2 = 2:
  player2Choice = "Cissors";
  break;
}

console.log(player1Choice);
console.log(player2Choice);

// Display players choice
alert (Player1 + " has chosen " + player1Choice);
alert ("Player 2 (CPU) has chosen " + player2Choice);

// Compute result
var result = value2 - value1;
let outcome = "";

console.log(result);

// Display result
switch (result) {
  case result = 0:
  outcome = "Same choice - Draw";
  break;
  case result = 1 || -2:
  outcome = player2Choice + " beats " + player1Choice + ". Player 2 (CPU) Wins!";
  break;
  case result = 2 || -1:
  outcome = player1Choice + " beats " + player2Choice + ". " +  Player1 + " Wins!";
  break;
  default: alert("Error - Wrong choice");
}

alert(outcome);
