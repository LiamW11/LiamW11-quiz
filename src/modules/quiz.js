import { getAllQuestions } from "./questions.js";

let state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  totalQuestions: 0,
  timeLeft: 0,
  timerInterval: null,
};

export function init() {
  state.questions = getAllQuestions();
  shuffleQuestions();
  //Återställ state
  state.currentIndex = 0;
  state.score = 0;
  state.totalQuestions = state.questions.length;
  return getCurrentQuestion();
}

export function getCurrentQuestion() {
  return {
    question: state.questions[state.currentIndex],
    currentIndex: state.currentIndex,
    totalQuestions: state.totalQuestions,
    score: state.score,
  };
}

export function getCorrectAnswer() {
  return state.questions[state.currentIndex].correctAnswer;
}

export function validateAnswer(userAnswerIndex) {
  const currentQuestion = state.questions[state.currentIndex];
  return userAnswerIndex === currentQuestion.correctAnswer; //Returnerar en TRUE eller FALSE som används senare i main.js
}

export function updateScore() {
  state.score++;
  return state.score;
}

export function nextQuestion() {
  state.currentIndex++;

  if (state.currentIndex < state.totalQuestions) {
    return getCurrentQuestion();
  }

  return null; // Inga fler frågor
}

export function getFinalScore() {
  const percentage = Math.round((state.score / state.totalQuestions) * 100);
  saveHighScore(state.score);
  return {
    score: state.score,
    total: state.totalQuestions,
    percentage: percentage,
  };
}

export function getFeedbackMessage(percentage) {
  if (percentage >= 90) {
    return "Utmärkt prestation! 🌟";
  } else if (percentage >= 70) {
    return "Bra jobbat! 👍";
  } else if (percentage >= 50) {
    return "Godkänt! 😊";
  } else {
    return "Fortsätt öva! 💪";
  }
}

export function shuffleQuestions() {
  //Fisher-Yates för att blanda frågorna
  for (let i = state.questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.questions[i], state.questions[j]] = [
      state.questions[j],
      state.questions[i],
    ];
  }
}

export function saveHighScore(score) {
  const highScore = Number(localStorage.getItem("quizHighscore")) || 0;
  if (score > highScore) {
    localStorage.setItem("quizHighscore", score);
    console.log("Ny quizHighscore:", score);
  }
}

export function startTimer() {
  const timeLeftEl = document.getElementById("time-left");
  timeLeftEl.classList.remove("text-red-500");
  if (state.timerInterval) return;
  state.timeLeft = 150;
  state.timerInterval = setInterval(() => {
    if (state.timeLeft <= 0) {
      stopTimer();
      alert("Tid slut. Försök igen!");
      window.location.reload();
      return;
    }
    if(state.timeLeft <= 50){
      timeLeftEl.classList.add("text-red-500");
    }
    timeLeftEl.textContent = state.timeLeft;
    state.timeLeft--;
  }, 1000);
}

export function stopTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = null;
}
