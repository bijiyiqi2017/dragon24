// List of words for the game
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
    color: "#FFCC00" // yellow
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
    color: "#FF6600" // orange
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
    color: "#3399FF" // blue
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
    color: "#66CC66" // green
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
    color: "#FF3333" // red
  }
  // Add more levels here...
];

let currentLevelIndex = 0;
let currentWordIndex = 0;

// Function to display the scrambled word
function displayScrambledWord() {
  const level = levels[currentLevelIndex];
  const scrambledWordElement = document.getElementById("scrambled-word");
  const levelTextElement = document.getElementById("level-text");
  const inputBoxElement = document.getElementById("user-input");


  scrambledWordElement.textContent = level.words[currentWordIndex].scrambled;
  // Update the level text
  levelTextElement.textContent = `Level ${level.level}: ${level.theme}`;
  // Update the input box border color
  inputBoxElement.style.borderColor = level.color;
}

// Function to check the answer
function checkAnswer() {
  const userAnswer = document.getElementById("user-input").value.trim().toLowerCase();
  const correctAnswer = levels[currentLevelIndex].words[currentWordIndex].original.toLowerCase();

  if (userAnswer === correctAnswer) {
   
    // Move to the next word
    currentWordIndex = (currentWordIndex + 1) ;
    // If current word index exceeds the number of words, move to the next level
    if (currentWordIndex >= levels[currentLevelIndex].words.length) {
      currentWordIndex = 0; // Reset word index
      currentLevelIndex = (currentLevelIndex + 1) ; // Move to next level
      if(currentLevelIndex >=levels.length) {
        currentLevelIndex = 0;
        document.getElementById("result").textContent = "You passed all the levels !";
      }
      else {
        document.getElementById("result").textContent = "VICTORY ! You moved to next level.";
      }
    }
    else {
      document.getElementById("result").textContent = "Correct ! This is the next word.";
    }
    displayScrambledWord();
    document.getElementById("user-input").value = "";  // Clear the input
  } else {
    document.getElementById("result").textContent = "Incorrect! Try again.";
  }
}

// Initialize the first scrambled word when the page loads
window.onload = function() {
  displayScrambledWord();
};

// Get the video element and the play/pause button
const video = document.getElementById('intro-video');
const playPauseBtn = document.getElementById('play-pause-btn');

// Function to toggle between play and pause
function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
}

// Add click event listener to the button
playPauseBtn.addEventListener('click', togglePlayPause);

