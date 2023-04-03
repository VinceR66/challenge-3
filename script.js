// Assignment Code

var upper;
var lower;
var special;
var number;
var length;



var length = prompt('How many characters do you want in your password, enter a number between 8 and 128');
Number(length)
while (length < 8 || length > 128) {
  alert('Please enter a number between 8 and 128');
  length = prompt('How many characters do you want in your password, enter a number between 8 and 128');
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
  var userChoice = upper.concat(lower, special, number);
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
