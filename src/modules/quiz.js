// =================================
// QUIZ-LOGIK (Affärslogik)
// =================================

import { getAllQuestions } from "./questions.js";

// State - håller koll på nuvarande quiz-tillstånd
let state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  totalQuestions: 0,
};

// Initiera quiz - hämta frågor och återställ state
export function init() {
  state.questions = getAllQuestions();
  state.currentIndex = 0;
  state.score = 0;
  state.totalQuestions = state.questions.length;

  return getCurrentQuestion();
}

// Hämta nuvarande fråga
export function getCurrentQuestion() {
  return {
    question: state.questions[state.currentIndex],
    currentIndex: state.currentIndex,
    totalQuestions: state.totalQuestions,
    score: state.score,
  };
}

// Hämta rätt svar för nuvarande fråga
export function getCorrectAnswer() {
  return state.questions[state.currentIndex].correctAnswer;
}

// Validera svar
export function validateAnswer(userAnswerIndex) {
  const currentQuestion = state.questions[state.currentIndex];
  return userAnswerIndex === currentQuestion.correctAnswer;
}

// Uppdatera poäng
export function updateScore() {
  state.score++;
  return state.score;
}

// Gå till nästa fråga
export function nextQuestion() {
  state.currentIndex++;

  if (state.currentIndex < state.totalQuestions) {
    return getCurrentQuestion();
  }

  return null; // Inga fler frågor
}

// Hämta slutresultat
export function getFinalScore() {
  const percentage = Math.round((state.score / state.totalQuestions) * 100);

  return {
    score: state.score,
    total: state.totalQuestions,
    percentage: percentage,
  };
}

// Feedbackmeddelande baserat på resultat
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

// VALFRITT FÖR AVANCERAD NIVÅ: Randomisera frågeordning
export function shuffleQuestions() {
  for (let i = state.questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.questions[i], state.questions[j]] = [
      state.questions[j],
      state.questions[i],
    ];
  }
}