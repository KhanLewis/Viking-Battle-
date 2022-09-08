/**
 * Displays all variables used within the javascript code 
 * to enable the fucntion of the game.
 */


const weapons = document.getElementsByClassName('weapon');
let battlesWon = document.getElementById('won');
let battlesLost = document.getElementById('lost');
let battlesDraw = document.getElementById('draw');
let playersWeapon;
let randomWeapon;
let computersWeapon;
let displayMessageResult;
let message;

/** 
 *  Adds event listner to the buttons so the user can select a weapon
 * upon user clicking a chosen weapon initiates the game function.
 */

window.addEventListener('DOMContentLoaded', initialiseGame);

function initialiseGame() {
  for (playersWeapon of weapons) {
    playersWeapon.addEventListener('click', function () {
      playersWeapon = this.getAttribute("data-weapons");
      if (playersWeapon === "sword") {
        playersWeapon === 0;
      } else if (playersWeapon === "shield") {
        playersWeapon === 1;
      } else {
        playersWeapon === 2;
      }
      playGame(playersWeapon);
    });
  }
}

/**
 * This enables the computer to select a random weapon
 * aswell as basic game function
 */

function playGame(playersWeapon) {
  randomWeapon = Math.floor(Math.random() * weapons.length);
  if (randomWeapon === 0) {
    computersWeapon = "sword";
  }
  if (randomWeapon === 1) {
    computersWeapon = "shield";
  }
  if (randomWeapon === 2) {
    computersWeapon = "axe";
  }
  possibleChances();
  displayMessage(playersWeapon, computersWeapon);

}

/**
 * Adds points to battles won/lost or drawn, also displays message 
 * depending on result.
 */

function possibleChances() {

  // A Draw: 

  if (playersWeapon === computersWeapon) {
    ++battlesDraw.innerText;
    displayMessageResult = `You chose ${playersWeapon} and your opponent chose ${computersWeapon}. ITS A DRAW`;

    // Chances for player to win:

  } else if (playersWeapon === 'axe' && computersWeapon === 'shield') {
    ++battlesWon.innerText;
    displayMessageResult = `You chose ${playersWeapon} and your opponent chose ${computersWeapon}. YOU WON!`;

  } else if (playersWeapon === 'shield' && computersWeapon === 'sword') {
    ++battlesWon.innerText;
    displayMessageResult = `You chose ${playersWeapon} and your opponent chose ${computersWeapon}. YOU WON!`;


  } else if (playersWeapon === 'sword' && computersWeapon === 'axe') {
    ++battlesWon.innerText;
    displayMessageResult = `You chose ${playersWeapon} and your opponent chose ${computersWeapon}. YOU WON!`;

    // Chance for computer to win: 

  } else if (playersWeapon === 'sword' && computersWeapon === 'shield') {
    ++battlesLost.innerText;
    displayMessageResult = `You chose ${playersWeapon} and your opponent chose ${computersWeapon}. YOU LOST!`;


  } else if (playersWeapon === 'shield' && computersWeapon === 'axe') {
    ++battlesLost.innerText;
    displayMessageResult = `You chose ${playersWeapon} and your opponent chose ${computersWeapon}. YOU LOST!`;


  } else if (playersWeapon === 'axe' && computersWeapon === 'sword') {
    ++battlesLost.innerText;
    displayMessageResult = `You chose ${playersWeapon} and your opponent chose ${computersWeapon}. YOU LOST!`;

  }
}

// Displays a message within the game area div.
function displayMessage() {
  message = document.getElementById('display-message');
  message.innerText = displayMessageResult;
}