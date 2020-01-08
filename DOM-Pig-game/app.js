/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Scores instead of having 2 variable have an array

var scores, roundScore, activePlayer, gamePlaying;

init();

// random number for dice
/* *************************
Math.random()*6 because Math.random() gives number in decimal between 0 and 1
We use floor to get the integer part alone and add one coz we need numbers from 1 to 6
****************************/

// dice = Math.floor(Math.random()*6 + 1);

// TO get DOM Access use document
/* 
queryselector -> just like CSS it lets us select stuff,
only difference it selects the first element it finds.
Now when we have the first random number generated we need to add it to current score -> use  html page id tag 'current-0'
USE # TO SELECT THE PARTICULAR ID TAG

We use the activeplayer variable to keep track of who is playing. use type coercion to attach 
*/
// document.querySelector('#current-'+ activePlayer).textContent = dice;

// inner html if you want to format the text content.
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>'+ dice + '</em>';

// To store the value of global/current score in a variable

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

/* 
Next, we want the dice to show when we click the roll button and
score should be added to current -> Use Event listener

https://developer.mozilla.org/en-US/docs/Web/Events
 */

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    /* On click we need :
            1. Random number
            2. Display the result
            3. Update the round score only IF rolled number !== 1
            
            */

    // 1. Random number generation
    var dice = Math.floor(Math.random() * 6 + 1);

    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";

    // Change the image src for respective random number
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update the round score only IF rolled number !== 1
    //    The Id's in use will be score-0, score-1, current-0, current-1

    // if(dice === 1 && activePlayer === 0 ){
    //     document.getElementById('current-0').textContent = '0';
    //     activePlayer = 1;
    // }

    //      !== dosent do type coercion but != does. === dosent do , == does.
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Call next player method
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if(gamePlaying){
    /*
            1.  current becomes 0 and adds that score to global
            2.  hide the dice
            3.  toggle focus to next player
            4.  Check if player won the game
            5.  DRY - Dont repeat yourself, use nextPlayer() function to call.            
            */

  scores[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  roundScore = 0;

  // Check if the player has WON
  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
    document.querySelector(".dice").style.display = "none";
    // Add CSS to winner of player
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");

    // ONCE there is a winner stop the roll dice button from working -- Have a state variable which will be true if playing else false
    // document.querySelector(".btn-roll").setAttribute("disabled", true);
    gamePlaying = false;
  } else {
    nextPlayer();
  }
  }
  
  
  
});

// document.querySelector(".btn-new").addEventListener("click", function() {
//   /*
//         Game Initialization function:
//         1. Set all scores to zero

//     */
//     init();
// });

// NO NEED OF ANONYMOUS FN IF CALLING INIT()
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  gamePlaying = true;
  // flag to keep track of current player
  activePlayer = 0;

  /*

So we can use the queryselector to manupilate CSS property too
For our dice rolling, we want to hide the dice when we are not rolling it.
DICE -> in html is identified using class. For selecting class element we use .dice
and then hide it.
*/

  document.querySelector(".dice").style.display = "none";

  // We use getElementById, its faster than queryselector as we will be using the score-0,1 and current-0,1 tags
  // Set them to 0
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  // Make the focus back to player 1 and make it active, remove winner classes

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  // document.querySelector('#current-'+ activePlayer).textContent = roundScore;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Now to shift focus of dot to next player, also change of the background to grey and player 1 text to be grey
  // This is done by checking the class="player-0-panel active"

  // But this method only shifts once and dosent switch back to player 1, FOR THAT USE TOGGLE.
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  // USING TOGGLE
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}
