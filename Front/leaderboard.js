async function hentLeaderboard() {
  const res = await fetch("/getleaderboard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    throw new Error("Feil ved henting av leaderboard");
  }

  return await res.json(); // { topp5, rundt, brukernavn }
}

function renderTopp5(topp5) {
  const topList = document.getElementById("topList");
  topList.innerHTML = "";

  topp5.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>#${index + 1} ${user.Brukernavn}</span>
      <span>${user.Poeng} poeng</span>
    `;
    topList.appendChild(li);
  });
}

function renderRundt(rundt, brukernavn) {
  const container = document.getElementById("aroundYou");
  container.innerHTML = "";

  if (!brukernavn) {
    container.innerHTML = "<p>Du må være logget inn for å se plasseringen din.</p>";
    return;
  }

  if (!rundt) {
    container.innerHTML = "<p>Fant ikke brukeren i leaderboardet.</p>";
    return;
  }

  function lagRad(label, entry, extra = "") {
    if (!entry) return;
    const div = document.createElement("div");
    div.className = "pos-row " + extra;
    div.innerHTML = `
      <span>${label} (#${entry.rank}) ${entry.Brukernavn}</span>
      <span>${entry.Poeng} poeng</span>
    `;
    container.appendChild(div);
  }

  lagRad("Over deg", rundt.over);
  lagRad("Du", rundt.bruker, "you");
  lagRad("Under deg", rundt.under);
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await hentLeaderboard(); 
    renderTopp5(data.topp5);
    renderRundt(data.rundt, data.brukernavn);
  } catch (err) {
    console.error(err);
    document.getElementById("aroundYou").innerHTML =
      "<p>Kunne ikke hente leaderboard.</p>";
  }
});
