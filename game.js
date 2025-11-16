const scoreEl = document.getElementById("score");
const taskListEl = document.getElementById("taskList");

let score = 0;

const tasks = [
  {
    id: 1,
    title: "Lengde på streng",
    description: `Hva skriver console.log ut her?

const tekst = "Hei verden";
console.log(tekst.length);`,
    answer: "10",
    points: 10,
    solved: false,
  },
  {
    id: 2,
    title: "If-statement",
    description: `Hva blir verdien til variabelen "resultat"?

let x = 5;
let resultat;

if (x > 3) {
  resultat = "stor";
} else {
  resultat = "liten";
}`,
    answer: "stor",
    points: 10,
    solved: false,
  },
  {
    id: 3,
    title: "Array-indeks",
    description: `Hva skriver console.log ut?

const tall = [10, 20, 30];
console.log(tall[1]);`,
    answer: "20",
    points: 10,
    solved: false,
  },
  {
    id: 4,
    title: "Funksjon-kall",
    description: `Hva skriver denne koden i konsollen?

function leggSammen(a, b) {
  return a + b;
}

console.log(leggSammen(3, 4));`,
    answer: "7",
    points: 15,
    solved: false,
  },
];

// Tegn kort for hver oppgave
function renderTasks() {
  taskListEl.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.classList.add("task-card");
    if (task.solved) card.classList.add("solved");

    const title = document.createElement("div");
    title.classList.add("task-title");
    title.textContent = `Flag #${task.id}: ${task.title}`;

    const flagLabel = document.createElement("div");
    flagLabel.classList.add("flag-label");
    flagLabel.textContent = task.solved ? "🚩 Flag tatt!" : "🚩 Ucaptured flag";

    const points = document.createElement("div");
    points.classList.add("points");
    points.textContent = `Poeng: ${task.points}`;

    const desc = document.createElement("pre");
    desc.textContent = task.description;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Svar her...";
    input.disabled = task.solved;

    const button = document.createElement("button");
    button.textContent = task.solved ? "Allerede løst" : "Sjekk svar";
    button.disabled = task.solved;

    const feedback = document.createElement("div");
    feedback.classList.add("feedback");

    button.addEventListener("click", () => {
      const userAnswer = input.value.trim();

      if (userAnswer === "") {
        feedback.textContent = "Skriv inn et svar først 😊";
        return;
      }

      // Enkel sjekk – case-sensitive. Du kan gjøre den mer fleksibel.
      if (userAnswer === task.answer) {
        feedback.textContent = "Riktig! 🎉 Flag captured!";
        task.solved = true;
        score += task.points;
        updateScore();
        renderTasks(); // tegn på nytt for å låse oppgaven
      } else {
        feedback.textContent = "Feil svar 😅 prøv igjen!";
      }
    });

    card.appendChild(title);
    card.appendChild(flagLabel);
    card.appendChild(points);
    card.appendChild(desc);
    card.appendChild(input);
    card.appendChild(button);
    card.appendChild(feedback);

    taskListEl.appendChild(card);
  });
}

function updateScore() {
  scoreEl.textContent = `Poeng: ${score}`;
}

renderTasks();
updateScore();
