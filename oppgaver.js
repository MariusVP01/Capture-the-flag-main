// oppgaver.js – backend only

const oppgaver = {
  "intro-variabler": {
    id: "intro-variabler",
    tittel: "Variabler 1",
    kortBeskrivelse: "let / const, enkel output",
    beskrivelse: `Hva skriver denne koden ut?

let x = 5;
let y = 3;
console.log(x + y);`,
    fasit: "8",
    poeng: 5,
    vanskelighet: "easy",
    hovedtema: "Variabler",
    flagg: "FLAG{intro_variabler_riktig}",
  },

  "if-conditions": {
    id: "if-conditions",
    tittel: "If-setninger",
    kortBeskrivelse: "if / else, enkel logikk",
    beskrivelse: `Hva blir verdien til variabelen "tekst"?

let alder = 17;
let tekst;

if (alder >= 18) {
  tekst = "voksen";
} else {
  tekst = "mindreårig";
}`,
    fasit: "mindreårig",
    poeng: 8,
    vanskelighet: "easy",
    hovedtema: "Betingelser",
    flagg: "FLAG{if_conditions_clear}",
  },

  "loops-basic": {
    id: "loops-basic",
    tittel: "Løkker 1",
    kortBeskrivelse: "for-løkke, telle 1–10",
    beskrivelse: `Hva skrives ut i konsollen?

for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
    fasit: "1 2 3",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Løkker",
    flagg: "FLAG{loops_basic_looper}",
  },

  "arrays-basic": {
    id: "arrays-basic",
    tittel: "Lister 1",
    kortBeskrivelse: "array, index, length",
    beskrivelse: `Hva skriver denne koden ut?

const tall = [10, 20, 30];
console.log(tall[1]);`,
    fasit: "20",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Arrays",
    flagg: "FLAG{arrays_basic_index}",
  },

  "functions-basic": {
    id: "functions-basic",
    tittel: "Funksjoner 1",
    kortBeskrivelse: "parametre, return-verdi",
    beskrivelse: `Hva skriver denne koden ut i konsollen?

function leggSammen(a, b) {
  return a + b;
}

console.log(leggSammen(2, 5));`,
    fasit: "7",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Funksjoner",
    flagg: "FLAG{functions_basic_return}",
  },

  "dom-manipulation": {
    id: "dom-manipulation",
    tittel: "DOM & events",
    kortBeskrivelse: "klikk-knapp, oppdatere tekst",
    beskrivelse: `Hva vil stå inne i <p>-elementet etter at knappen er trykket én gang?

HTML:
<p id="tekst">Start</p>
<button id="knapp">Klikk</button>

JS:
const p = document.getElementById("tekst");
const knapp = document.getElementById("knapp");

knapp.addEventListener("click", () => {
  p.textContent = "Klikket!";
});`,
    fasit: "Klikket!",
    poeng: 15,
    vanskelighet: "hard",
    hovedtema: "DOM",
    flagg: "FLAG{dom_manipulation_click}",
  },

  "logic-ctf": {
    id: "logic-ctf",
    tittel: "Mini-CTF logikk",
    kortBeskrivelse: "kombinere variabler, if og løkker",
    beskrivelse: `Hva skriver denne koden ut?

let sum = 0;

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}

console.log(sum);`,
    fasit: "6", // 2 + 4
    poeng: 20,
    vanskelighet: "hard",
    hovedtema: "Logikk",
    flagg: "FLAG{logic_ctf_sum_even}",
  },

  "bonus-extra": {
    id: "bonus-extra",
    tittel: "Bonus-oppgave",
    kortBeskrivelse: "litt vrien, flere konsepter",
    beskrivelse: `Hva blir verdien av variabelen "resultat" til slutt?

let resultat = 1;
const tall = [2, 3, 4];

for (let i = 0; i < tall.length; i++) {
  resultat = resultat * tall[i];
}`,
    fasit: "24",
    poeng: 25,
    vanskelighet: "expert",
    hovedtema: "Blandet",
    flagg: "FLAG{bonus_extra_24}",
  },

  "if-conditions2": {
    id: "if-conditions2",
    tittel: "If-setninger",
    kortBeskrivelse: "if / else, enkel logikk",
    beskrivelse: `Hva blir verdien til variabelen "tekst"?

let alder = 17;
let tekst;

if (alder >= 18) {
  tekst = "voksen";
} else {
  tekst = "mindreårig";
}`,
    fasit: "mindreårig",
    poeng: 8,
    vanskelighet: "easy",
    hovedtema: "Betingelser",
    flagg: "FLAG{if_conditions_clear}",
  },
  "if-conditions3": {
    id: "if-conditions3",
    tittel: "If-setninger",
    kortBeskrivelse: "if / else, enkel logikk",
    beskrivelse: `Hva blir verdien til variabelen "tekst"?

let alder = 17;
let tekst;

if (alder >= 18) {
  tekst = "voksen";
} else {
  tekst = "mindreårig";
}`,
    fasit: "mindreårig",
    poeng: 8,
    vanskelighet: "easy",
    hovedtema: "Betingelser",
    flagg: "FLAG{if_conditions_clear}",
  },
  "intro-variabler-2": {
    id: "intro-variabler-2",
    tittel: "Variabler 2",
    kortBeskrivelse: "let, enkel utregning",
    beskrivelse: `Hva skriver denne koden ut?

let a = 2;
let b = 4;
let c = a * b;
console.log(c);`,
    fasit: "8",
    poeng: 5,
    vanskelighet: "easy",
    hovedtema: "Variabler",
    flagg: "FLAG{intro_variabler_2}",
  },

  "intro-variabler-3": {
    id: "intro-variabler-3",
    tittel: "Variabler 3",
    kortBeskrivelse: "reassign variabel",
    beskrivelse: `Hva skriver denne koden ut?

let x = 10;
x = x - 3;
console.log(x);`,
    fasit: "7",
    poeng: 5,
    vanskelighet: "easy",
    hovedtema: "Variabler",
    flagg: "FLAG{intro_variabler_3}",
  },

  "intro-variabler-4": {
    id: "intro-variabler-4",
    tittel: "Variabler 4",
    kortBeskrivelse: "konkatenering av tekst",
    beskrivelse: `Hva skriver denne koden ut?

let fornavn = "Ola";
let etternavn = "Nordmann";
let navn = fornavn + " " + etternavn;
console.log(navn);`,
    fasit: "Ola Nordmann",
    poeng: 5,
    vanskelighet: "easy",
    hovedtema: "Variabler",
    flagg: "FLAG{intro_variabler_4}",
  },

  "intro-variabler-5": {
    id: "intro-variabler-5",
    tittel: "Variabler 5",
    kortBeskrivelse: "const og let",
    beskrivelse: `Hva skriver denne koden ut?

const pris = 50;
let antall = 3;
let total = pris * antall;
console.log(total);`,
    fasit: "150",
    poeng: 5,
    vanskelighet: "easy",
    hovedtema: "Variabler",
    flagg: "FLAG{intro_variabler_5}",
  },

  "intro-variabler-6": {
    id: "intro-variabler-6",
    tittel: "Variabler 6",
    kortBeskrivelse: "endre verdi flere ganger",
    beskrivelse: `Hva skriver denne koden ut?

let poeng = 0;
poeng = poeng + 10;
poeng = poeng - 3;
console.log(poeng);`,
    fasit: "7",
    poeng: 5,
    vanskelighet: "easy",
    hovedtema: "Variabler",
    flagg: "FLAG{intro_variabler_6}",
  },
  "if-conditions-2": {
    id: "if-conditions-2",
    tittel: "If-setninger 2",
    kortBeskrivelse: "if / else med poenggrense",
    beskrivelse: `Hva blir verdien til variabelen "status"?

let poeng = 60;
let status;

if (poeng >= 50) {
  status = "bestått";
} else {
  status = "ikke bestått";
}`,
    fasit: "bestått",
    poeng: 8,
    vanskelighet: "easy",
    hovedtema: "Betingelser",
    flagg: "FLAG{if_conditions_2}",
  },

  "if-conditions-3-new": {
    id: "if-conditions-3-new",
    tittel: "If-setninger 3",
    kortBeskrivelse: "if / else med like",
    beskrivelse: `Hva blir verdien til variabelen "melding"?

let brukernavn = "admin";
let melding;

if (brukernavn === "admin") {
  melding = "Velkommen, admin";
} else {
  melding = "Vanlig bruker";
}`,
    fasit: "Velkommen, admin",
    poeng: 8,
    vanskelighet: "easy",
    hovedtema: "Betingelser",
    flagg: "FLAG{if_conditions_3}",
  },

  "if-conditions-4": {
    id: "if-conditions-4",
    tittel: "If-setninger 4",
    kortBeskrivelse: "if / else if / else",
    beskrivelse: `Hva blir verdien til variabelen "kategori"?

let temp = 5;
let kategori;

if (temp > 20) {
  kategori = "varmt";
} else if (temp >= 0) {
  kategori = "kaldt";
} else {
  kategori = "minusgrader";
}`,
    fasit: "kaldt",
    poeng: 8,
    vanskelighet: "easy",
    hovedtema: "Betingelser",
    flagg: "FLAG{if_conditions_4}",
  },

  "if-conditions-5": {
    id: "if-conditions-5",
    tittel: "If-setninger 5",
    kortBeskrivelse: "logisk OG (&&)",
    beskrivelse: `Hva blir verdien til variabelen "kanLoggeInn"?

let harBruker = true;
let harPassord = false;
let kanLoggeInn;

if (harBruker && harPassord) {
  kanLoggeInn = "ja";
} else {
  kanLoggeInn = "nei";
}`,
    fasit: "nei",
    poeng: 8,
    vanskelighet: "easy",
    hovedtema: "Betingelser",
    flagg: "FLAG{if_conditions_5}",
  },

  "if-conditions-6": {
    id: "if-conditions-6",
    tittel: "If-setninger 6",
    kortBeskrivelse: "modulo og if",
    beskrivelse: `Hva blir verdien til variabelen "typeTall"?

let tall = 9;
let typeTall;

if (tall % 2 === 0) {
  typeTall = "partall";
} else {
  typeTall = "oddetall";
}`,
    fasit: "oddetall",
    poeng: 8,
    vanskelighet: "easy",
    hovedtema: "Betingelser",
    flagg: "FLAG{if_conditions_6}",
  },
  "loops-basic-2": {
    id: "loops-basic-2",
    tittel: "Løkker 2",
    kortBeskrivelse: "for-løkke, telle ned",
    beskrivelse: `Hva skrives ut i konsollen?

for (let i = 3; i >= 1; i--) {
  console.log(i);
}`,
    fasit: "3 2 1",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Løkker",
    flagg: "FLAG{loops_basic_2}",
  },

  "loops-basic-3": {
    id: "loops-basic-3",
    tittel: "Løkker 3",
    kortBeskrivelse: "sum i løkke",
    beskrivelse: `Hva skrives ut i konsollen?

let sum = 0;

for (let i = 1; i <= 4; i++) {
  sum = sum + i;
}

console.log(sum);`,
    fasit: "10",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Løkker",
    flagg: "FLAG{loops_basic_3}",
  },

  "loops-basic-4": {
    id: "loops-basic-4",
    tittel: "Løkker 4",
    kortBeskrivelse: "hoppe over med if",
    beskrivelse: `Hva skrives ut i konsollen?

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}`,
    fasit: "1 2 4 5",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Løkker",
    flagg: "FLAG{loops_basic_4}",
  },

  "loops-basic-5": {
    id: "loops-basic-5",
    tittel: "Løkker 5",
    kortBeskrivelse: "break i løkke",
    beskrivelse: `Hva skrives ut i konsollen?

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}`,
    fasit: "1 2",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Løkker",
    flagg: "FLAG{loops_basic_5}",
  },

  "loops-basic-6": {
    id: "loops-basic-6",
    tittel: "Løkker 6",
    kortBeskrivelse: "for-løkke med steg på 2",
    beskrivelse: `Hva skrives ut i konsollen?

for (let i = 0; i <= 6; i = i + 2) {
  console.log(i);
}`,
    fasit: "0 2 4 6",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Løkker",
    flagg: "FLAG{loops_basic_6}",
  },
  "arrays-basic-2": {
    id: "arrays-basic-2",
    tittel: "Lister 2",
    kortBeskrivelse: "array length",
    beskrivelse: `Hva skriver denne koden ut?

const dyr = ["katt", "hund", "fugl"];
console.log(dyr.length);`,
    fasit: "3",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Arrays",
    flagg: "FLAG{arrays_basic_2}",
  },

  "arrays-basic-3": {
    id: "arrays-basic-3",
    tittel: "Lister 3",
    kortBeskrivelse: "siste element i liste",
    beskrivelse: `Hva skriver denne koden ut?

const farger = ["rød", "grønn", "blå"];
console.log(farger[2]);`,
    fasit: "blå",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Arrays",
    flagg: "FLAG{arrays_basic_3}",
  },

  "arrays-basic-4": {
    id: "arrays-basic-4",
    tittel: "Lister 4",
    kortBeskrivelse: "endre verdi i array",
    beskrivelse: `Hva skriver denne koden ut?

const tall = [1, 2, 3];
tall[1] = 5;
console.log(tall[1]);`,
    fasit: "5",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Arrays",
    flagg: "FLAG{arrays_basic_4}",
  },

  "arrays-basic-5": {
    id: "arrays-basic-5",
    tittel: "Lister 5",
    kortBeskrivelse: "push i array",
    beskrivelse: `Hva skriver denne koden ut?

const tall = [10, 20];
tall.push(30);
console.log(tall.length);`,
    fasit: "3",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Arrays",
    flagg: "FLAG{arrays_basic_5}",
  },

  "arrays-basic-6": {
    id: "arrays-basic-6",
    tittel: "Lister 6",
    kortBeskrivelse: "index og length",
    beskrivelse: `Hva skriver denne koden ut?

const navn = ["Ida", "Per", "Ali", "Mia"];
const siste = navn[navn.length - 1];
console.log(siste);`,
    fasit: "Mia",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Arrays",
    flagg: "FLAG{arrays_basic_6}",
  },
  "functions-basic-2": {
    id: "functions-basic-2",
    tittel: "Funksjoner 2",
    kortBeskrivelse: "return og kall",
    beskrivelse: `Hva skriver denne koden ut?

function gangerTo(tall) {
  return tall * 2;
}

console.log(gangerTo(4));`,
    fasit: "8",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Funksjoner",
    flagg: "FLAG{functions_basic_2}",
  },

  "functions-basic-3": {
    id: "functions-basic-3",
    tittel: "Funksjoner 3",
    kortBeskrivelse: "flere parametre",
    beskrivelse: `Hva skriver denne koden ut?

function lagHilsen(fornavn, alder) {
  return "Hei " + fornavn + ", du er " + alder + " år";
}

console.log(lagHilsen("Oda", 16));`,
    fasit: "Hei Oda, du er 16 år",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Funksjoner",
    flagg: "FLAG{functions_basic_3}",
  },

  "functions-basic-4": {
    id: "functions-basic-4",
    tittel: "Funksjoner 4",
    kortBeskrivelse: "funksjon som kaller funksjon",
    beskrivelse: `Hva skriver denne koden ut?

function plussEn(tall) {
  return tall + 1;
}

function plussTo(tall) {
  return plussEn(tall) + 1;
}

console.log(plussTo(5));`,
    fasit: "7",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Funksjoner",
    flagg: "FLAG{functions_basic_4}",
  },

  "functions-basic-5": {
    id: "functions-basic-5",
    tittel: "Funksjoner 5",
    kortBeskrivelse: "if inni funksjon",
    beskrivelse: `Hva skriver denne koden ut?

function erMynt(verdi) {
  if (verdi === "kron") {
    return "Norsk mynt";
  } else {
    return "Annet";
  }
}

console.log(erMynt("kron"));`,
    fasit: "Norsk mynt",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Funksjoner",
    flagg: "FLAG{functions_basic_5}",
  },

  "functions-basic-6": {
    id: "functions-basic-6",
    tittel: "Funksjoner 6",
    kortBeskrivelse: "default logikk",
    beskrivelse: `Hva skriver denne koden ut?

function tilMeter(cm) {
  return cm / 100;
}

let resultat = tilMeter(250);
console.log(resultat);`,
    fasit: "2.5",
    poeng: 10,
    vanskelighet: "medium",
    hovedtema: "Funksjoner",
    flagg: "FLAG{functions_basic_6}",
  },
  "dom-manipulation-2": {
    id: "dom-manipulation-2",
    tittel: "DOM & events 2",
    kortBeskrivelse: "telle klikk",
    beskrivelse: `Hva vil stå inne i <p>-elementet etter at knappen er trykket to ganger?

HTML:
<p id="teller">0</p>
<button id="knapp">Klikk</button>

JS:
const p = document.getElementById("teller");
const knapp = document.getElementById("knapp");
let antall = 0;

knapp.addEventListener("click", () => {
  antall = antall + 1;
  p.textContent = antall;
});`,
    fasit: "2",
    poeng: 15,
    vanskelighet: "hard",
    hovedtema: "DOM",
    flagg: "FLAG{dom_manipulation_2}",
  },

  "dom-manipulation-3": {
    id: "dom-manipulation-3",
    tittel: "DOM & events 3",
    kortBeskrivelse: "lese input-verdi",
    beskrivelse: `Hva vil stå inne i <p>-elementet etter at knappen er trykket én gang?

HTML:
<input id="navnInput" value="Ola" />
<p id="hilsen">Ingen hilsen</p>
<button id="knapp">Si hei</button>

JS:
const input = document.getElementById("navnInput");
const p = document.getElementById("hilsen");
const knapp = document.getElementById("knapp");

knapp.addEventListener("click", () => {
  p.textContent = "Hei " + input.value;
});`,
    fasit: "Hei Ola",
    poeng: 15,
    vanskelighet: "hard",
    hovedtema: "DOM",
    flagg: "FLAG{dom_manipulation_3}",
  },

  "dom-manipulation-4": {
    id: "dom-manipulation-4",
    tittel: "DOM & events 4",
    kortBeskrivelse: "endre tekst to ganger",
    beskrivelse: `Hva vil stå inne i <p>-elementet etter at knappen er trykket to ganger?

HTML:
<p id="status">Av</p>
<button id="knapp">Bytt</button>

JS:
const p = document.getElementById("status");
const knapp = document.getElementById("knapp");

knapp.addEventListener("click", () => {
  if (p.textContent === "Av") {
    p.textContent = "På";
  } else {
    p.textContent = "Av";
  }
});`,
    fasit: "Av",
    poeng: 15,
    vanskelighet: "hard",
    hovedtema: "DOM",
    flagg: "FLAG{dom_manipulation_4}",
  },

  "dom-manipulation-5": {
    id: "dom-manipulation-5",
    tittel: "DOM & events 5",
    kortBeskrivelse: "legge til tekst",
    beskrivelse: `Hva vil stå inne i <p>-elementet etter tre klikk?

HTML:
<p id="logg"></p>
<button id="knapp">Klikk</button>

JS:
const p = document.getElementById("logg");
const knapp = document.getElementById("knapp");

knapp.addEventListener("click", () => {
  p.textContent = p.textContent + "x";
});`,
    fasit: "xxx",
    poeng: 15,
    vanskelighet: "hard",
    hovedtema: "DOM",
    flagg: "FLAG{dom_manipulation_5}",
  },

  "dom-manipulation-6": {
    id: "dom-manipulation-6",
    tittel: "DOM & events 6",
    kortBeskrivelse: "innerText vs value",
    beskrivelse: `Hva vil stå inne i <p>-elementet etter at knappen er trykket én gang?

HTML:
<input id="alderInput" value="18" />
<p id="info">Ukjent</p>
<button id="knapp">Sjekk</button>

JS:
const input = document.getElementById("alderInput");
const p = document.getElementById("info");
const knapp = document.getElementById("knapp");

knapp.addEventListener("click", () => {
  p.textContent = "Alder: " + input.value;
});`,
    fasit: "Alder: 18",
    poeng: 15,
    vanskelighet: "hard",
    hovedtema: "DOM",
    flagg: "FLAG{dom_manipulation_6}",
  },
  "logic-ctf-2": {
    id: "logic-ctf-2",
    tittel: "Mini-CTF logikk 2",
    kortBeskrivelse: "sum av oddetall",
    beskrivelse: `Hva skriver denne koden ut?

let sum = 0;

for (let i = 1; i <= 7; i++) {
  if (i % 2 === 1) {
    sum = sum + i;
  }
}

console.log(sum);`,
    fasit: "16", // 1+3+5+7
    poeng: 20,
    vanskelighet: "hard",
    hovedtema: "Logikk",
    flagg: "FLAG{logic_ctf_2}",
  },

  "logic-ctf-3": {
    id: "logic-ctf-3",
    tittel: "Mini-CTF logikk 3",
    kortBeskrivelse: "telle spesielle verdier",
    beskrivelse: `Hva skriver denne koden ut?

const tall = [1, 4, 7, 2, 8, 3];
let teller = 0;

for (let i = 0; i < tall.length; i++) {
  if (tall[i] > 3) {
    teller = teller + 1;
  }
}

console.log(teller);`,
    fasit: "4",
    poeng: 20,
    vanskelighet: "hard",
    hovedtema: "Logikk",
    flagg: "FLAG{logic_ctf_3}",
  },

  "logic-ctf-4": {
    id: "logic-ctf-4",
    tittel: "Mini-CTF logikk 4",
    kortBeskrivelse: "produkt av noen tall",
    beskrivelse: `Hva skriver denne koden ut?

let produkt = 1;

for (let i = 1; i <= 4; i++) {
  if (i !== 3) {
    produkt = produkt * i;
  }
}

console.log(produkt);`,
    fasit: "8", // 1*2*4
    poeng: 20,
    vanskelighet: "hard",
    hovedtema: "Logikk",
    flagg: "FLAG{logic_ctf_4}",
  },

  "logic-ctf-5": {
    id: "logic-ctf-5",
    tittel: "Mini-CTF logikk 5",
    kortBeskrivelse: "tegnstreng bygges i løkke",
    beskrivelse: `Hva skriver denne koden ut?

let tekst = "";

for (let i = 0; i < 3; i++) {
  tekst = tekst + "A";
}

for (let i = 0; i < 2; i++) {
  tekst = tekst + "B";
}

console.log(tekst);`,
    fasit: "AAABB",
    poeng: 20,
    vanskelighet: "hard",
    hovedtema: "Logikk",
    flagg: "FLAG{logic_ctf_5}",
  },

  "logic-ctf-6": {
    id: "logic-ctf-6",
    tittel: "Mini-CTF logikk 6",
    kortBeskrivelse: "kombinere if og array",
    beskrivelse: `Hva skriver denne koden ut?

const svar = ["feil", "feil", "riktig", "feil"];
let poeng = 0;

for (let i = 0; i < svar.length; i++) {
  if (svar[i] === "riktig") {
    poeng = poeng + 10;
  } else {
    poeng = poeng - 2;
  }
}

console.log(poeng);`,
    fasit: "4", // -2 -2 +10 -2
    poeng: 20,
    vanskelighet: "hard",
    hovedtema: "Logikk",
    flagg: "FLAG{logic_ctf_6}",
  },
  "bonus-extra-2": {
    id: "bonus-extra-2",
    tittel: "Bonus-oppgave 2",
    kortBeskrivelse: "produkt av tall i liste",
    beskrivelse: `Hva blir verdien av variabelen "resultat" til slutt?

let resultat = 2;
const tall = [1, 2, 3];

for (let i = 0; i < tall.length; i++) {
  resultat = resultat * tall[i];
}

console.log(resultat);`,
    fasit: "12",
    poeng: 25,
    vanskelighet: "expert",
    hovedtema: "Blandet",
    flagg: "FLAG{bonus_extra_2}",
  },

  "bonus-extra-3": {
    id: "bonus-extra-3",
    tittel: "Bonus-oppgave 3",
    kortBeskrivelse: "if + løkke + array",
    beskrivelse: `Hva blir verdien av variabelen "score" til slutt?

let score = 0;
const klikk = ["riktig", "feil", "riktig", "riktig"];

for (let i = 0; i < klikk.length; i++) {
  if (klikk[i] === "riktig") {
    score = score + 5;
  } else {
    score = score - 3;
  }
}`,
    fasit: "12", // 5 -3 +5 +5
    poeng: 25,
    vanskelighet: "expert",
    hovedtema: "Blandet",
    flagg: "FLAG{bonus_extra_3}",
  },

  "bonus-extra-4": {
    id: "bonus-extra-4",
    tittel: "Bonus-oppgave 4",
    kortBeskrivelse: "nestet løkke",
    beskrivelse: `Hva skrives ut i konsollen?

let teller = 0;

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    teller = teller + 1;
  }
}

console.log(teller);`,
    fasit: "6",
    poeng: 25,
    vanskelighet: "expert",
    hovedtema: "Blandet",
    flagg: "FLAG{bonus_extra_4}",
  },

  "bonus-extra-5": {
    id: "bonus-extra-5",
    tittel: "Bonus-oppgave 5",
    kortBeskrivelse: "funksjon + array + løkke",
    beskrivelse: `Hva skrives ut i konsollen?

function dobbelt(tall) {
  return tall * 2;
}

const liste = [1, 2, 3];
let sum = 0;

for (let i = 0; i < liste.length; i++) {
  sum = sum + dobbelt(liste[i]);
}

console.log(sum);`,
    fasit: "12",
    poeng: 25,
    vanskelighet: "expert",
    hovedtema: "Blandet",
    flagg: "FLAG{bonus_extra_5}",
  },

  "bonus-extra-6": {
    id: "bonus-extra-6",
    tittel: "Bonus-oppgave 6",
    kortBeskrivelse: "logikk med break",
    beskrivelse: `Hva skrives ut i konsollen?

const tall = [3, 7, 2, 9, 5];
let funnet = -1;

for (let i = 0; i < tall.length; i++) {
  if (tall[i] > 8) {
    funnet = tall[i];
    break;
  }
}

console.log(funnet);`,
    fasit: "9",
    poeng: 25,
    vanskelighet: "expert",
    hovedtema: "Blandet",
    flagg: "FLAG{bonus_extra_6}",
  },
};

function getOppgave(id) {
  return oppgaver[id] || null;
}

function difficultyRank(level) {
  switch (level) {
    case "easy":
      return 1;
    case "medium":
      return 2;
    case "hard":
      return 3;
    case "expert":
      return 4;
    default:
      return 999; // ukjent → legg sist
  }
}

function getOppgaveListe() {
  return Object.values(oppgaver)
    .sort((a, b) => {
      const da = difficultyRank(a.vanskelighet);
      const db = difficultyRank(b.vanskelighet);
      if (da !== db) return da - db;
      // sekundærsortering: alfabetisk på tittel
      return a.tittel.localeCompare(b.tittel);
    })
    .map((o) => ({
      id: o.id,
      tittel: o.tittel,
      beskrivelse: o.kortBeskrivelse,
      vanskelighet: o.vanskelighet,
      hovedtema: o.hovedtema,
    }));
}
// Denne bruker vi for landingssiden (kun “trygg” info)

module.exports = { getOppgave, getOppgaveListe };
