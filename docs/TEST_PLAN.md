# Testplan - Quiz-applikation (FÖRENKLAD)

## Projektinformation
**Testdatum:** [Fyll i datum]  
**Ditt namn:** [Fyll i]  
**Version:** 1.0

---

## Hur du testar

Öppna `index.html` i webbläsaren och genomför testarna nedan.  
Bocka av ✅ när testet är godkänt.

---

## Basnivå - 8 Kritiska Tester

### ✅ Test 1: Appstart
**Steg:**
1. Öppna index.html

**Förväntat:**
- Startsida visas
- "Starta Quiz"-knapp syns

**Status:** [X] PASS  [ ] FAIL

---

### ✅ Test 2: Starta quiz
**Steg:**
1. Klicka "Starta Quiz"

**Förväntat:**
- Första frågan visas
- 4 svarsalternativ syns
- Progress visar "Fråga 1 av 15"

**Status:** [X] PASS  [ ] FAIL

---

### ✅ Test 3: Rätt svar = grön
**Steg:**
1. Starta quiz
2. Välj det RÄTTA svaret (kolla i questions.js vilken index som är rätt)

**Förväntat:**
- Knappen blir grön
- Feedback visar "Rätt! ✅"
- "Nästa fråga"-knapp aktiveras

**Status:** [X] PASS  [ ] FAIL

---

### ✅ Test 4: Fel svar = röd
**Steg:**
1. Starta nytt quiz
2. Välj ett FELAKTIGT svar

**Förväntat:**
- Knappen blir röd
- Feedback visar "Fel! ❌"
- "Nästa fråga"-knapp aktiveras

**Status:** [X] PASS  [ ] FAIL

---

### ✅ Test 5: Nästa fråga
**Steg:**
1. Svara på en fråga
2. Klicka "Nästa fråga"

**Förväntat:**
- Fråga 2 visas
- Progress uppdateras till "Fråga 2 av 15"
- Nya svarsalternativ visas

**Status:** [X] PASS  [ ] FAIL

---

### ✅ Test 6: Slutresultat
**Steg:**
1. Genomför ett helt quiz (svara på alla 15 frågor)

**Förväntat:**
- Resultatskärm visas
- Antal rätt visas (t.ex. "12 av 15 rätt")
- Procent visas (t.ex. "80%")
- Feedbackmeddelande visas

**Status:** [X] PASS  [ ] FAIL

---

### ✅ Test 7: Omstart
**Steg:**
1. På resultatskärmen, klicka "Starta om"

**Förväntat:**
- Quiz börjar om från fråga 1
- Poäng nollställs

**Status:** [X] PASS  [ ] FAIL

---

### ✅ Test 8: Responsiv (mobil)
**Steg:**
1. Öppna DevTools (F12)
2. Tryck Ctrl+Shift+M (Toggle device toolbar)
3. Välj "iPhone SE" eller annan mobil
4. Testa hela quizet

**Förväntat:**
- Allt syns utan horisontell scroll
- Knappar går att klicka
- Text är läsbar

**Status:** [X] PASS  [ ] FAIL

---

## Webbläsartest (valfritt men rekommenderat)

### Test 9: Chrome
- [X] Allt fungerar i Chrome
- [X] Inga fel i konsolen (F12 → Console)

### Test 10: Firefox
- [ ] Allt fungerar i Firefox

---

## Live-deploy Test

### Test 11: Netlify
**Steg:**
1. Öppna din Netlify-länk
2. Genomför ett helt quiz

**Förväntat:**
- Allt fungerar som lokalt

**Status:** [X] PASS  [ ] FAIL

---

## Sammanfattning

**Godkänt för leverans kräver:**
- [X] Alla Test 1-8 är PASS
- [X] Test 11 (Netlify) är PASS

**Totalt antal PASS:** 11/ 11

**Datum:** 2025-10-22  
**Signatur:** Liam Wiklund

---

## Felsökning

**Om något inte fungerar:**
1. Öppna konsolen (F12)
2. Leta efter röda felmeddelanden
3. Lägg till `console.log()` i din kod för att debugga
4. Kolla stavfel i variabelnamn
5. Kolla att alla funktioner returnerar rätt värden
**Test ID:** T001  
**Krav:** FR-001  
**Beskrivning:** Verifiera att applikationen startar korrekt

**Teststeg:**
1. Öppna index.html i webbläsare (Chrome)
2. Observera vad som visas

**Förväntat resultat:**
- Startsida visas
- Startknapp ("Starta Quiz") är synlig och klickbar
- Ingen JavaScript-fel i konsolen

**Faktiskt resultat:** Det visas en ruta med en knapp som låter användaren påbörja quizen.

**Status:** [X] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:** Ingenting märkvärdigt att antyda.

---

### Test 2: Starta quiz
**Test ID:** T002  
**Krav:** FR-001  
**Beskrivning:** Verifiera att quiz startar vid knapptryck

**Teststeg:**
1. Klicka på "Starta Quiz"-knapp
2. Observera vad som visas

**Förväntat resultat:**
- Startsidan döljs
- Första frågan visas
- Frågetexten är läsbar
- Svarsalternativ visas som knappar

**Faktiskt resultat:** När startknappen trycks så visas en fråga med fyra olika svarsalternativ.

**Status:** [X] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:** Ingenting märkvärdigt att antyda.

---

### Test 3: Frågevisning
**Test ID:** T003  
**Krav:** FR-002  
**Beskrivning:** Verifiera att frågor visas korrekt

**Teststeg:**
1. Starta quiz
2. Observera första frågan
3. Räkna antal svarsalternativ

**Förväntat resultat:**
- Endast en fråga visas åt gången
- Frågetexten är tydlig och läsbar (minst 16px)
- 3-5 svarsalternativ visas
- Alla alternativ är klickbara knappar

**Faktiskt resultat:** Alla frågeralternativ har läsbar text och går att klicka på.

**Status:** [X] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:** Ingenting märkvärdigt att antyda.

---

### Test 4: Svarsvalidering - Rätt svar
**Test ID:** T004  
**Krav:** FR-003  
**Beskrivning:** Verifiera feedback för korrekt svar

**Teststeg:**
1. Starta quiz
2. Välj det KORREKTA svarsalternativet
3. Observera feedback

**Förväntat resultat:**
- Valt alternativ markeras med grön färg inom 200ms
- Tydligt visuellt att svaret är rätt
- Färgkontrast är god (mörkgrön text/bakgrund)

**Faktiskt resultat:** När rätt svar väljs så får svarsalternativet en grön bakgrund som antyder på att det är rätt svar.

**Status:** [X] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**
Den gröna färgen som visas kan ha högre kontrast men upplevs tydlig i nuläget.
---

### Test 5: Svarsvalidering - Fel svar
**Test ID:** T005  
**Krav:** FR-003  
**Beskrivning:** Verifiera feedback för felaktigt svar

**Teststeg:**
1. Starta quiz
2. Välj ett FELAKTIGT svarsalternativ
3. Observera feedback

**Förväntat resultat:**
- Valt alternativ markeras med röd färg inom 200ms
- Tydligt visuellt att svaret är fel
- Färgkontrast är god

**Faktiskt resultat:** När fel svar väljs så får svarsalternativet en röd bakgrund som antyder på att svaret är fel. Det rätta svaret får en grön bakgrund för att visa användaren vilket svar som var korrekt.

**Status:** [X] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:** Ingenting märkvärdigt att antyda.

---

### Test 6: Svarsvalidering - Ingen dubbelklick
**Test ID:** T006  
**Krav:** FR-003  
**Beskrivning:** Verifiera att användaren inte kan ändra svar efter val

**Teststeg:**
1. Starta quiz
2. Välj ett svarsalternativ
3. Försök klicka på ett annat alternativ

**Förväntat resultat:**
- Andra klicket har ingen effekt
- Ursprunglig feedback kvarstår
- Poäng ändras inte

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 7: Poängräkning - Rätt svar
**Test ID:** T007  
**Krav:** FR-004  
**Beskrivning:** Verifiera att poäng ökar vid rätt svar

**Teststeg:**
1. Starta quiz, notera startpoäng (ska vara 0)
2. Svara RÄTT på första frågan
3. Observera poängen

**Förväntat resultat:**
- Poäng ökar från 0 till 1
- Poängvisning uppdateras

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 8: Poängräkning - Fel svar
**Test ID:** T008  
**Krav:** FR-004  
**Beskrivning:** Verifiera att poäng inte ökar vid fel svar

**Teststeg:**
1. Starta quiz, notera startpoäng
2. Svara FEL på första frågan
3. Observera poängen

**Förväntat resultat:**
- Poäng förblir 0
- Ingen poängökning

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 9: Navigation - Nästa-knapp aktivering
**Test ID:** T009  
**Krav:** FR-005  
**Beskrivning:** Verifiera att nästa-knapp aktiveras efter svar

**Teststeg:**
1. Starta quiz
2. Observera nästa-knappen INNAN svar
3. Svara på frågan
4. Observera nästa-knappen EFTER svar

**Förväntat resultat:**
- Nästa-knappen är inaktiverad (disabled/grå) innan svar
- Nästa-knappen aktiveras (enabled/färgad) efter svar

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 10: Navigation - Gå till nästa fråga
**Test ID:** T010  
**Krav:** FR-005  
**Beskrivning:** Verifiera att nästa fråga visas vid knapptryck

**Teststeg:**
1. Svara på första frågan
2. Klicka "Nästa"
3. Observera vad som visas

**Förväntat resultat:**
- Andra frågan visas
- Första frågan döljs
- Smooth transition (fade/slide)
- Progress uppdateras

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 11: Progress-indikator - Text
**Test ID:** T011  
**Krav:** FR-006  
**Beskrivning:** Verifiera att progress-text uppdateras korrekt

**Teststeg:**
1. Starta quiz, observera progress-text
2. Gå till fråga 2, observera
3. Gå till fråga 3, observera

**Förväntat resultat:**
- Fråga 1: "Fråga 1 av X"
- Fråga 2: "Fråga 2 av X"
- Fråga 3: "Fråga 3 av X"
(X = totalt antal frågor)

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 12: Progress-indikator - Progress bar
**Test ID:** T012  
**Krav:** FR-006  
**Beskrivning:** Verifiera att progress bar fylls proportionellt

**Teststeg:**
1. Starta quiz med 10 frågor
2. Observera progress bar vid fråga 1 (ska vara ~10%)
3. Gå till fråga 5 (ska vara ~50%)
4. Gå till fråga 10 (ska vara 100%)

**Förväntat resultat:**
- Progress bar fylls proportionellt
- Vid 50% är halva baren fylld
- Vid 100% är hela baren fylld

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 13: Resultatvisning - Grunddata
**Test ID:** T013  
**Krav:** FR-007  
**Beskrivning:** Verifiera att resultatskärm visas med korrekt data

**Teststeg:**
1. Genomför ett quiz med känt resultat (t.ex. 7 av 10 rätt)
2. Observera resultatskärmen

**Förväntat resultat:**
- Antal rätt visas (t.ex. "7 av 10 rätt")
- Procent visas (t.ex. "70%")
- Poängen stämmer med antal rätta svar

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 14: Resultatvisning - Feedbackmeddelande
**Test ID:** T014  
**Krav:** FR-007  
**Beskrivning:** Verifiera att feedbackmeddelande är korrekt baserat på resultat

**Teststep:**
1. Genomför quiz med 95% rätt
2. Observera meddelandet
3. Genomför quiz med 50% rätt
4. Observera meddelandet

**Förväntat resultat:**
- 90-100%: "Utmärkt prestation!"
- 70-89%: "Bra jobbat!"
- 50-69%: "Godkänt resultat!"
- 0-49%: "Fortsätt öva!"

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 15: Omstart
**Test ID:** T015  
**Krav:** FR-008  
**Beskrivning:** Verifiera att quiz kan startas om från resultatskärm

**Teststeg:**
1. Genomför ett helt quiz
2. På resultatskärmen, klicka "Starta om"
3. Observera vad som händer

**Förväntat resultat:**
- Quiz återställs till första frågan
- Poäng nollställs till 0
- Progress återställs till "Fråga 1 av X"
- Alla tidigare svar rensas

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

### Test 16-18: Responsiv design

**Test ID:** T016  
**Krav:** FR-009  
**Enhet:** Mobil (320px bredd)

**Teststeg:**
1. Öppna DevTools (F12)
2. Välj "Toggle device toolbar" (Ctrl+Shift+M)
3. Välj "iPhone SE" eller annan liten mobil
4. Testa alla vyer (start, quiz, resultat)

**Förväntat resultat:**
- Ingen horisontell scrollbar
- All text är läsbar
- Knappar är minst 44x44px (klickbara med finger)
- Layout är vertikalt orienterad

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

**Test ID:** T017  
**Krav:** FR-009  
**Enhet:** Surfplatta (768px bredd)

**Teststeg:**
1. I DevTools, välj "iPad"
2. Testa alla vyer

**Förväntat resultat:**
- Layout anpassar sig
- Utnyttjar bredden bättre än mobil
- Allt innehåll syns utan scroll

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

**Test ID:** T018  
**Krav:** FR-009  
**Enhet:** Desktop (1920px bredd)

**Teststeg:**
1. Öppna i full desktop-läge
2. Testa alla vyer

**Förväntat resultat:**
- Innehåll är centrerat eller väl använt
- Inte för brett (max 1200px innehållsbredd rekommenderat)
- Bra läsbarhet

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

### Test 19: Frågedatabas
**Test ID:** T019  
**Krav:** FR-010  
**Beskrivning:** Verifiera att frågedatabasen innehåller minst 15 frågor

**Teststeg:**
1. Öppna src/modules/questions.js
2. Räkna antal frågor i arrayen

**Förväntat resultat:**
- Minst 15 frågor finns
- Alla frågor har: id, category, question, options (array), correctAnswer (index)

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

**Kommentar:**

---

## 2. Webbläsartester

### Test 20-22: Kompatibilitet

**Test ID:** T020  
**Webbläsare:** Chrome (senaste versionen)

**Teststeg:**
1. Öppna applikationen i Chrome
2. Genomför ett komplett quiz
3. Kontrollera konsolen för fel

**Förväntat resultat:**
- Alla funktioner fungerar
- Inga JavaScript-fel i konsolen
- Styling ser korrekt ut

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

**Test ID:** T021  
**Webbläsare:** Firefox

**Teststeg:** [Som ovan]

**Förväntat resultat:** [Som ovan]

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

**Test ID:** T022  
**Webbläsare:** Safari (om tillgänglig)

**Teststeg:** [Som ovan]

**Förväntat resultat:** [Som ovan]

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

## 3. Tillgänglighetstester

### Test 23: Tangentbordsnavigation
**Test ID:** T023  
**Krav:** NFR-002

**Teststeg:**
1. Öppna applikationen
2. Använd ENDAST tangentbordet (Tab, Enter, Space)
3. Navigera genom hela quizet

**Förväntat resultat:**
- Kan tabba till startknapp och aktivera med Enter
- Kan tabba mellan svarsalternativ
- Kan välja svar med Enter/Space
- Kan tabba till nästa-knapp
- Tydlig fokusindikator (outline) på alla interaktiva element

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

### Test 24: Färgkontrast
**Test ID:** T024  
**Krav:** NFR-002

**Teststeg:**
1. Öppna DevTools
2. Gå till Lighthouse-tab
3. Kör accessibility audit
4. Kontrollera kontrast-varningar

**Förväntat resultat:**
- Inga kontrast-varningar
- Textkontrast är minst 4.5:1 (för normal text)
- Färgfeedback (grön/röd) är tydlig även utan färg (ikoner eller text)

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

### Test 25: Semantisk HTML
**Test ID:** T025  
**Krav:** NFR-002

**Teststeg:**
1. Inspektera HTML-koden
2. Kontrollera att korrekta element används

**Förväntat resultat:**
- `<button>` för knappar (inte `<div>` med onclick)
- `<section>` eller `<main>` för huvudinnehåll
- Korrekt rubrikhierarki (`<h1>`, `<h2>`)
- Inga div-sup-itis

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

## 4. Prestandatester

### Test 26: Initial laddningstid
**Test ID:** T026  
**Krav:** NFR-001

**Teststeg:**
1. Öppna DevTools → Network-tab
2. Ladda om sidan (Ctrl+Shift+R)
3. Observera laddningstid

**Förväntat resultat:**
- Total laddningstid < 2 sekunder
- Inga onödigt stora resurser

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

### Test 27: Svarstid för interaktion
**Test ID:** T027  
**Krav:** NFR-001

**Teststeg:**
1. Klicka på svarsalternativ
2. Observera tid till feedback visas

**Förväntat resultat:**
- Feedback visas inom 200ms
- Ingen märkbar fördröjning

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

## 5. Konsolbaserad logiktest (Valfritt)

Dessa tester körs direkt i webbläsarkonsolen för att verifiera affärslogiken.

### Test 28: Svarsvalidering (funktion)
```javascript
// Öppna konsolen (F12)
// Antag att du har en funktion validateAnswer(questionId, answerIndex)

// Test: Validera korrekt svar
// Förväntat: true
validateAnswer(1, 1); // Där 1 är korrekt index

// Test: Validera felaktigt svar
// Förväntat: false
validateAnswer(1, 0); // Där 0 är fel index
```

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

### Test 29: Poängberäkning (funktion)
```javascript
// Test: Beräkna poäng för 7 rätt av 10
// Förväntat: 7
calculateScore(7, 10);

// Test: Beräkna procent för 7 rätt av 10
// Förväntat: 70
calculatePercentage(7, 10);
```

**Faktiskt resultat:** [Fyll i]

**Status:** [ ] PASS  [ ] FAIL  [ ] SKIP

---

## Sammanfattning

**Totalt antal tester:** 29  
**Genomförda tester:** [Fyll i]  
**PASS:** [Fyll i]  
**FAIL:** [Fyll i]  
**SKIP:** [Fyll i]

### Kritiska buggar
[Lista kritiska buggar som måste åtgärdas]

### Mindre buggar
[Lista mindre buggar som bör åtgärdas]

### Förbättringsförslag
[Lista förbättringar för framtida versioner]

---

## Slutsats

[Skriv en kort sammanfattning: Är applikationen redo för leverans? Vilka krav är uppfyllda? Vad behöver förbättras?]

**Godkänd för leverans:** [ ] JA  [ ] NEJ

**Datum:** [Fyll i]  
**Signatur:** [Ditt namn]
