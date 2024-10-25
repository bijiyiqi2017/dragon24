const levels = [
  {
    level: 1,
    theme: "Fruits",
    words: [
      { original: "apple", scrambled: "elppa" },
      { original: "banana", scrambled: "nanaba" },
      { original: "orange", scrambled: "egnaro" },
      { original: "grape", scrambled: "eparg" },
      { original: "kiwi", scrambled: "wiik" },
      { original: "dragon fruit", scrambled: "gondar tufti" },
      { original: "watermelon", scrambled: "lonetremwa" },
      { original: "pineapple", scrambled: "enipapple" },
      { original: "cherry", scrambled: "yrrehc" },
      { original: "pomegranate", scrambled: "garetnapome" }
    ],
    color: "#FFCC00"
  },
  {
    level: 2,
    theme: "Animals",
    words: [
      { original: "lion", scrambled: "noil" },
      { original: "tiger", scrambled: "griet" },
      { original: "elephant", scrambled: "anlehtep" },
      { original: "zebra", scrambled: "breza" },
      { original: "giraffe", scrambled: "ffairge" },
      { original: "dolphin", scrambled: "phdilno" },
      { original: "eagle", scrambled: "lagee" },
      { original: "rabbit", scrambled: "tirbab" },
      { original: "kangaroo", scrambled: "oraagkon" },
      { original: "panda", scrambled: "dapna" }
    ],
    color: "#FF6600"
  },
  {
    level: 3,
    theme: "Colors",
    words: [
      { original: "red", scrambled: "der" },
      { original: "blue", scrambled: "eulb" },
      { original: "green", scrambled: "neerg" },
      { original: "yellow", scrambled: "wolley" },
      { original: "purple", scrambled: "elprup" },
      { original: "pink", scrambled: "knip" },
      { original: "black", scrambled: "kcalb" },
      { original: "white", scrambled: "etihw" },
      { original: "brown", scrambled: "nworb" },
      { original: "grey", scrambled: "yerg" }
    ],
    color: "#3399FF"
  },
  {
    level: 4,
    theme: "Food",
    words: [
      { original: "pizza", scrambled: "zzapi" },
      { original: "burger", scrambled: "regrub" },
      { original: "pasta", scrambled: "atsap" },
      { original: "sushi", scrambled: "ihsus" },
      { original: "sandwich", scrambled: "hciwdnas" },
      { original: "salad", scrambled: "dalas" },
      { original: "taco", scrambled: "ocat" },
      { original: "steak", scrambled: "kaets" },
      { original: "omelette", scrambled: "eltetemo" },
      { original: "soup", scrambled: "puos" }
    ],
    color: "#66CC66"
  },
  {
    level: 5,
    theme: "Sports",
    words: [
      { original: "soccer", scrambled: "reccos" },
      { original: "basketball", scrambled: "llabteksab" },
      { original: "tennis", scrambled: "sinnet" },
      { original: "baseball", scrambled: "llabesab" },
      { original: "cricket", scrambled: "tekcirc" },
      { original: "rugby", scrambled: "ybgr" },
      { original: "volleyball", scrambled: "llabeyllov" },
      { original: "hockey", scrambled: "yekcoh" },
      { original: "golf", scrambled: "flog" },
      { original: "swimming", scrambled: "gnimmiws" }
    ],
    color: "#FF3333"
  }
];

let currentLevelIndex = 0;
let currentWordIndex = 0;

function displayScrambledWord() {
  const level = levels[currentLevelIndex];
  const scrambledWordElement = document.getElementById("scrambled-word");
  const levelTextElement = document.getElementById("level-text");
  const inputBoxElement = document.getElementById("user-input");

  scrambledWordElement.textContent = level.words[currentWordIndex].scrambled;
  levelTextElement.textContent = `Level ${level.level}: ${level.theme}`;
  inputBoxElement.style.borderColor = level.color;
}

function checkAnswer() {
  const userAnswer = document.getElementById("user-input").value.trim().toLowerCase();
  const correctAnswer = levels[currentLevelIndex].words[currentWordIndex].original.toLowerCase();

  if (userAnswer === correctAnswer) {
    currentWordIndex++;
    if (currentWordIndex >= levels[currentLevelIndex].words.length) {
      currentWordIndex = 0;
      currentLevelIndex++;
      if (currentLevelIndex >= levels.length) {
        currentLevelIndex = 0;
      }
    }
    displayScrambledWord();
    document.getElementById("result").textContent = "Correct! This is the next word.";
  } else {
    document.getElementById("result").textContent = "Incorrect! Try again.";
  }

  document.getElementById("user-input").value = "";
}

// Event listener for level selection
document.getElementById("level-select").addEventListener("change", function () {
  currentLevelIndex = parseInt(this.value);
  currentWordIndex = 0; // Reset word index
  displayScrambledWord();
});

// Night mode toggle functionality
document.getElementById("night-mode-toggle").addEventListener("change", function () {
  document.body.classList.toggle("night-mode");
});

// Video play/pause functionality
document.getElementById("play-pause").addEventListener("click", function () {
  const video = document.getElementById("intro-video");
  if (video.paused) {
    video.play();
    this.textContent = "Pause";
  } else {
    video.pause();
    this.textContent = "Play";
  }
});

// Video close functionality
document.getElementById("close-video").addEventListener("click", function () {
  const videoOverlay = document.getElementById("video-overlay");
  videoOverlay.style.display = "none";
});

// Initialize the game with the first scrambled word
displayScrambledWord();

module.exports = {
  levels,
  displayScrambledWord,
  checkAnswer
};
