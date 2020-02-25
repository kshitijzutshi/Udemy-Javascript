
var scores, roundScore, activePlayer,gamePlaying;

init();
var prevDice;

document.querySelector(".btn-roll").addEventListener("click", function() {
  
if(gamePlaying){

  var dice = Math.floor(Math.random() * 6 + 1);

 
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = 'block';
  
  diceDOM.src = "dice-" + dice + ".png";


  
  if(dice === 6 && prevDice === 6){
    scores[activePlayer] = 0;
    document.querySelector("#scores-" + activePlayer).textContent = 0;
  }
  else if (dice !== 1) {
    // Add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } 
  
  else {
    // Call next player method
    nextPlayer();
  }
  prevDice = dice;
}
});
// changes


document.querySelector(".btn-hold").addEventListener("click", function() {
 

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

    // ONCE there is a winner stop the roll dice button from working
    document.querySelector(".btn-roll").setAttribute("disabled", true);
  } else {
    nextPlayer();
  }
});



document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;

  // flag to keep track of current player
  activePlayer = 0;

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
 
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

 
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}
