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
function getPasswordOptions() {
  var options = {length: Number(prompt("Enter the length of password (between 8 and 128 characters):"))};

  if (
    typeof options.length !== "number" ||
    options.length < 8 ||
    options.length > 128
  ) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return null;
  }
  // create object value for options to confirm validation
  options.special = confirm("Do you want special character?");
  options.number = confirm("Do you want numeric character?");
  options.lowerCase = confirm("Do you want lowercase character?");
  options.upperCase = confirm("Do you want uppercase character?");
  // validate at least one character type is selected
  if (!options.special && !options.number && !options.lowerCase && !options.upperCase) {
    alert("Please select at least one character type!")
    return null;
  }
  return options
}

// Function for getting a random element from an array

function getRandom(arr) {
  randomStr = arr[Math.floor(Math.random() * arr.length)];
  return randomStr
}

// Function to generate password with user input
function generatePassword() {
  var selectedOption = getPasswordOptions()
  var settingUp = ""

  var spec = specialCharacters.join("");
  var numb = numericCharacters.join("");
  var lower = lowerCasedCharacters.join("");
  var upper = upperCasedCharacters.join("");

  if(selectedOption.special){
    console.log(spec, "specail")
    settingUp += spec
  }
  if(selectedOption.number){
    settingUp += numb
  }
  if (selectedOption.lowerCase) {
    settingUp += lower;
  }
  if (selectedOption.upperCase) {
    settingUp += upper;
  }
// declare password variable, for loop over selected options and run getRandom function with settingUp argument
  var password = "";
  for (var i = 0; i < selectedOption.length; i++){
    password += getRandom(settingUp)
  }

  return password
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