const express = require("express");
const router = express.Router();
const path = require("path");

const publicvei = path.join(__dirname, "Front");

const { getOppgave, getOppgaveListe } = require("./oppgaver");
const {
  oppdaterbruker,
  harLoestOppgave,
  registrerLoestOppgave,
  hentLoesteOppgaver,
} = require("./database");
// pass på at denne faktisk EXISTS i database.js og at navnet matcher (case-sensitive)

// 1) Serve felles HTML-side for alle oppgaver
router.get("/oppgave/:id", (req, res) => {
  res.sendFile(path.join(publicvei, "oppgave.html"));
});

// 2) API – liste til landingssiden (ctf.js)
router.get("/api/oppgaver", (req, res) => {
  const liste = getOppgaveListe();
  const brukernavn = req.session?.username;

  if (!brukernavn) {
    return res.json(liste);
  }
  const loesteOppgaver = hentLoesteOppgaver(brukernavn);
  const loestSet = new Set(loesteOppgaver);

  // Legg til gjort: true/false
  const medStatus = liste.map((o) => ({
    ...o,
    gjort: loestSet.has(o.id),
  }));

  res.json(medStatus);
});

// 3) API – hent oppgavedata (uten fasit)
// brukt av oppgave.js når den laster siden
router.get("/api/oppgave/:id", (req, res) => {
  const id = req.params.id;
  const oppgave = getOppgave(id);

  if (!oppgave) {
    return res.status(404).json({ error: "Oppgave ikke funnet" });
  }

  // Viktig: ikke send fasit eller flagg!
  res.json({
    id: oppgave.id,
    tittel: oppgave.tittel,
    beskrivelse: oppgave.beskrivelse,
    poeng: oppgave.poeng,
  });
});

// 4) API – sjekk svar + gi poeng
// brukt av oppgave.js når eleven trykker "Sjekk svar"
router.post("/api/oppgave/:id/svar", (req, res) => {
  const id = req.params.id;
  const { svar } = req.body;
  const oppgave = getOppgave(id);
  const brukernavn = req.session?.username;

  if (!oppgave) {
    return res.status(404).json({ error: "Oppgave ikke funnet" });
  }

  if (!brukernavn) {
    return res.status(401).json({ error: "Du må være logget inn" });
  }

  if (!svar || typeof svar !== "string") {
    return res.status(400).json({ error: "Ugyldig svar" });
  }

  const brukerSvar = svar.trim().toLowerCase();
  const fasit = oppgave.fasit.trim().toLowerCase();

  if (brukerSvar !== fasit) {
    // Gi poeng
    // PASS PÅ: at oppdaterbruker forventer (poeng, brukernavn)
    // og at SQL-en inni bruker riktig kolonnenavn (Brukernavn ELLER Navn, etter hva du har i DB)
    return res.json({
      riktig: false,
      melding: "Feil svar, prøv igjen!",
    });
  }

  if (harLoestOppgave(brukernavn, id)) {
    return res.json({
      riktig: true,
      melding:
        "Riktig, men du har allerede løst denne oppgaven. Ingen ekstra poeng 😄",
      flagg: oppgave.flagg,
    });
  }

  oppdaterbruker(oppgave.poeng, brukernavn);
  registrerLoestOppgave(brukernavn, id);

  return res.json({
    riktig: true,
    melding: `Riktig! Du fikk ${oppgave.poeng} poeng.`,
    flagg: oppgave.flagg,
  });
});

module.exports = router;
