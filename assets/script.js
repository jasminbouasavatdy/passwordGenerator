// Assignment Code



var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charSet = "";
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "~!@#$%^&*()-=+[]:;<>?";
  var numbers = "0123456789"
  var genPassword = "";


  var isLowerCaseLetters = Boolean(confirm("Do you want lowercase letters in your password?"))
  if (isLowerCaseLetters) {
    charSet += lower;
  }

  var isUpperCaseLetters = Boolean(confirm("Do you want uppercase letters in your password?"))
  if (isUpperCaseLetters) {
    charSet += upper;
  }

  var isSpecialCharacters = Boolean(confirm("Do you want special characters in your password?"))
  if (isSpecialCharacters) {
    charSet += special;
  }

  var isNumbers = Boolean(confirm("Do you want numbers in your password?"))
  if (isNumbers) {
    charSet += numbers;
  }
  if (charSet.length == 0) {
    alert("You must have at least one character type selected. Please try again");
    return "";
  }

  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  console.log(count);

  if (count < 8 || count > 128) {
    alert("Please enter a password length of least 8 characters and no more than 128 characters.");
    return "";
  }

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * charSet.length);
    genPassword += charSet[random];
  }

  console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
