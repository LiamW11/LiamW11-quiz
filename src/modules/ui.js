// Hämta alla DOM-element
const startView = document.getElementById("start-view");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");

const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score-display");
const highscoreDisplay = document.getElementById("highscore-display");
const categoryEl = document.getElementById("category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");
const percentage = document.getElementById("percentage");
const feedbackMessage = document.getElementById("feedback-message");
const progressBar = document.getElementById("progress-bar");

// Hjälpfunktion för att visa/dölja vyer
export function showView(viewName) {
  startView.classList.remove("active");
  quizView.classList.remove("active");
  resultView.classList.remove("active");

  if (viewName === "start") {
    startView.classList.add("active");
  } else if (viewName === "quiz") {
    quizView.classList.add("active");
  } else if (viewName === "result") {
    resultView.classList.add("active");
  }
}

// Visa en fråga och dess svarsalternativ
export function renderQuestion(questionData) {
  const { question, currentIndex, totalQuestions } = questionData;
  //Gör knappen grå innan varje fråga
  nextBtn.classList.remove("bg-green-600");
  nextBtn.classList.remove("hover:bg-green-700");
  nextBtn.classList.add("bg-gray-500");

  questionText.textContent = question.question;
  questionNumber.textContent = `Fråga ${currentIndex + 1} av ${totalQuestions}`;
  categoryEl.textContent = question.category;

  // Uppdatera progress bar
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;

  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.dataset.index = index;
    button.className = "w-full bg-gray-50 hover:bg-gray-100 border-2 border-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg text-left transition";
    optionsContainer.appendChild(button);
  });

  feedbackEl.classList.add("hidden");
}

// Visa feedback på svarsknappen (grön eller röd)
export function showFeedback(button, isCorrect, correctAnswerIndex) {
  if (isCorrect) {
    button.className = "w-full bg-green-100 border-2 border-green-500 text-green-800 font-medium py-3 px-6 rounded-lg text-left";
    feedbackEl.textContent = "✅ Rätt!";
    feedbackEl.className = "p-4 rounded-lg border-2 mb-4 text-center font-semibold bg-green-100 border-green-500 text-green-800";
  } else {
    button.className = "w-full bg-red-100 border-2 border-red-500 text-red-800 font-medium py-3 px-6 rounded-lg text-left";
    
    // Markera rätt svar när användaren svarar fel
    const buttons = optionsContainer.querySelectorAll("button");
    buttons[correctAnswerIndex].className = "w-full bg-green-100 border-2 border-green-500 text-green-800 font-medium py-3 px-6 rounded-lg text-left";
    
    feedbackEl.textContent = "❌ Fel!";
    feedbackEl.className = "p-4 rounded-lg border-2 mb-4 text-center font-semibold bg-red-100 border-red-500 text-red-800";
  }
  feedbackEl.classList.remove("hidden");

  //Gör knappen grön efter man har svarat
  nextBtn.classList.remove("bg-gray-500");
  nextBtn.classList.add("bg-green-600");
  nextBtn.classList.add("hover:bg-green-700");
}

export function showResult(finalScoreData, message) {
  finalScore.textContent = `${finalScoreData.score}/${finalScoreData.total}`;
  percentage.textContent = `${finalScoreData.percentage}%`;
  feedbackMessage.textContent = message;
  showView("result");
}

export function updateScore(score) {
  scoreDisplay.textContent = `Poäng: ${score}`;
}

export function displayHighscore() {
  highscoreDisplay.textContent = `Högsta poäng: ${Number(localStorage.getItem("quizHighscore")) || 0}`
}