const sqlite3 = require("better-sqlite3");
const db = sqlite3("database_CTF", { verbose: console.log });
const { hash, sammenlign } = require("./krypter");

function opprettbruker(navn, passord, brukernavn) {
  const Hashedpassord = hash(passord);

  const stmt = db.prepare(
    "INSERT INTO Bruker (Brukernavn, Navn, Passord, Poeng ) VALUES (?, ?, ?,?)"
  );
  stmt.run(brukernavn, navn, Hashedpassord, 0); // Adminrolle er 0 for vanlige brukere, 1 for admin
}

function getbruker(brukernavn) {
  const spr = db.prepare("Select * From Bruker WHERE Brukernavn = ?");
  return spr.get(brukernavn);
}

function oppdaterbruker(poeng, brukernavn) {
  db.prepare(
    `
    UPDATE Bruker
    SET Poeng = Poeng + ?
    WHERE Brukernavn = ?
  `
  ).run(poeng, brukernavn);
}

function getalle() {
  return db
    .prepare(
      `
    SELECT Brukernavn, Poeng 
    FROM Bruker
    ORDER BY Poeng DESC
  `
    )
    .all();
}

function harLoestOppgave(brukernavn, oppgaveId) {
  const rad = db
    .prepare(
      `
    SELECT 1 FROM BrukerOppgave
    WHERE Brukernavn = ? AND OppgaveId = ?
  `
    )
    .get(brukernavn, oppgaveId);

  return !!rad; // true hvis rad finnes, ellers false
}

function registrerLoestOppgave(brukernavn, oppgaveId) {
  db.prepare(
    `
    INSERT OR IGNORE INTO BrukerOppgave (Brukernavn, OppgaveId)
    VALUES (?, ?)
  `
  ).run(brukernavn, oppgaveId);
}

function hentLoesteOppgaver(brukernavn) {
  const rows = db
    .prepare(
      `
    SELECT OppgaveId
    FROM BrukerOppgave
    WHERE Brukernavn = ?
  `
    )
    .all(brukernavn);

  return rows.map((r) => r.OppgaveId);
}

console.log(getalle());
// let bruker = getbruker("mvp01")
// console.log(bruker)
// console.log(sammenlign("test1234",bruker.Passord))
// oppdaterbruker(3,bruker.Brukernavn);
// bruker = getbruker("mvp01")
// console.log(bruker)

module.exports = {
  getbruker,
  oppdaterbruker,
  opprettbruker,
  getalle,
  harLoestOppgave,
  registrerLoestOppgave,
  hentLoesteOppgaver,
};
