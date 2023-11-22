// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// function getPasswordOptions() {

//   var passwordText = document.querySelector("#password");
//   if (passwordText.value)
//   passwordText.value.prompt("Please enter password:", "please enter at least 8 character")
// }
// getPasswordOptions();
// Function for getting a random element from an array
// var randomStr = "";
// var arrTenDigit = Array(10)
// var newArr = numericCharacters.concat(specialCharacters, lowerCasedCharacters, upperCasedCharacters);
// function getRandom(arr) {
//   for (var i = 0; i < arr.length; i++){
//     randomStr += arr[Math.floor(Math.random() * arr.length)];
   
//   }
// return randomStr
// }
// var allRandCharacter = getRandom(newArr);

// console.log(
//   "allcharacter",  randomStr + " randomstring", allRandCharacter.length
// );
// Function to generate password with user input
function generatePassword() {
  var length = prompt("minimum 8 character, maximum 128 character",)
  if (length >= 8 && length <= 128){
    var upperCase = confirm("do you want uppercase characters?");
    var lowerCase = confirm("do you want lowercase characters?");
    var number = confirm("do you want number characters?");
    var specialChar = confirm("do you want special characters?");
    var choices = []
    if(upperCase === true){
      choices = choices.concat(upperCasedCharacters)
    }
    if (lowerCase === true) {
      choices = choices.concat(lowerCasedCharacters);
    }
    if (number === true) {
      choices = choices.concat(numericCharacters);
    }
    if (specialChar === true) {
      choices = choices.concat(specialCharacters);
    }
    if(choices.length===0){
      alert("Choose at least one type character!");
      return ""
    }
    var password = "";
    for (var i = 0; i < length; i++) {
      password += choices[Math.floor(Math.random() * choices.length)]
    }
    return password
  } else {
    alert("length is not valid, try again!");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);