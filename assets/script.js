// Assignment Code



var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  console.log(count);
  var letters= "abcdefghijklmnopqrstuvwxyz";
  var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special= "~!@#$%^&*()-=+[]:;<>?";
  var numbers= "0123456789"
  var genPassword = "";

if (count<8 || count > 128)
alert("Please enter a character count between 8 - 128")
 return "";

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    genPassword += letters[random];
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
