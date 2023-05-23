// creating a var paragraf with element P
var paragraf = document.createElement("p");

// input content in paragraf element
paragraf.innerHTML = "moi prvi paragraf u JS filu";

// input content in P eleemnt on site
document.getElementById("text").appendChild(paragraf);

// styling a content in paragraf element
paragraf.style.color = "red";

// create a linkk to my portofolio website
var myPortofolio = document.createElement("a");
// adding a linkk to my portofolio
myPortofolio.setAttribute("href", "https://momcilonikolic.netlify.app/");
myPortofolio.setAttribute("target", "_blank");
// adding a link content
myPortofolio.innerHTML = "My portofolio website";
// adding link in element
document.getElementById("text").appendChild(myPortofolio);

// input f1 img in element
var f1Img = document.createElement("img");
f1Img.setAttribute("src", "img/f1.jpeg");
document.getElementById("text").appendChild(f1Img);
