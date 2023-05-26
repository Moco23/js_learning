// prompt name validator with lover case
var nameValidation = prompt("What is your name?");
// convert upper case to lover case and lover to uppercase
nameValidation = nameValidation.toLowerCase();
if (nameValidation == "momcilo") {
  console.log("name is corect");
} else {
  console.log("name is not corect");
}
