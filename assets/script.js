// Assignment code here
var allCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var allLower ="abcdefghijklmnopqrstuvwxyz";
var allSpec = "!@#$%^&*()+-?<>";
var allNum = "1234567890";


var generatePassword = function (){
  var passString = ""
  var combineString =""
  window.alert(`Welcome to password Generator!`)
  var promptLength = window.prompt(`What is the length of the password? Password has to be minium 8 characters no more then 128` )
 var promptlowercase =window.confirm(`Would you like to add lower case letters to password?`)
 var promptCapitalcase =window.confirm(`Would you like to add capital case letters to password?`)
 var promtSpecialCharacter = window.confirm(`Would you like to add special characters to password?`)
 var promtNumberCharacters = window.confirm(`Would you like to add number characters to password?`)
if(promptLength < 8 || promptLength > 128){
 return window.alert(`Password length does not meet requirments!`)
 
}

if(promptlowercase){
  combineString += allLower
}
if(promptCapitalcase){
  combineString += allCap
}
if(promtSpecialCharacter){
  combineString += allSpec
}
if(promtNumberCharacters){
  combineString += allNum
}
if(combineString === ""){
  return window.alert(`Must select at least one character!`)
}
 if(combineString != ""){
  for(let i = 0; i < promptLength; i++){
    passString += combineString[Math.floor(Math.random() * combineString.length)]
  }
  return passString
 }
 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
