function getOppgaveId() {
  const parts = window.location.pathname.split("/"); // ["", "oppgave", "intro-variabler"]
  return parts[2];
}

async function hentOppgave(id) {
  const res = await fetch(`/api/oppgave/${id}`);
  if (!res.ok) {
    throw new Error("Kunne ikke hente oppgave");
  }
  return await res.json();
}

async function sendSvar(id, svar) {
  const res = await fetch(`/api/oppgave/${id}/svar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ svar }),
  });

  if (!res.ok) {
    throw new Error("Feil ved innsending av svar");
  }

  return await res.json(); // { riktig, melding, flagg? }
}

document.addEventListener("DOMContentLoaded", async () => {
  const id = getOppgaveId();
  const tittelEl = document.getElementById("oppgave-tittel");
  const tekstEl = document.getElementById("oppgave-beskrivelse");
  const svarInput = document.getElementById("svar");
  const feedbackEl = document.getElementById("feedback");
  const knapp = document.getElementById("sjekk-btn");

  try {
    const oppgave = await hentOppgave(id);
    tittelEl.textContent = oppgave.tittel;
    tekstEl.textContent = oppgave.beskrivelse;
  } catch (err) {
    console.error(err);
    tittelEl.textContent = "Oppgave ikke funnet";
    tekstEl.textContent = "";
    knapp.disabled = true;
    return;
  }

  knapp.addEventListener("click", async () => {
    const svar = svarInput.value.trim();
    if (!svar) {
      feedbackEl.textContent = "Du må skrive inn et svar!";
      feedbackEl.style.color = "#f97373";
      return;
    }

    try {
      const resultat = await sendSvar(id, svar);
      feedbackEl.textContent = resultat.melding;

      if (resultat.riktig) {
        feedbackEl.style.color = "#4ade80";
        // Vis flagg hvis du vil
        if (resultat.flagg) {
          feedbackEl.textContent += ` Flagget ditt er: ${resultat.flagg}`;
        }
        // Du kan også disable input etter riktig svar:
        svarInput.disabled = true;
        knapp.disabled = true;
      } else {
        feedbackEl.style.color = "#f97373";
      }
    } catch (err) {
      console.error(err);
      feedbackEl.textContent = "Det skjedde en feil, prøv igjen senere.";
      feedbackEl.style.color = "#f97373";
    }
  });
});
