const students = ["alisa", "pervane", "tariyel", "ali", "fatima", "sevinc"];

let word;
let rightGuessCount;
let answer = [];
let rightGuess;
let left = 9;
let wins = 0;
let losses = 0;


//sozun secilmesi
function random() {
  let random = Math.floor(Math.random() * students.length);
  word = students[random];
}

//xett
function xett() {
  for (i = 0; i < word.length; i++) {
    answer[i] = "_"
  }

  document.getElementById("guess").innerHTML = answer.join(" ");

}

//qalan texminler
function guessesLeft() {
  document.getElementById('left').innerHTML = left;

}

//qazanilan oyun sayi
function winscore() {
  document.getElementById('wins').innerHTML = wins;
}

//uduzulan
function lossesScore() {
  document.getElementById('loss').innerHTML = losses;
}

//sehv texminler 
function wrongGuess(char) {
  document.getElementById('wrong').innerHTML += char + ", "
}

//oyun
function startGame() {
  left = 9;
  answer = [];
  document.getElementById("wrong").innerHTML = "";
  rightGuessCount = 0;
  rightGuess = false;
  guessesLeft();
  random();
  xett();

}

startGame();
winscore();
lossesScore();

//herf
function herf(char, str) {
  for (let j = 0; j < str.length; j++) {
    if (char === str[j]) {
      rightGuess = true;
      answer.splice(j, 1, char);
      rightGuessCount++;
    }
  }
  document.getElementById("guess").innerHTML = answer.join(" ")
}

//uzunluq

let match = function () {
  if (word.length == rightGuessCount)
    return true;
  else return false
}

document.onkeyup = function (e) {
  let userGuess = e.key.toLowerCase();
  herf(userGuess, word);

if (rightGuess) {
  rightGuess = false;
  if (match()) {
    wins++;
    winscore();
    startGame();
  }}

  else {
    left--
    if (left < 1) {

      startGame()
      losses++
      lossesScore()
    }
    else {

      wrongGuess(userGuess)
      guessesLeft()
    }
  }
}
