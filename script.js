// Assignment Code
var generateBtn = document.querySelector("#generate");
var wordsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wordsLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%^&*(),-:;<>+=?}{][_|`~";
var allowedChar = " ";
var usersPersonalPassword = " ";

// Write password to the #password input
function writePassword() {
  // var password = generatePassword()
  // {
  // ask the user how many chars they want
  var passwordLengthAsString = prompt("Specify password character length (between 8 - 128 characters)");
  // sanity check
  console.log(passwordLengthAsString);
  // if the user password gives hits cancel (passwordLenghtAsString === null) or if is and empty string (=== "") return
  



  // convert that answer to a number
  var passwordLength = parseInt(passwordLengthAsString);

  // sanity checky
  console.log(passwordLength)


  var isUpperCaseSelected = confirm("Include upper case?");
  var isLowerCaseSelected = confirm("Include lower case?");
  var isNumbersSelected = confirm("Include numbers?");
  var isSpecialCharSelected = confirm("Inculde special characters?");
  // prove ok or cancel from confirm gives a boolean
  console.log(isUpperCaseSelected, isLowerCaseSelected, isNumbersSelected, isSpecialCharSelected)

  // how do we use this data to create a x long password containing the chosen chars
  
  // decide which char the user selected and dump(concatenate) them into a big string
  if (isUpperCaseSelected === true){
    allowedChar += wordsUpper
  } 
  if (isLowerCaseSelected === true){
    allowedChar += wordsLower
  } 
  if (isSpecialCharSelected === true){
    allowedChar += special
  } 
  if (isNumbersSelected === true){
    allowedChar += numbers
  } else allowedChar += " ";
  //sanity check
  console.log(allowedChar);

  for (var i = 0; i < passwordLength; i++)
    usersPersonalPassword += allowedChar.charAt(Math.floor(Math.random()* allowedChar.length));

    console.log(usersPersonalPassword);
  
  // document.getElementById("password")
  // p.textContent = usersPersonalPassword;

  passwordText = document.querySelector("#password");

  passwordText.value = usersPersonalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
