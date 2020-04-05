// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  window.prompt('How long would you like your password to be? Enter a number between 8 and 128.');

  window.confirm('Would you like your password to contain special characters?');

  window.confirm('Would you like your password to contain numerical characters?');

  window.confirm('Would you like your password to contain lowercase characters?');
  
  window.confirm('Would you like your password to contain uppercase chracters?');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
