// ctf.js

// Mapper vanskelighetsgrad til tekst
function getDifficultyLabel(level) {
  switch (level) {
    case "easy":
      return "Lett";
    case "medium":
      return "Middels";
    case "hard":
      return "Vanskelig";
    case "expert":
      return "Ekspert";
    default:
      return level;
  }
}

async function hentOppgaver() {
  const res = await fetch("/api/oppgaver");
  if (!res.ok) {
    throw new Error("Kunne ikke hente oppgaver");
  }
  return await res.json(); // forventer array med {id, tittel, beskrivelse, vanskelighet, hovedtema}
}

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("task-list");
  container.innerHTML = "<p>Laster oppgaver...</p>";

  try {
    const tasks = await hentOppgaver();
    container.innerHTML = "";

    tasks.forEach((task, index) => {
      const card = document.createElement("article");
      card.className = "task-card";

      if (task.gjort) {
        card.classList.add("task-done");
      }

      card.addEventListener("click", () => {
        window.location.href = `/oppgave/${task.id}`;
      });

      const titleRow = document.createElement("div");
      titleRow.className = "task-title-row";

      const title = document.createElement("div");
      title.className = "task-title";
      title.textContent = `${index + 1}. ${task.tittel}`;

      const diff = document.createElement("div");
      diff.className = "task-difficulty " + task.vanskelighet;
      diff.textContent = getDifficultyLabel(task.vanskelighet);

      titleRow.appendChild(title);
      titleRow.appendChild(diff);

      const desc = document.createElement("div");
      desc.className = "task-desc";
      desc.textContent = task.beskrivelse; // kortBeskrivelse fra backend

      const meta = document.createElement("div");
      meta.className = "task-meta";
      meta.innerHTML = `
        <span>${task.hovedtema}</span>
        <span>ID: ${task.id}</span>
      `;

      card.appendChild(titleRow);
      card.appendChild(desc);
      card.appendChild(meta);

      container.appendChild(card);
    });

    if (tasks.length === 0) {
      container.innerHTML = "<p>Ingen oppgaver er tilgjengelige ennå.</p>";
    }
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Kunne ikke laste oppgaver.</p>";
  }
});
