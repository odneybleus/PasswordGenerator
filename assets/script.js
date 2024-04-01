// Assignment code here
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var randomletters = function(freq){
  var Capletter = "";
 for(let i = 0; i < freq; i++){
  const random = Math.floor(Math.random() * Capletter.length )
  Capletter += letter[random]
 }
 return Capletter
}
var PasswordLength = function(n){
if(n >= 8 || n < 128) {
  return n
}
}


var generatePassword = function (){
window.alert(`Welcome to password Generator!`)
 var promptLength = window.prompt(`What is the length of the password? Password has to be minium 8 characters no more then 128` )
 if(promptLength >= 8 || promptLength < 128){
  return randomletters(promptLength);
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
