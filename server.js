//Importer nødvendige moduler
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const logginnrouter = require("./RuteLogginn.js");
const CTFruter = require("./RuteCTF.js");
const leaderboardRouter = require("./RuteLeaderboard"); // sti justeres
const Oppgaver = require("./RuteOppgaver");
const { getbruker, oppdaterbruker, opprettbruker } = require("./database.js");

//Opprett Express-applikasjon
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "Front"))); // Statiske filer fra "Front"

//Konfigurerer sessions for å huske brukere mellom forespørsler
app.use(
  session({
    secret: "hemmeligNøkkel",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Startside
app.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/ctf");
    // res.sendFile(path.join(__dirname,'Front','ctf.html'));  // Sørg for at filstien er riktig
  } else {
    // Hvis ikke logget inn, omdiriger til innloggingssiden
    res.redirect("/auth/logginn");
  }
});

// Ruter
app.use(leaderboardRouter);
app.use(CTFruter);
app.use(Oppgaver);
app.use("/auth", logginnrouter);

// Start server
app.listen(port, () => {
  console.log(`Blackjack-server kjører på http://localhost:${port}`);
});
