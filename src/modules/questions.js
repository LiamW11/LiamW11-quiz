// =================================
// FRÅGOR - STARTER DATA
// =================================

export const questions = [
  {
    id: 1,
    category: "JavaScript",
    question: "Vad returnerar typeof []?",
    options: ["array", "object", "undefined", "null"],
    correctAnswer: 1, // Index 1 = "object"
  },
  {
    id: 2,
    category: "JavaScript",
    question: "Vilket nyckelord används för att deklarera en konstant?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2,
  },
  {
    id: 3,
    category: "HTML",
    question: "Vilken tagg används för en rubrik på högsta nivån?",
    options: ["<header>", "<h1>", "<title>", "<heading>"],
    correctAnswer: 1,
  },
  {
    id: 4,
    category: "JavaScript",
    question: "Vad returnerar uttrycket typeof NaN?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: 0,
  },
  {
    id: 5,
    category: "JavaScript",
    question:
      "Vilken metod används för att lägga till ett element i slutet av en array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0,
  },
  {
    id: 6,
    category: "JavaScript",
    question: "Vad gör funktionen JSON.stringify()?",
    options: [
      "Konverterar en JSON-sträng till ett objekt",
      "Konverterar ett objekt till en JSON-sträng",
      "Rensar ett JSON-objekt",
      "Validerar en JSON-struktur",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    category: "JavaScript",
    question: "Vilket värde returnerar uttrycket 2 + '2'?",
    options: ["4", "22", "NaN", "error"],
    correctAnswer: 1,
  },
  {
    id: 8,
    category: "JavaScript",
    question: "Vilket av följande jämför både värde och datatyp?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2,
  },
  {
    id: 9,
    category: "JavaScript",
    question: "Vilken metod används för att välja ett element med id i DOM?",
    options: [
      "getElementsByClassName()",
      "getElementById()",
      "querySelectorAll()",
      "getElementByTagName()",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    category: "HTML",
    question: "Vilken HTML-tagg används för att skapa en länk?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: 0,
  },
  {
    id: 11,
    category: "HTML",
    question: "Vilken HTML-tagg används för att visa en bild?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    correctAnswer: 0,
  },
  {
    id: 12,
    category: "HTML",
    question:
      "Vilket attribut används för att ange en länkadress i en <a>-tagg?",
    options: ["src", "href", "link", "target"],
    correctAnswer: 1,
  },
  {
    id: 13,
    category: "HTML",
    question: "Vilken HTML-tagg används för att skapa en numrerad lista?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    correctAnswer: 2,
  },
  {
    id: 14,
    category: "HTML",
    question:
      "Vilken HTML5-tagg används för att definiera en sektion med oberoende innehåll, t.ex. ett blogginlägg?",
    options: ["<section>", "<div>", "<article>", "<aside>"],
    correctAnswer: 2,
  },
  {
    id: 15,
    category: "JavaScript",
    question:
      "Vilken funktion används för att skriva ut något till webbkonsolen?",
    options: ["print()", "console.write()", "console.log()", "alert()"],
    correctAnswer: 2,
  },
];

// Funktion för att hämta alla frågor
export function getAllQuestions() {
  return questions;
}

// VALFRITT FÖR MELLANNIVÅ: Funktion för att hämta frågor efter kategori
export function getQuestionsByCategory(category) {
  return questions.filter((q) => q.category === category);
}

// VALFRITT FÖR MELLANNIVÅ: Funktion för att hämta alla kategorier
export function getCategories() {
  const categories = questions.map((q) => q.category);
  return [...new Set(categories)]; // Ta bort dubletter
}