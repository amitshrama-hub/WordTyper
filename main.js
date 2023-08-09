window.addEventListener("load", init);

let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "plagiarize",
  "exhibition",
  "mutual",
  "taste",
  "achieve",
  "beam",
  "fast",
  "metal",
  "colorful",
  "nuclear",
  "convention",
  "operation",
  "favourite",
  "ready",
  "chorus",
  "association",
  "harmony",
  "hiccup",
  "absent",
  "degree",
  "sentence",
  "greeting",
  "carve",
  "active",
  "jewel",
  "career",
  "seller",
  "gregarious",
  "floor",
  "stall",
  "monopoly",
  "flesh",
  "return",
];

function init() {
  showWord(words);

  wordInput.addEventListener("input", startMatch);

  setInterval(countdown, 1000);

  setInterval(checkStatus);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) isPlaying = false;

  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
