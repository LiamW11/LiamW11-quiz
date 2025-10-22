import * as Quiz from "./modules/quiz.js";
import * as UI from "./modules/ui.js";

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const optionsContainer = document.getElementById("options-container");

startBtn.addEventListener("click", () => {
  const firstQuestion = Quiz.init();
  UI.displayHighscore();
  UI.renderQuestion(firstQuestion);
  Quiz.startTimer();
  UI.showView("quiz");
});

// Svarsalternativ - validera svar
let answered = false; // Förhindra dubbelklick

optionsContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  if (!e.target.dataset.index) return;
  if (answered) return;

  const button = e.target;
  const answerIndex = parseInt(button.dataset.index);
  const isCorrect = Quiz.validateAnswer(answerIndex);

  // Uppdatera poäng om rätt
  if (isCorrect) {
    const newScore = Quiz.updateScore();
    UI.updateScore(newScore);
  }

  UI.showFeedback(button, isCorrect, Quiz.getCorrectAnswer());

  // Förhindra fler klick
  answered = true;
});

nextBtn.addEventListener("click", () => {
  if(answered === false) return;
  const nextQuestionData = Quiz.nextQuestion();

  if (nextQuestionData) {
    // Fler frågor finns
    UI.renderQuestion(nextQuestionData);
    answered = false;
  } else {
    // Inga fler frågor - visa resultat
    Quiz.stopTimer();
    const finalScore = Quiz.getFinalScore();
    const message = Quiz.getFeedbackMessage(finalScore.percentage);
    UI.showResult(finalScore, message);
  }
});

restartBtn.addEventListener("click", () => {
  const firstQuestion = Quiz.init();
  UI.updateScore(0);
  UI.displayHighscore()
  UI.renderQuestion(firstQuestion);
  Quiz.startTimer();
  UI.showView("quiz");
  answered = false;
});

// Initialt state - visa startsida
UI.showView("start");