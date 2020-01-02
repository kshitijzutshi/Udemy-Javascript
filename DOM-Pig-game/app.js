/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Scores instead of having 2 variable have an array

var scores,roundScore,activePlayer,dice;

scores = [0,0];
roundScore = 0;

// flag to keep track of current player
activePlayer = 0;

// random number for dice
/* *************************
Math.random()*6 because Math.random() gives number in decimal between 0 and 1
We use floor to get the integer part alone and add one coz we need numbers from 1 to 6
****************************/
dice = Math.floor(Math.random()*6 + 1);

// TO get DOM Access use document
/* 
queryselector -> just like CSS it lets us select stuff,
only difference it selects the first element it finds.
Now when we have the first random number generated we need to add it to current score -> use  html page id tag 'current-0'
USE # TO SELECT THE PARTICULAR ID TAG

We use the activeplayer variable to keep track of who is playing. use type coercion to attach 
*/
document.querySelector('#current-'+ activePlayer).textContent = dice;

// inner html if you want to format the text content.
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>'+ dice + '</em>';

// To store the value of global/current score in a variable

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

/*

So we can use the queryselector to manupilate CSS property too
For our dice rolling, we want to hide the dice when we are not rolling it.
DICE -> in html is identified using class. For selecting class element we use .dice
and then hide it.
*/

document.querySelector('.dice').style.display = 'none';

// Next, we want the dice to show when we click the roll button and
// score should be added to current

document.querySelector('.ion-ios-plus-outline').

