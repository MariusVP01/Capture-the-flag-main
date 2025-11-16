const express = require("express");
const router = express.Router();
const path = require("path");

const { getalle } = require("./database");
const { get } = require("http");

const publicvei = path.join(__dirname, "Front");

router.get("/leaderboard", (req, res) => {
  res.sendFile(path.join(publicvei, "leaderboard.html"));
});

// ✅ POST: henter data for leaderboard (topp 5 + rundt brukernavn)
router.post("/getleaderboard", (req, res) => {
  // Hent brukernavn fra session (ikke fra body)
  const brukernavn = req.session?.username;

  const topp5 = gettopp5();
  let rundt = null;

  if (brukernavn) {
    rundt = getrundt(brukernavn);
  }

  res.json({ topp5, rundt, brukernavn });
});

module.exports = router;

function gettopp5() {
  let liste = getalle();
  let nyliste = [];
  for (let i = 0; i < 5; i++) {
    nyliste[i] = liste[i];
  }
  return nyliste;
}

function getrundt(brukernavn) {
  let list = getalle(); // sortert liste
  let i = list.findIndex((x) => x.Brukernavn === brukernavn);

  if (i === -1) {
    return null; // Brukeren finnes ikke
  }

  return {
    over: list[i - 1] || null,
    bruker: list[i] || null,
    under: list[i + 1] || null,
    rank: i + 1,
  };
}
console.log(getrundt("mvp01"));
