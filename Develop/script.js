// Assignment code here
lowChar= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
upChar= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numChar= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
speChar= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "'", ";", ":", "<", ".", ">", "/", "?", "[", "{", "]", "}"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var promptLength = window.prompt("How long would you like your password to be? Enter a number between 8 and 128.");
  var confirmSpec = window.confirm("Would you like your password to contain special characters?");
  var confirmNum = window.confirm("Would you like your password to contain numerical characters?");
  var confirmLow = window.confirm("Would you like your password to contain lowercase characters?");
  var confirmUp = window.confirm("Would you like your password to contain uppercase chracters?");

  if (!confirmSpec && !confirmNum && !confirmLow && !confirmUp) {
    choices = window.alert("Error: you must choose at least one type of character for you password.");
  }

  else if (confirmSpec && confirmNum && confirmLow && confirmUp) {
    choices = speChar.concat(numChar, lowChar, upChar);
  }

  else if (confirmSpec && confirmNum && confirmLow) {
    choices = speChar.concat(numChar, lowChar);
  }

  else if (confirmSpec && confirmNum && confirmUp) {
    choices = speChar.concat(numChar, upChar);
  }

  else if (confirmSpec && confirmLow && confirmUp) {
    choices = speChar.concat(lowChar, upChar);
  }

  else if (confirmNum && confirmLow && confirmUp) {
    choices = numChar.concat(lowChar, upChar);
  }

  else if (confirmSpec && confirmNum) {
    choices = speChar.concat(numChar, lowChar, upChar);
  }

  else if (confirmSpec && confirmLow) {
    choices = speChar.concat(lowChar);
  }

  else if (confirmSpec && confirmUp) {
    choices = speChar.concat(upChar);
  }

  else if (confirmNum && confirmLow) {
    choices = numChar.concat(lowChar);
  }

  else if (confirmNum && confirmUp) {
    choices = numChar.concat(upChar);
  }

  else if (confirmLow && confirmUp) {
    choices = lowChar.concat(upChar);
  }

  else if (confirmSpec) {
    choices = speChar;
  }

  else if (confirmNum) {
    choices = numChar;
  }

  else if (confirmLow) {
    choices = lowChar;
  }

  else if (confirmUp) {
    choices = upChar;
  }


  passwordText.value = password;

var writePassword = function() {
  for (i = 0; i <promptLength; i++) {
    userPass = (a);
  }
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
