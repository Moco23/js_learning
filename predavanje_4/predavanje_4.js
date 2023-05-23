var naslov = "Momcilo Nikolicin Frontend Development";
document.getElementById("naslov").innerHTML = naslov;
document.getElementById("naslov2").innerHTML = naslov;

document.getElementById("listaAutomobila").innerHTML = "<p>Audi a6</p>";
document.getElementById("listaAutomobila").innerHTML += "<p>Audi a8</p>";

var ime = "Momcilo";
var prezime = "Nikolic";
var godine = 26;
var grad = "Pula";
var drzava = "Hrvatska";

var recenica =
  "zovem se " +
  ime +
  prezime +
  "ima " +
  godine +
  "godina, zivim u gradu " +
  grad +
  drzava;

document.getElementById("o_meni").innerHTML = recenica;
