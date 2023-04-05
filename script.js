// Assignment Code
// Initiated variables

var upper;
var lower;
var special;
var number;
var length;

// Initiated Arrays of possible password character options

let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ">", "<", "(", ")", "{", "}", "[", "]"];
let numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Function to confirm user character choices which determine character options

function generatePassword() {

  var length = parseInt(prompt('How many characters do you want in your password, enter a number between 8 and 128'));

  // used while to confirm password length is in correct range

  while (length < 8 || length > 128) {
    alert('Please enter a number between 8 and 128');
    length = parseInt(prompt('How many characters do you want in your password, enter a number between 8 and 128'));
  }
  console.log(length);

  var upper = confirm('Do you want to use UPPERCASE lettters?');
  console.log(upper);

  var lower = confirm('Do you want to use lowercase letters?');
  console.log(lower);

  var special = confirm('Do you want to use special characters?');
  console.log(special);

  var number = confirm('Do you want to use numbers?');
  console.log(number);

  if (!upper && !lower && !special && !number) {
    var userChoice = alert('You have not chosen any characters. No password can be generated.');
    console.log('none chosen');
  }

  else if (upper && lower && special && number) {
    var userChoice = upperChar.concat(lowerChar, specialChar, numberChar);
  }

  else if (upper && lower && special) {
    var userChoice = upperChar.concat(lowerChar, specialChar);
  }

  else if (upper && lower && number) {
    var userChoice = upperChar.concat(lowerChar, numberChar);
  }

  else if (upper && special && number) {
    var userChoice = upperChar.concat(specialChar, numberChar);
  }

  else if (special && lower && number) {
    var userChoice = specialChar.concat(lowerChar, numberChar);
  }

  else if (upper && lower) {
    var userChoice = upperChar.concat(lowerChar);
  }

  else if (upper && number) {
    var userChoice = upperChar.concat(numberChar);
  }

  else if (upper && special) {
    var userChoice = upperChar.concat(specialChar);
  }

  else if (lower && number) {
    var userChoice = lowerChar.concat(numberChar);
  }

  else if (lower && special) {
    var userChoice = lowerChar.concat(specialChar);
  }

  else if (special && number) {
    var userChoice = specialChar.concat(numberChar);
  }

  else if (upper) {
    var userChoice = upperChar;
  }

  else if (lower) {
    var userChoice = lowerChar;
  }

  else if (special) {
    var userChoice = specialChar;
  }

  else if (number) {
    var userChoice = numberChar;
  }



  // created empty string for random number generator to write password

  var result = ""

  for (var i = 0; i < length; i += 1) {
    result += userChoice[Math.floor(Math.random() * userChoice.length)];
  }
  return result
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
