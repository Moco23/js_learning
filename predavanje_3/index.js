// getting element by id
document.getElementById("mainHeading").innerHTML = "Momcilo Nikolic";
// set color on text
document.getElementById("colorText").style.color = "red";

// geting a document element by id in wariable
var colorText = document.getElementById("colorText");
colorText.innerHTML = "Frontend Developer";
colorText.style.color = "green";

document.getElementsByClassName("mainContent")[0].style.color = "red";
document.getElementsByClassName("mainContent")[1].style.color = "green";
