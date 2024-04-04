// Assignment code here
var allCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var allLower ="abcdefghijklmnopqrstuvwxyz"
var allSpec = "!@#$%^&*()+-?<>"
var allNum = "1234567890";


// var randomUpperCaseLetters = function(freq){
//   var Capletter = "";
//  for(let i = 0; i < freq; i++){
//   const random = Math.floor(Math.random() * Capletter.length )
//   Capletter += upperCase[random]
//  }
//  return Capletter
// }



// var randomLoweCaseLetters = function(freq){
//   var Capletter = "";
//  for(let i = 0; i < freq; i++){
//   const random = Math.floor(Math.random() * Capletter.length )
//   Capletter += lowerCase[random]
//  }
//  return Capletter
// }



var generatePassword = function (){
  var passString = ""
window.alert(`Welcome to password Generator!`)
 var promptLength = window.prompt(`What is the length of the password? Password has to be minium 8 characters no more then 128` )
 var promptlowercase =window.confirm(`Would you like to add lower case letters to password?`)
 var promptCapitalcase =window.confirm(`Would you like to add capital case letters to password?`)
 while(promptLength >= 8 && promptLength < 128){
 if(promptCapitalcase){
  for(let i = 0; i < promptLength; i++){
    const random = Math.floor(Math.random() * allCap.length)
    passString += allCap.charAt(random)
  }
   return passString
 } 
//  if(promptlowercase){
//   for(let i = 0; i < promptLength; i++){
//     const random = Math.floor(Math.random() * passString.length)
//     passString += allLower[random]
//   }
//    return passString
//  }

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
