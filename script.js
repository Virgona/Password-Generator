// Assignment Code
var generateBtn = document.querySelector("#generate");
var wordsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wordsLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%^&*(),-:;<>+=?}{][_|`~";
var allowedChar = " ";
var usersPersonalPassword = " ";


function writePassword() {

  var passwordLengthAsString = prompt("Specify password character length (between 8 - 128 characters)");
  //resets if users clicks cancel
  if (!passwordLengthAsString){
    return;
  }
  // resets and sends error if users selects invalid characters
  if (passwordLengthAsString < 8 || passwordLengthAsString > 128){

    alert("Characters do not meet specifications");
    return;

  }
  
  // convert that answer to a number
  var passwordLength = parseInt(passwordLengthAsString);

  // getting user input. Customizing their password
  var isUpperCaseSelected = confirm("Include upper case?");
  var isLowerCaseSelected = confirm("Include lower case?");
  var isNumbersSelected = confirm("Include numbers?");
  var isSpecialCharSelected = confirm("Inculde special characters?");
  
  // sorting user inputs so that they are either entered into a new variable or not
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
  } if (!isLowerCaseSelected || !isUpperCaseSelected || !isSpecialCharSelected || !isNumbersSelected){ 
    allowedChar += " ";
  }
  if (allowedChar == 0){
    alert("You must pick from at least one option for a password to generate");
    return;
  }

  // looping over the length that the user requested to define the length of their unique password. Then randomly selecting the characters from the new variable defined above
  for (var i = 0; i < passwordLength; i++)
    usersPersonalPassword += allowedChar.charAt(Math.floor(Math.random()* allowedChar.length));

  passwordText = document.querySelector("#password");

  passwordText.value = usersPersonalPassword;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
