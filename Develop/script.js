// Assignment code here
lowChar= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
upChar= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numChar= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
speChar= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "'", ";", ":", "<", ".", ">", "/", "?", "[", "{", "]", "}"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var length = parseInt(window.prompt("How long would you like your password to be? Enter a number between 8 and 128."));
    // alert user if nothing is entered into password length prompt
    if (!length) {
      window.alert("Your password must have a length between 8 and 128. Please try again.");
    }
    else if (length < 8 || length > 128) {
      length = parseInt(window.prompt("You must choose between 8 and 128"));
    }
    // series of confirmations for each of the four types of characters
    else {
      var confirmSpec = window.confirm("Would you like your password to contain special characters?");
      var confirmNum = window.confirm("Would you like your password to contain numerical characters?");
      var confirmLow = window.confirm("Would you like your password to contain lowercase characters?");
      var confirmUp = window.confirm("Would you like your password to contain uppercase chracters?");
    };

  // alert user if no characters are chosen for password. Passwords will not be created with blanks or spaces.
  if (!confirmSpec && !confirmNum && !confirmLow && !confirmUp) {
    choices = window.alert("Error: you must choose at least one type of character for you password.");
  }

  // All confirms denied, no characters chosen
  else if (confirmSpec && confirmNum && confirmLow && confirmUp) {
    choices = speChar.concat(numChar, lowChar, upChar);
  }

  // Special + Numbers + Lowercase
  else if (confirmSpec && confirmNum && confirmLow) {
    choices = speChar.concat(numChar, lowChar);
  }

  // Special + Numbers + Uppercase
  else if (confirmSpec && confirmNum && confirmUp) {
    choices = speChar.concat(numChar, upChar);
  }

  // Special + Lowercase + Uppercase
  else if (confirmSpec && confirmLow && confirmUp) {
    choices = speChar.concat(lowChar, upChar);
  }

  // Numbers + Lowercase + Uppercase
  else if (confirmNum && confirmLow && confirmUp) {
    choices = numChar.concat(lowChar, upChar);
  }

  // Special + Numbers
  else if (confirmSpec && confirmNum) {
    choices = speChar.concat(numChar, lowChar, upChar);
  }

  // Special + Lowercase
  else if (confirmSpec && confirmLow) {
    choices = speChar.concat(lowChar);
  }

  // Special + Uppercase
  else if (confirmSpec && confirmUp) {
    choices = speChar.concat(upChar);
  }

  // Numbers + Lowercase
  else if (confirmNum && confirmLow) {
    choices = numChar.concat(lowChar);
  }

  // Numbers + Uppercase
  else if (confirmNum && confirmUp) {
    choices = numChar.concat(upChar);
  }

  // Lowercase + Uppercase
  else if (confirmLow && confirmUp) {
    choices = lowChar.concat(upChar);
  }

  // Specials only
  else if (confirmSpec) {
    choices = speChar;
  }

  // Numbers only
  else if (confirmNum) {
    choices = numChar;
  }

  // Lowercase only
  else if (confirmLow) {
    choices = lowChar;
  }

  // Uppercase only
  else if (confirmUp) {
    choices = upChar;
  }

  // passwordText.value = password;

// for loop
var writePassword = function() {
 for (i = 0; i <length; i++) {
    userPass = (passwordText(Math.Floor)(Math.random() * length));
    console.log(writePassword);
    console.log(passwordText);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}