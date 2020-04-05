// Assignment code here
var lowerChar= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
var upperChar= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
var numChar= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
var speChar= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "'", ";", ":", "<", ".", ">", "/", "?", "[", "{", "]", "}"],


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var promptLength = window.prompt('How long would you like your password to be? Enter a number between 8 and 128.');
    if (promptLength === '')
  var confirmSpec = window.confirm('Would you like your password to contain special characters? Enter "YES" for special characters, or "NO" for no special characters.');
    if (confirmSpec === 'yes' || 'YES') {

    }
  var confirmNum = window.confirm('Would you like your password to contain numerical characters? Enter "YES" for numerical characters, or "NO" for no numerical characters.');
    if (confirmNum === 'yes' || 'YES') {

    }

  var confirmLow = window.confirm('Would you like your password to contain lowercase characters? Enter "YES" for lowercase characters, or "NO" for no lowercase characters.');
    if (confirmLow === 'yes' || 'YES') {

    }
  
  var confirmUp = window.confirm('Would you like your password to contain uppercase chracters? Enter "YES" for uppercase characters, or "NO" for no uppercase characters.');
    if (confirmUP === 'yes' || 'YES') {

    }

  passwordText.value = password;

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
