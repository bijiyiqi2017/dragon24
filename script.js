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
let countdown;
let timeLeft=60;
let isPaused = false;
let gameStarted = false;    


function displayScrambledWord() {
  const level = levels[currentLevelIndex];
  const scrambledWordElement = document.querySelector(".scrambled-word");
  const levelTextElement = document.getElementById("level-text");
  const inputBoxElement = document.getElementById("user-input");

  scrambledWordElement.textContent = level.words[currentWordIndex].scrambled;
  levelTextElement.textContent = `Level ${level.level}: ${level.theme}`;
  inputBoxElement.style.borderColor = level.color;
}


function startTimer() {
  clearInterval(countdown);
  timeLeft = 60;
  updateTimerDisplay();

  countdown = setInterval(() => {
    if(!isPaused){
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const timerDisplay = document.getElementsByClassName("timer")[0];
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeLeft--;

    if (timeLeft <= 30) {
      timerDisplay.classList.add("low-time");
    } else {
      timerDisplay.classList.remove("low-time");
    }

    if (timeLeft <= 10) {
      timerDisplay.classList.add("low-low-time");
    } else {
      timerDisplay.classList.remove("low-low-time");
    }

    if (timeLeft < 0) {
      clearInterval(countdown);
      document.querySelector(".scrambled-word").textContent = "";
      document.getElementById("result").textContent = "Game Over! Time's up.";
    }
  }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timerDisplay = document.getElementsByClassName("timer")[0];
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("pause-button").addEventListener("click", () => {
  isPaused = !isPaused; 
  const pauseButton = document.getElementById("pause-button");

  if (isPaused) {
    pauseButton.textContent = "Resume";
  } else {
    pauseButton.textContent = "Pause";
  }
});


function checkAnswer() {
  if (!gameStarted) return;

  const userAnswer = document.getElementById("user-input").value.trim().toLowerCase();
  const correctAnswer = levels[currentLevelIndex].words[currentWordIndex].original.toLowerCase();

  if (userAnswer === correctAnswer) {
    currentWordIndex++; // Move to the next word
    
    if (currentWordIndex >= levels[currentLevelIndex].words.length) {
      // Completed all words in the current level
      currentWordIndex = 0; // Reset word index for the next level
      currentLevelIndex++; // Move to the next level

      if (currentLevelIndex >= levels.length) {
        // All levels completed
        document.getElementById("result").textContent = "You passed all levels!";
        clearInterval(countdown); // Stop the timer
        document.querySelector(".scrambled-word").textContent = ""; // Clear scrambled word
      } else {
        // Moved to the next level successfully
        let time = document.getElementsByClassName("timer")[0].textContent;
        let timeTaken = 60 - parseInt(time.slice(3));
        document.getElementById("result").textContent = `Victory! You moved to the next level. (Time Taken is ${timeTaken} seconds)`;
        startTimer(); // Restart timer for the new level
      }
    } else {
      // Move to the next word in the current level
      document.getElementById("result").textContent = "Correct! Next word.";
    }

    displayScrambledWord(); // Display the next word or new level's first word
    document.getElementById("user-input").value = ""; // Clear input for the next answer
  } else {
    document.getElementById("result").textContent = "Incorrect! Try again.";
  }
}


// Event listener for level selection
document.getElementById("level-select").addEventListener("change", function () {
  currentLevelIndex = parseInt(this.value);
  if(gameStarted)startTimer()
  currentWordIndex = 0; // Reset word index
  displayScrambledWord();
});

// Night mode toggle functionality
document.getElementById("night-mode-toggle").addEventListener("change", function () {
  document.body.classList.toggle("night-mode");
  document.querySelector('.result_c').style.color="white"
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




function startTheGame() {
  document.querySelector(".startBtn").style.display = "none";
  document.querySelector(".checkans_btn").style.display = "block"; 
  gameStarted = true;
  currentLevelIndex = 0;
  currentWordIndex = 0;
  document.querySelector(".scrambled-word").style.display="block";
  document.getElementById("result").textContent = "";
  displayScrambledWord();
  startTimer();
}

function resetTimer(){
  isPaused=true;
  const pauseButton = document.getElementById("pause-button");
  pauseButton.textContent = "Resume";
  startTimer()
}

document.querySelector(".startBtn").addEventListener("click", startTheGame);


