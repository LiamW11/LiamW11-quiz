// =================================
// QUIZ-LOGIK (Affärslogik)
// =================================
// DU SKA FYLLA I FUNKTIONERNA NEDAN
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

// TODO 1: IMPLEMENTERA validateAnswer()
// Jämför användarens svar med rätt svar
// Parameter: userAnswerIndex (vilket alternativ användaren valde, 0-3)
// Returnera: true om rätt, false om fel
export function validateAnswer(userAnswerIndex) {
  // TIPS: Hämta nuvarande fråga från state.questions[state.currentIndex]
  // TIPS: Jämför userAnswerIndex med question.correctAnswer
  // TIPS: Returnera true eller false

  // DIN KOD HÄR
  const currentQuestion = state.questions[state.currentIndex];
  return userAnswerIndex === currentQuestion.correctAnswer;
}

// TODO 2: IMPLEMENTERA updateScore()
// Öka poängen om svaret är rätt
// Returnera: den nya poängen
export function updateScore() {
  // TIPS: state.score++ eller state.score += 1
  // TIPS: returnera state.score

  // DIN KOD HÄR
  state.score++;
  return state.score;
}

// TODO 3: IMPLEMENTERA nextQuestion()
// Gå till nästa fråga
// Returnera: nästa frågeobjekt, eller null om inga fler frågor finns
export function nextQuestion() {
  // TIPS: Öka state.currentIndex
  // TIPS: Kolla om vi är färdiga (currentIndex >= totalQuestions)
  // TIPS: Om fler frågor finns, returnera getCurrentQuestion()
  // TIPS: Om inga fler frågor, returnera null

  // DIN KOD HÄR
  state.currentIndex++;

  if (state.currentIndex < state.totalQuestions) {
    return getCurrentQuestion();
  }

  return null; // Inga fler frågor
}

// TODO 4: IMPLEMENTERA getFinalScore()
// Beräkna och returnera slutresultat
// Returnera: objekt med { score, total, percentage }
export function getFinalScore() {
  // TIPS: score = state.score
  // TIPS: total = state.totalQuestions
  // TIPS: percentage = Math.round((score / total) * 100)

  // DIN KOD HÄR
  const percentage = Math.round((state.score / state.totalQuestions) * 100);

  return {
    score: state.score,
    total: state.totalQuestions,
    percentage: percentage,
  };
}

// VALFRITT FÖR MELLANNIVÅ: Feedbackmeddelande baserat på resultat
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
