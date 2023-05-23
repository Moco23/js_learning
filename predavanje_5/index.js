// creating a var paragraf with element P
var paragraf = document.createElement("p");

// input content in paragraf element
paragraf.innerHTML = "moi prvi paragraf u JS filu";

// input content in P eleemnt on site
document.getElementById("text").appendChild(paragraf);

// styling a content in paragraf element
paragraf.style.color = "red";
