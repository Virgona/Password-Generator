// Assignment Code
var generateBtn = document.querySelector("#generate");
var wordsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wordsLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%^&*(),-:;<>+=?}{][_|`~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
    {
      readInt("Specify password character length (between 8 - 128 characters)");
  // // //   if (v = !numbers())
  // // //   {
  // // //     return;
  // // //   }
  // // //   if (v = numbers()){
  // // //     w = confirm("Include upper case?");
  // // //     x = confirm("Include lower case?");
  // // //     y = confirm("Include numbers?");
  // // //     z = confirm("Inculde special characters?");
    }
  // //  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
